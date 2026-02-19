import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "fs/promises";

const SEARCH_API =
  "https://ac.cnstrc.com/v1/autocomplete/{query}?key=key_KcSYfmQTEwRpBnd9&c=cio-fe-web-jarir&num_results_Products=50";

const PRODUCT_API =
  "https://www.jarir.com/api/catalogv2/product/store/sa-en/sku/{sku}/size/1";

const ETA_API =
  "https://www.jarir.com/api/v2/sa_en/stock/getETAPDPV2";

// ===== SEARCH =====
async function searchProducts(query) {
  const url = SEARCH_API.replace("{query}", encodeURIComponent(query));
  const res = await fetch(url);
  const data = await res.json();
  return data.sections?.Products || [];
}

// ===== PRODUCT DETAILS =====
async function getProductDetails(sku) {
  const url = PRODUCT_API.replace("{sku}", sku);
  const res = await fetch(url);
  const data = await res.json();

  if (!data.data?.hits?.hits?.[0]?._source) {
    throw new Error(`Product not found for SKU: ${sku}`);
  }

  const product = data.data.hits.hits[0]._source;

  const price =
    product.final_price_ex_tax ||
    product.final_price ||
    product.price;

  if (!price) {
    throw new Error(`Price not available for SKU: ${sku}`);
  }

  return {
    name: product.name,
    price: Number(price).toFixed(2),
  };
}

// ===== AVAILABILITY =====
async function checkAvailability(sku, showroom_code, city_code, district_id) {
  const params = new URLSearchParams({
    countryId: "SA",
    city: city_code || "",
    district: district_id || "",
    sku: sku,
    qty: "1",
    mirakl_offer_id: "0",
    cart_weight: "1",
    delivery_method: "COLLECTION",
    customer_group: "",
    type: "LIVE",
    showroom_code: showroom_code,
  });

  const url = `${ETA_API}?${params.toString()}`;

  const res = await fetch(url);
  const data = await res.json();

  // Safe error handling: check success before accessing data
  if (!data.success || !data.data) {
    throw new Error(
      `Availability API error: ${data.message || "Invalid response"}`
    );
  }

  return data.data;
}

// ===== MAIN =====
async function main() {
  const rl = readline.createInterface({ input, output });
  const branches = JSON.parse(
    await fs.readFile("branches.json", "utf-8")
  );

  try {
    // ===== PRODUCT SEARCH =====
    const query = await rl.question("Enter product name: ");
    const products = await searchProducts(query);

    if (!products.length) {
      console.log("No products found.");
      return;
    }

    // Let user choose product manually (no LLM)
    console.log("\nSelect Product:");
    products.forEach((p, i) => {
      console.log(`${i + 1}. ${p.data.description}`);
    });

    const productIndex = parseInt(
      await rl.question("Enter product number: ")
    ) - 1;

    if (productIndex < 0 || productIndex >= products.length) {
      throw new Error("Invalid product selection");
    }

    const sku = products[productIndex].data.sku;
    const product = await getProductDetails(sku);

    console.log("\nProduct:", product.name);
    console.log("Final Price:", product.price, "SAR");

    // ===== CITY SELECTION =====
    const cities = [...new Set(branches.map(b => b.city))];

    console.log("\nSelect City:");
    cities.forEach((city, i) => {
      console.log(`${i + 1}. ${city}`);
    });

    const cityIndex = parseInt(
      await rl.question("Enter city number: ")
    ) - 1;

    if (cityIndex < 0 || cityIndex >= cities.length) {
      throw new Error("Invalid city selection");
    }

    const selectedCity = cities[cityIndex];

    const cityBranches = branches.filter(
      b => b.city === selectedCity
    );

    if (!cityBranches.length) {
      throw new Error(`No branches found in ${selectedCity}`);
    }

    // ===== BRANCH SELECTION =====
    console.log(`\nBranches in ${selectedCity}:`);
    cityBranches.forEach((b, i) => {
      console.log(`${i + 1}. ${b.name}`);
    });

    const branchIndex = parseInt(
      await rl.question("Enter branch number: ")
    ) - 1;

    if (branchIndex < 0 || branchIndex >= cityBranches.length) {
      throw new Error("Invalid branch selection");
    }

    const selectedBranch = cityBranches[branchIndex];

    // Validate branch has required fields
    if (!selectedBranch.city_code || !selectedBranch.district_id) {
      throw new Error(
        `Branch ${selectedBranch.name} is missing city_code or district_id`
      );
    }

    // ===== AVAILABILITY =====
    const availability = await checkAvailability(
      sku,
      selectedBranch.showroom_code,
      selectedBranch.city_code,
      selectedBranch.district_id
    );

    console.log("\nBranch:", selectedBranch.name);
    console.log("Availability:", availability.availability || "N/A");
    console.log("Collect ETA:", availability.max_collect_eta || "N/A");

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    rl.close();
  }
}

main();
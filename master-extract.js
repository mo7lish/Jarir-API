import fs from "fs/promises";

async function loadBranches() {
  const raw = await fs.readFile("master_data.json", "utf8");
  const json = JSON.parse(raw);

  const items = Array.isArray(json.data) ? json.data : [];

  const centres = items.filter(
    (x) =>
      x &&
      typeof x === "object" &&
      Object.prototype.hasOwnProperty.call(x, "centre_id") &&
      Object.prototype.hasOwnProperty.call(x, "code")
  );

  const cities = items.filter(
    (x) =>
      x &&
      typeof x === "object" &&
      Object.prototype.hasOwnProperty.call(x, "city_id") &&
      Object.prototype.hasOwnProperty.call(x, "default_city_name")
  );

  const cityMap = {};
  cities.forEach((c) => {
    const en = c.locales?.find((l) => l.locale === "en_US");
    cityMap[c.city_id] =
      c.default_city_name ||
      en?.name ||
      en?.city_name ||
      "Unknown";
  });

  function inferCityFromName(name) {
    if (!name || typeof name !== "string") return null;
    if (!name.includes(" - ")) return null;
    const last = name.split(" - ").pop()?.trim();
    return last || null;
  }

  function inferCityFromAddress(address) {
    if (!address || typeof address !== "string") return null;
    if (address.includes(",")) {
      const last = address.split(",").pop()?.trim();
      return last || null;
    }
    if (address.includes(" - ")) {
      const last = address.split(" - ").pop()?.trim();
      return last || null;
    }
    return null;
  }

  function getCityCode(cityName) {
    if (!cityName || typeof cityName !== "string") return null;
    const normalized = cityName.toLowerCase().trim();

    const cityCodeMap = {
      riyadh: "RUH",
      jeddah: "JED",
      dammam: "DMM",
      khobar: "DMM",
      "al khobar": "DMM",
      dhahran: "DMM",
      madinah: "MED",
      makkah: "MAK",
      mecca: "MAK",
      taif: "TIF",
      abha: "AHB",
      tabuk: "TUU",
      hafer: "HFR",
      "hafer al batin": "HFR",
      hail: "HAS",
      buraidah: "ELQ",
      "al rass": "ELQ",
      "al ahssa": "HOF",
      "al ahsa": "HOF",
      jubail: "JUB",
      gizan: "GIZ",
      najran: "EAM",
      khamis: "KMX",
      "khamis mushait": "KMX",
      sakaka: "AJF",
      alkharj: "HOF",
      "al kharj": "HOF",
      majma: "MJH",
      "al majma": "MJH",
      "ad duwadimi": "DWD",
      yanbu: "YNB",
    };

    if (cityCodeMap[normalized]) {
      return cityCodeMap[normalized];
    }

    for (const [key, code] of Object.entries(cityCodeMap)) {
      if (normalized.includes(key) || key.includes(normalized)) {
        return code;
      }
    }

    return null;
  }

  const branches = centres
    .filter((c) => c.country_id === 181 && c.status === 1 && c.code)
    .map((c) => {
      const en = c.locales?.find((l) => l.locale === "en_US");
      const name = en?.centre_name || c.default_centre_name || "Unknown";
      const address = en?.centre_address || c.default_centre_address || "";

      const inferredCity =
        inferCityFromName(name) || inferCityFromAddress(address);
      const city = cityMap[c.city_id] || inferredCity || "Unknown";

      let cleanName = name;
      if (inferredCity && name.includes(" - ")) {
        const parts = name.split(" - ");
        const lastPart = parts[parts.length - 1]?.trim();
        if (
          lastPart &&
          (city.toLowerCase().includes(lastPart.toLowerCase()) ||
          lastPart.toLowerCase().includes(city.toLowerCase()))
        ) {
          cleanName = parts.slice(0, -1).join(" - ").trim();
        }
      }

      return {
        showroom_code: c.code,
        name: cleanName,
        city,
        city_code: getCityCode(city) || null,
        district_id: c.district_id ? String(c.district_id) : null,
      };
    });

  return branches;
}

async function main() {
  try {
    const branches = await loadBranches();

    console.log("Total branches:", branches.length);
    console.log(branches.slice(0, 5));

    await fs.writeFile(
      "branches.json",
      JSON.stringify(branches, null, 2)
    );

    console.log("Saved branches.json successfully.");
  } catch (err) {
    console.error("Error loading master data:", err.message);
  }
}

main();

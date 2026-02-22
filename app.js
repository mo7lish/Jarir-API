const SEARCH_API = 'https://ac.cnstrc.com/v1/autocomplete/{query}?key=key_KcSYfmQTEwRpBnd9&c=cio-fe-web-jarir&num_results_Products=50';
const PRODUCT_API = 'https://www.jarir.com/api/catalogv2/product/store/sa-en/sku/{sku}/size/1';
const ETA_API = 'https://www.jarir.com/api/v2/sa_en/stock/getETAPDPV2';

const BRANCHES_DATA = [{"showroom_code":"0202","name":"Al Rashid Mall","city":"Khobar","city_code":"DMM","district_id":"2361"},{"showroom_code":"0201","name":"Corniche Road","city":"Khobar","city_code":"DMM","district_id":"2349"},{"showroom_code":"0203","name":"Al Khaleej Road","city":"Dammam","city_code":"DMM","district_id":"2234"},{"showroom_code":"0206","name":"Dammam Plaza","city":"Dammam","city_code":"DMM","district_id":"2270"},{"showroom_code":"0207","name":"Amwaj Mall","city":"Dhahran","city_code":"DMM","district_id":"2637"},{"showroom_code":"0113","name":"North Ring Road - Al Zahra District","city":"Hail","city_code":"HAS","district_id":"1469"},{"showroom_code":"0311","name":"Northern Corniche Road","city":"Gizan","city_code":"GIZ","district_id":"1267"},{"showroom_code":"0114","name":"South Ring Road - Exit 25","city":"Riyadh","city_code":"RUH","district_id":"389"},{"showroom_code":"0307","name":"Abo Bakr Al Siddiq Road (Sultanah Road)","city":"Madinah","city_code":"MED","district_id":"1021"},{"showroom_code":"0309","name":"Ali Bin Abi Talib Street","city":"Yanbu","city_code":"YNB","district_id":"1062"},{"showroom_code":"0112","name":"Panorama Mall","city":"Riyadh","city_code":"RUH","district_id":"336"},{"showroom_code":"0103","name":"Jarir Plaza - Olaya District","city":"Riyadh","city_code":"RUH","district_id":"303"},{"showroom_code":"0304","name":"Al Tahaliah Street","city":"Jeddah","city_code":"JED","district_id":"1949"},{"showroom_code":"0107","name":"North Ring Road - Alnafal District","city":"Riyadh","city_code":"RUH","district_id":"361"},{"showroom_code":"0108","name":"Khurais Road - Alrayan District","city":"Riyadh","city_code":"RUH","district_id":"261"},{"showroom_code":"0111","name":"Al Rabwah District","city":"Riyadh","city_code":"RUH","district_id":"262"},{"showroom_code":"0104","name":"Hayat Mall","city":"Riyadh","city_code":"RUH","district_id":"343"},{"showroom_code":"0305","name":"Prince Sultan Road - Jarir Mall","city":"Jeddah","city_code":"JED","district_id":"2010"},{"showroom_code":"0105","name":"Al Hamra District","city":"Riyadh","city_code":"RUH","district_id":"248"},{"showroom_code":"0110","name":"Al Badia District","city":"Riyadh","city_code":"RUH","district_id":"237"},{"showroom_code":"0301","name":"Sary Street","city":"Jeddah","city_code":"JED","district_id":"1953"},{"showroom_code":"0101","name":"Al Ahsa Street - Al Malaz District","city":"Riyadh","city_code":"RUH","district_id":"339"},{"showroom_code":"0308","name":"As Sail Road -  Al Adel District","city":"Makkah","city_code":"MAK","district_id":"1761"},{"showroom_code":"0115","name":"Uthman Ibn Affan Road - Al Narjis District","city":"Riyadh","city_code":"RUH","district_id":"356"},{"showroom_code":"0303","name":"Makkah Jeddah Expressway Road - Al Hijaz Mall","city":"Makkah","city_code":"MAK","district_id":"1775"},{"showroom_code":"0109","name":"Onaiza","city":"As Salhiyah District.","city_code":null,"district_id":"832"},{"showroom_code":"0106","name":"Othman Bin Affan Road","city":"Buraidah","city_code":"ELQ","district_id":"713"},{"showroom_code":"0312","name":"Prince Majed Road","city":"Jeddah","city_code":"JED","district_id":"1974"},{"showroom_code":"0313","name":"Alshafa Road","city":"Taif","city_code":"TIF","district_id":"1813"},{"showroom_code":"0117","name":"Al Thagher Plaza","city":"Riyadh","city_code":"RUH","district_id":"385"},{"showroom_code":"0118","name":"Rubeen Plaza","city":"Riyadh","city_code":"RUH","district_id":"385"},{"showroom_code":"0116","name":"Al Khaleej District","city":"Riyadh","city_code":"RUH","district_id":"251"},{"showroom_code":"0314","name":"King Abdullah Road","city":"Madinah","city_code":"MED","district_id":"1043"},{"showroom_code":"0119","name":"North Ring Road - Al Masif District","city":"Riyadh","city_code":"RUH","district_id":"333"},{"showroom_code":"0209","name":"Al Faislaiah District","city":"Dammam","city_code":"DMM","district_id":"2257"},{"showroom_code":"0315","name":"Park Mall","city":"Tabuk","city_code":"TUU","district_id":"2803"},{"showroom_code":"0210","name":"King Abdulaziz Road","city":"Hafer Al Batin","city_code":"HFR","district_id":"2545"},{"showroom_code":"0155","name":"Riyadh Fulfillment Center","city":"0155","city_code":null,"district_id":"262"},{"showroom_code":"0316","name":"King Khalid Road (Military City Road)","city":"Khamis Mushait","city_code":"KMX","district_id":"1606"},{"showroom_code":"0355","name":"Jeddah Fulfillment Center-0355","city":"Ar Rawdah Dist.","city_code":null,"district_id":"2032"},{"showroom_code":"0120","name":"King Abdullah Road","city":"AlKharj","city_code":"HOF","district_id":"422"},{"showroom_code":"0211","name":"King Faisal Road","city":"Khobar","city_code":"DMM","district_id":"2352"},{"showroom_code":"0255","name":"Dammam Fulfillment Center-0255","city":"An Nuzhah Dist.","city_code":null,"district_id":"2270"},{"showroom_code":"0317","name":"Jeddah Airport - Domestic Terminal (For Travellers only)","city":"Jeddah","city_code":"JED","district_id":"2033"},{"showroom_code":"0318","name":"King Abdulaziz Road","city":"Jeddah","city_code":"JED","district_id":"1931"},{"showroom_code":"0121","name":"Al Rawdah District","city":"Riyadh","city_code":"RUH","district_id":"271"},{"showroom_code":"0319","name":"Madinah Airport - International Terminal (For Travellers only)","city":"Madinah","city_code":"MED","district_id":"960"},{"showroom_code":"0320","name":"King Fahad Road","city":"Sakaka","city_code":"AJF","district_id":"75"},{"showroom_code":"0124","name":"King Abdulaziz Road - Salahhuddin District","city":"Riyadh","city_code":"RUH","district_id":"390"},{"showroom_code":"0123","name":"King Abdulaziz Road","city":"Ad Duwadimi","city_code":"DWD","district_id":"464"},{"showroom_code":"0122","name":"Khurais Road -  Al Nahda District","city":"Riyadh","city_code":"RUH","district_id":"363"},{"showroom_code":"0126","name":"Majma","city":"Al Majma","city_code":"MJH","district_id":"530"},{"showroom_code":"0125","name":"King Fahad Road","city":"Al Rass","city_code":"ELQ","district_id":"770"},{"showroom_code":"0212","name":"King Abdullah Road","city":"Al Ahssa","city_code":"HOF","district_id":"2722"},{"showroom_code":"0204","name":"Dhahran Road","city":"Al Ahssa","city_code":"HOF","district_id":"2718"},{"showroom_code":"0208","name":"Ain Najm Street","city":"Al Ahssa","city_code":"HOF","district_id":"2722"},{"showroom_code":"0321","name":"Jameah Town Square","city":"Jeddah","city_code":"JED","district_id":"1940"},{"showroom_code":"0322","name":"Al Awali District","city":"Makkah","city_code":"MAK","district_id":"1766"},{"showroom_code":"0324","name":"Najran","city":"Najran","city_code":"EAM","district_id":"2124"},{"showroom_code":"0310","name":"King Fahad Road","city":"Khamis Mushait","city_code":"KMX","district_id":"1604"},{"showroom_code":"0323","name":"Andalus ","city":"Ar Ruwais District","city_code":null,"district_id":"1954"},{"showroom_code":"0144","name":"Jarir Service Center","city":"Unknown","city_code":null,"district_id":"303"},{"showroom_code":"0325","name":"Jawhara","city":"Jeddah KSA","city_code":"JED","district_id":"1924"},{"showroom_code":"0127","name":"Abi Bakr As Siddiq Rd, Al Aarid","city":"Riyadh 13335","city_code":"RUH","district_id":"296"},{"showroom_code":"0128","name":"Al Mansurah Dist.","city":"Riyadh","city_code":"RUH","district_id":"347"},{"showroom_code":"0143","name":"Jarir DC (Main WH)","city":"Online Fulfilment Center 0143","city_code":null,"district_id":"282"},{"showroom_code":"0326","name":"Red Sea Mall","city":"Jeddah","city_code":"JED","district_id":"1967"},{"showroom_code":"0205","name":"Fanateer","city":"Jubail","city_code":"JUB","district_id":"2322"},{"showroom_code":"0332","name":"Clock Towers","city":"Makkah","city_code":"MAK","district_id":"1741"},{"showroom_code":"S2000","name":"S2000_Marketpalce","city":"Unknown","city_code":null,"district_id":"303"},{"showroom_code":"0331","name":"Aliat Mall - Kinan","city":"Madinah","city_code":"MED","district_id":"971"},{"showroom_code":"JPP2001","name":"JPP2001-Family Center","city":"Unknown","city_code":null,"district_id":"332"},{"showroom_code":"JPP2002","name":"JPP2002-AALAMI ALMUTANAWA TRADING ONE PERSON COMPANY LLC","city":"Unknown","city_code":null,"district_id":"409"},{"showroom_code":"JPP2003","name":"JPP2003-ALSANNAT","city":"Abdul Wahab Al Jalali","city_code":null,"district_id":"328"},{"showroom_code":"JPP2004","name":"JPP2004-SAMACO","city":"Jeddah 22518","city_code":"JED","district_id":"2015"},{"showroom_code":"0328","name":"King Abdulaziz Rd, An Nuzhah Dist.","city":"Al Baha 65528","city_code":null,"district_id":"14"}];

let branches = BRANCHES_DATA;
let selectedProduct = null;
let selectedCity = null;
let selectedBranch = null;

const sections = {
  search: document.getElementById('search-section'),
  products: document.getElementById('product-section'),
  productDetails: document.getElementById('product-details-section'),
  city: document.getElementById('city-section'),
  branch: document.getElementById('branch-section'),
  availability: document.getElementById('availability-section'),
};

const loading = document.getElementById('loading');
const errorEl = document.getElementById('error');

function init() {
  if (!branches || branches.length === 0) {
    showError('Branch data is missing. Please refresh the page.');
    return;
  }
  hideLoading();
}

function showSection(sectionName) {
  Object.values(sections).forEach(s => s.classList.add('hidden'));
  sections[sectionName].classList.remove('hidden');
  hideError();
}

function showLoading() {
  loading.classList.remove('hidden');
}

function hideLoading() {
  loading.classList.add('hidden');
}

function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.remove('hidden');
}

function hideError() {
  errorEl.classList.add('hidden');
}

async function searchProducts(query) {
  const url = SEARCH_API.replace('{query}', encodeURIComponent(query));
  const res = await fetch(url);
  const data = await res.json();
  return data.sections?.Products || [];
}

async function getProductDetails(sku) {
  const url = PRODUCT_API.replace('{sku}', sku);
  const res = await fetch(url);
  const data = await res.json();

  if (!data.data?.hits?.hits?.[0]?._source) {
    throw new Error(`Product not found for SKU: ${sku}`);
  }

  const product = data.data.hits.hits[0]._source;
  const price = product.final_price_ex_tax || product.final_price || product.price;

  if (!price) {
    throw new Error(`Price not available for SKU: ${sku}`);
  }

  return {
    name: product.name,
    price: Number(price).toFixed(2),
    sku: sku,
  };
}

async function checkAvailability(sku, showroomCode, cityCode, districtId) {
  const params = new URLSearchParams({
    countryId: 'SA',
    city: cityCode || '',
    district: districtId || '',
    sku: sku,
    qty: '1',
    mirakl_offer_id: '0',
    cart_weight: '1',
    delivery_method: 'COLLECTION',
    customer_group: '',
    type: 'LIVE',
    showroom_code: showroomCode,
  });

  const url = `${ETA_API}?${params.toString()}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.success || !data.data) {
    throw new Error(`Availability API error: ${data.message || 'Invalid response'}`);
  }

  return data.data;
}

document.getElementById('search-btn').addEventListener('click', async () => {
  const query = document.getElementById('product-search').value.trim();
  if (!query) return;

  try {
    showLoading();
    hideError();
    const products = await searchProducts(query);
    hideLoading();

    if (!products.length) {
      showError('No products found. Try a different search term.');
      return;
    }

    displayProducts(products);
    showSection('products');
  } catch (err) {
    hideLoading();
    showError(`Error searching products: ${err.message}`);
  }
});

document.getElementById('product-search').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('search-btn').click();
  }
});

document.getElementById('back-to-search').addEventListener('click', () => {
  document.getElementById('product-search').value = '';
  showSection('search');
});

document.getElementById('back-to-products').addEventListener('click', () => {
  showSection('products');
});

document.getElementById('check-availability-btn').addEventListener('click', () => {
  showCitySelection();
});

document.getElementById('back-to-city').addEventListener('click', () => {
  showSection('city');
});

document.getElementById('back-to-details').addEventListener('click', () => {
  showSection('productDetails');
});

document.getElementById('back-to-branch').addEventListener('click', () => {
  showSection('branch');
});

document.getElementById('new-search').addEventListener('click', () => {
  selectedProduct = null;
  selectedCity = null;
  selectedBranch = null;
  document.getElementById('product-search').value = '';
  showSection('search');
});

function displayProducts(products) {
  const list = document.getElementById('products-list');
  list.innerHTML = '';

  const maxProducts = parseInt(document.getElementById('max-products').value) || 10;
  const productsToShow = products.slice(0, maxProducts);

  if (products.length > maxProducts) {
    const countInfo = document.createElement('div');
    countInfo.className = 'hint';
    countInfo.style.marginBottom = '1rem';
    countInfo.textContent = `Showing ${maxProducts} of ${products.length} results`;
    list.appendChild(countInfo);
  }

  productsToShow.forEach((product) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.textContent = product.data.description;
    item.addEventListener('click', async () => {
      try {
        showLoading();
        const productDetails = await getProductDetails(product.data.sku);
        hideLoading();
        selectedProduct = productDetails;
        displayProductDetails(productDetails);
        showSection('productDetails');
      } catch (err) {
        hideLoading();
        showError(`Error loading product: ${err.message}`);
      }
    });
    list.appendChild(item);
  });
}

function displayProductDetails(product) {
  const info = document.getElementById('product-info');
  info.innerHTML = '';

  const heading = document.createElement('h3');
  heading.textContent = product.name;
  info.appendChild(heading);

  const priceDiv = document.createElement('div');
  priceDiv.className = 'price';
  priceDiv.textContent = `${product.price} SAR`;
  info.appendChild(priceDiv);
}

function showCitySelection() {
  if (!branches || branches.length === 0) {
    showError('Branch data not loaded. Please refresh the page.');
    return;
  }

  const cities = [...new Set(branches.map(b => b.city))];
  if (cities.length === 0) {
    showError('No cities found in branch data.');
    return;
  }

  displayCities(cities);
  showSection('city');
}

function displayCities(cities) {
  const list = document.getElementById('cities-list');
  list.innerHTML = '';

  cities.forEach((city) => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.textContent = city;
    item.addEventListener('click', async () => {
      selectedCity = city;
      showLoading();
      showSection('branch');
      const cityBranches = branches.filter(b => b.city === city);
      await displayBranchesWithAvailability(cityBranches);
    });
    list.appendChild(item);
  });
}

function getStatusClass(availability) {
  if (!availability || !availability.availability) {
    return 'unknown';
  }

  const status = availability.availability.toUpperCase();
  if (status === 'IN_STOCK' || status === 'AVAILABLE') {
    const qty = availability.sku?.[0]?.available_qty;
    if (qty !== undefined && qty > 0 && qty < 5) {
      return 'limited';
    }
    return 'in-stock';
  }
  if (status === 'OUT_OF_STOCK' || status === 'UNAVAILABLE') {
    return 'out-of-stock';
  }
  return 'unknown';
}

function getStatusText(availability) {
  if (!availability || !availability.availability) {
    return 'Unknown';
  }

  const status = availability.availability.toUpperCase();
  if (status === 'IN_STOCK' || status === 'AVAILABLE') {
    const qty = availability.sku?.[0]?.available_qty;
    if (qty !== undefined && qty > 0 && qty < 5) {
      return `Limited (${qty})`;
    }
    return 'In Stock';
  }
  if (status === 'OUT_OF_STOCK' || status === 'UNAVAILABLE') {
    return 'Out of Stock';
  }
  return status.replace('_', ' ');
}

async function displayBranchesWithAvailability(cityBranches) {
  const list = document.getElementById('branches-list');
  list.innerHTML = '';

  const validBranches = cityBranches.filter(b => b.city_code && b.district_id);

  if (validBranches.length === 0) {
    showError('No branches with valid data found in this city.');
    return;
  }

  showLoading();

  const branchItems = [];
  validBranches.forEach((branch) => {
    const item = document.createElement('div');
    item.className = 'list-item status-checking';
    item.innerHTML = `
      <div>${branch.name}</div>
      <div class="branch-status unknown">
        <span class="status-indicator unknown"></span>
        <span>Checking...</span>
      </div>
    `;
    branchItems.push({ branch, item });
    list.appendChild(item);
  });

  hideLoading();

  for (let i = 0; i < branchItems.length; i++) {
    const { branch, item } = branchItems[i];

    try {
      const availability = await checkAvailability(
        selectedProduct.sku,
        branch.showroom_code,
        branch.city_code,
        branch.district_id
      );

      const statusClass = getStatusClass(availability);
      const statusText = getStatusText(availability);

      item.className = `list-item status-${statusClass}`;
      item.innerHTML = `
        <div><strong>${branch.name}</strong></div>
        <div class="branch-status ${statusClass}">
          <span class="status-indicator ${statusClass}"></span>
          <span>${statusText}</span>
        </div>
      `;

      item.addEventListener('click', () => {
        selectedBranch = branch;
        displayAvailability(branch, availability);
        showSection('availability');
      });

      if (i < branchItems.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    } catch (err) {
      item.className = 'list-item status-unknown';
      item.innerHTML = `
        <div><strong>${branch.name}</strong></div>
        <div class="branch-status unknown">
          <span class="status-indicator unknown"></span>
          <span>Error checking</span>
        </div>
      `;
    }
  }
}

function displayAvailability(branch, availability) {
  const info = document.getElementById('availability-info');

  const status = availability.availability || 'UNKNOWN';
  const statusClass = status.toLowerCase().replace('_', '-');
  const statusText = status.replace('_', ' ');

  info.innerHTML = '';

  const heading = document.createElement('h3');
  heading.textContent = branch.name;
  info.appendChild(heading);

  const statusDiv = document.createElement('div');
  statusDiv.className = `status ${statusClass}`;
  statusDiv.textContent = statusText;
  info.appendChild(statusDiv);

  const locationRow = document.createElement('div');
  locationRow.className = 'info-row';
  locationRow.innerHTML = `
    <span class="info-label">Location:</span>
    <span class="info-value">${branch.city}</span>
  `;
  info.appendChild(locationRow);

  const etaRow = document.createElement('div');
  etaRow.className = 'info-row';
  etaRow.innerHTML = `
    <span class="info-label">Collection ETA:</span>
    <span class="info-value">${availability.max_collect_eta || 'N/A'}</span>
  `;
  info.appendChild(etaRow);
}

init();

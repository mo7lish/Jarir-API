# Jarir Bookstore Search

Check real-time product availability, pricing, and collection times across **78+ Jarir Bookstore branches** in Saudi Arabia.

**Live Demo:** [jarir-api.netlify.app](https://jarir-api.netlify.app)

## What It Does

Search any product sold at [Jarir Bookstore](https://www.jarir.com), see its current price, then check stock availability and estimated collection time at any branch across Saudi Arabia.

**Supported cities include:** Riyadh, Jeddah, Dammam, Makkah, Madinah, Taif, Hail, Buraidah, Khamis Mushait, and many more.

## How to Use

1. **Search** for a product by name
2. **Select** the product from the results
3. **Pick your city** from the list of available locations
4. **Choose a branch** to see real-time stock status and collection ETA

## How It Works

The app calls Jarir's public REST APIs directly from the browser — no backend or API keys needed:

- **Search API** — product lookup via autocomplete
- **Product API** — fetches final customer-visible pricing
- **Availability API** — branch-level stock status and collection time estimates

Branch location data (showroom codes, city codes, district IDs) is maintained in `branches.json`.

## Running Locally

Clone the repo and open `index.html` in a browser, or use any local server:

```bash
npx serve .
```

No build step or dependencies required.

## Updating Branch Data

If Jarir adds or changes branches, update `branches.json` by running:

```bash
node master-extract.js
```

This extracts and maps branch data from Jarir's master data API response.

## License

Open source. Use it however you like.

# Jarir Bookstore Search

A web application that searches Jarir products, displays real-time pricing, and checks availability in Saudi Arabia branches.

## Features

- 🔍 **Product Search** - Search products by name using Jarir's autocomplete API
- 💰 **Real-time Pricing** - Get the actual final customer-visible price
- 📍 **Branch Selection** - Select city and branch from all Saudi locations
- ✅ **Availability Check** - Real-time stock availability and collection ETA for specific branches

## How It Works

This app uses Jarir's public REST APIs discovered through browser DevTools:

1. **Search API** - Finds products by name
2. **Product API** - Gets detailed product info and final price
3. **Availability API** - Checks branch-specific stock and collection times
4. **Master Data** - Contains all branch locations (loaded from `branches.json`)

## Deployment

### Netlify

1. Push this repository to GitHub
2. Connect to Netlify
3. Set build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
4. Deploy!

The `netlify.toml` file is already configured for static site deployment.

### Manual Deployment

Simply upload all files to any static hosting service. The app works entirely client-side.

## File Structure

- `index.html` - Main HTML structure
- `style.css` - Styling
- `app.js` - Application logic
- `branches.json` - Branch data (generated from master data)
- `netlify.toml` - Netlify configuration

## Updating Branch Data

To update `branches.json` with latest branch data:

```bash
node master-extract.js
```

This extracts branch information from `master_data.json` (which should be downloaded from Jarir's master data API).

## API Endpoints Used

- Search: `https://ac.cnstrc.com/v1/autocomplete/{query}`
- Product: `https://www.jarir.com/api/catalogv2/product/store/sa-en/sku/{sku}/size/1`
- Availability: `https://www.jarir.com/api/v2/sa_en/stock/getETAPDPV2`

All endpoints are public and used by Jarir's website.

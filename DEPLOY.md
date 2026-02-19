# Deployment Guide

## Quick Deploy to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

   Or for a draft/preview:
   ```bash
   netlify deploy
   ```

### Option 2: GitHub + Netlify UI

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repo
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

### Option 3: Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire project folder
3. Done!

## Files Included in Deployment

Make sure these files are in your repo:
- ✅ `index.html`
- ✅ `app.js`
- ✅ `style.css`
- ✅ `netlify.toml`
- ✅ `branches.json` (optional - data is embedded in app.js)
- ✅ `README.md` (optional)

## No Build Required

This is a static site - no build step needed! The `netlify.toml` is configured with:
- `publish = "."` (publish root directory)
- `command = ""` (no build command)

## After Deployment

Your site will be live at: `https://your-site-name.netlify.app`

You can customize the domain in Netlify settings.

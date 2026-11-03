# Air Conditioning Repair Reseda CA

Production-ready Astro website for a local HVAC business in Reseda, CA.

## Features

- Fully static Astro site optimized for Cloudflare Pages
- Tailwind CSS with professional blue/white palette
- 20 individual service pages + services overview
- 9 service area pages (Reseda + 8 nearby neighborhoods)
- Blog with content collections
- Contact form powered by Web3Forms (honeypot included)
- SEO: unique titles/descriptions, canonicals, Open Graph, Twitter cards, schema.org LocalBusiness
- sitemap.xml (via @astrojs/sitemap), robots.txt, llms.txt
- Accessible (skip link, semantic HTML, focus states)
- Sticky mobile click-to-call button
- Fast loading, compressed HTML

## Setup

1. Clone / unzip the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro` with your real Web3Forms access key (get one free at https://web3forms.com)
4. (Optional) Add an `og-image.jpg` (1200×630) to `/public/`

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Cloudflare Pages

1. Connect the repository (or upload the project) to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 18 or higher (or 20+)

Cloudflare Pages will automatically run `npm install` and the build command.

## Project Structure

```
src/
  components/     # (ready for shared components)
  content/
    services/     # 20 service markdown files
    areas/        # Neighborhood markdown files
    blog/         # Blog posts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    services/
    areas/
    blog/
    about.astro
    contact.astro
    faq.astro
    ...
  styles/
    global.css
public/
  robots.txt
  llms.txt
  favicon.svg
```

## License

Proprietary – for the business airconditioningrepairresedaca.us

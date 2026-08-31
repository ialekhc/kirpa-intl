# KIRPA INTERNATIONAL

Official website for KIRPA INTERNATIONAL PVT. LTD., built with Next.js and exported as a static website for cPanel hosting.

## Getting Started

Install dependencies and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production build

```bash
npm run lint
npm run build:static
```

The production files are generated in `out/`.

## Deployment

Pushes to `main` run the GitHub Actions workflow in `.github/workflows/deploy-cpanel.yml`. The workflow validates the project, creates a static build, backs up the current live site, uploads the new build to cPanel, and verifies critical deployed files.

Production website: [https://www.kirpainternational.com/](https://www.kirpainternational.com/)

## Project structure

- `app/` — application routes and metadata
- `components/` — reusable UI and page sections
- `data/` — company, country, navigation, and content data
- `public/` — local logos, images, and cPanel configuration

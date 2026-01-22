# Softique Commerce — React Portfolio

A modern, responsive, one-page portfolio site for **Softique Commerce** (Shopify solutions), built with:

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motion (subtle animations)

## Run locally

```bash
cd softique-portfolio
npm install
npm run dev
```

## Customize company content (important)

Edit:

- `src/content/companyProfile.json`

That JSON controls:

- Company name, tagline, bio
- Services, case studies, testimonials
- Email + links (LinkedIn + Shopify directory)

## Build for production

```bash
npm run build
npm run preview
```

## Node version note

Vite prints a warning unless you use **Node 20.19+ or Node 22.12+**. (It may still build on other versions, but upgrade is recommended.)

## Make it a GitHub repository

From inside `softique-portfolio`:

```bash
git init
git add .
git commit -m "Initial Softique IT portfolio"
```

Then create a new GitHub repo and push (GitHub will show the exact commands for your repo URL).

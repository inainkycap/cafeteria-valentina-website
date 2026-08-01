# Cafetería Valentina

A learning project to build and commercialize a coffee shop website: React + 
Tailwind, deployed on Vercel, with an AI agent powered by the SuperIntern SDK.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) for page navigation
- [PapaParse](https://www.papaparse.com/) for menu data parsing

## Getting started

```bash
npm install
npm run dev
```

## Milestones

1. **Setup React project** — Vite + React + Tailwind (done)
2. **Setup Vercel** — connect this repo to Vercel for deployment
3. **Setup SuperIntern SDK** — add an AI agent to the site 
   ([dashboard](https://test-app.superintern.ai/dashboard/api_messages))

## Pages

- **Home** — hero, general shop info, teaser photos (placeholder content until 
  real photos/copy are ready)
- **Menu** — tabbed menu (Cafés/tés, Bebidas, Cervezas, Pan, Polos y Batidos, 
  Para comer), with a printed-menu style layout (dotted leaders, multi-column 
  on desktop)

## Menu data

Menu content is **not stored in this repo**. It's pulled live at runtime from 
a published Google Sheet (CSV), so prices/items can be updated without a 
redeploy.

CSV columns: `category, subcategory, name, price, note`

- Blank rows are separators, skipped during parsing
- Tabs are generated dynamically from the `category` column
- A row with a category/subcategory but no name/price is treated as a 
  descriptive note for that section
- `price` is rendered as plain text (not currency-formatted), since some 
  values are modifiers (e.g. `+ 0.5`) rather than plain numbers

To update the menu: edit the Google Sheet directly — changes reflect on the 
live site without touching code.

## Design

- **Colors**: antique-white `#f8ebdb`, graphite `#36322f`, dim-gray `#636862`, 
  olive-wood `#8a6f53`, sandy-clay `#dbac7a`
- **Fonts**: Playfair Display (headers/categories), Nunito Sans (body/items)

## Content

Product photos and copy go in `src/assets`. Real photos and shop copy are 
pending — placeholders are used until then.
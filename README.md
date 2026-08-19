# Cafetería Valentina

This project started as a way for me to build a proper website for a small local café, using the stack I’ve been learning while trying to make something practical rather than just theoretical. I wanted to create a simple, warm, shop-like experience with a menu, general info, and a little bit of personality without overcomplicating the structure.

It’s a React + Vite site, styled around the café’s brand colours and type, with a menu built from external data and a little AI helper added at the end.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) for navigation between pages
- [PapaParse](https://www.papaparse.com/) for parsing the menu CSV data
- [SuperIntern](https://www.superintern.ai/) for the chat assistant widget

## Getting started

```bash
npm install
npm run dev
```

From there, the site runs locally in development mode and I can keep iterating the page layouts, styling, and menu content without needing to rebuild the whole project each time.

## Milestones

1. **Set up the project** — Vite, React, TypeScript, and Tailwind
2. **Build the site structure** — home page and menu views
3. **Connect the menu data** — pull the menu from a Google Sheet instead of hardcoding it in the app
4. **Add the AI chat widget** — SuperIntern button embedded on the site
5. **Keep refining the design** — spacing, colours, typography, and layout details

## Pages

- **Home** — hero section, café details, and a gallery area that is currently using placeholder blocks until real product photos are available
- **Menu** — a tabbed menu with section categories, printed-menu style layout, dotted leaders, and a more compact desktop layout

## Menu data

The menu content is not stored directly in this repo. It is pulled at runtime from a published Google Sheet CSV, which makes it much easier to update prices and menu items without redeploying the app every time.

CSV columns: `category, subcategory, name, price, note`

- Blank rows are separators and are skipped while parsing
- Tabs are generated dynamically from the `category` column
- A row with a category/subcategory but no name/price is treated as a descriptive note for that section
- `price` is displayed as plain text rather than a formatted currency value, because some entries are modifiers like `+ 0.5` rather than standalone prices

To update the menu, I edit the Google Sheet directly and the site reflects the changes without needing to touch the code.

## Design tokens

- **Colors**: antique-white `#f8ebdb`, graphite `#36322f`, dim-gray `#636862`, olive-wood `#8a6f53`, sandy-clay `#dbac7a`
- **Fonts**: Playfair Display for headings and category labels, Nunito Sans for body content and menu text

## Notes

I’m still using placeholders for some visuals and copy while the real storefront photos and final content are being added. The goal is to keep the structure simple and easy to swap out later, especially for images and menu data, so I can replace placeholders without having to redo the layout itself.
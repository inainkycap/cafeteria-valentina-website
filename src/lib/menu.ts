import Papa from 'papaparse'

export const MENU_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRHnG7qDUs4o_6Qk-ysT47ohYi9_bYWbESMkhYN6qtEXpoDSbKIPze0U5fZsbVdtQx5-ijej3pw3qXm/pub?output=csv'

interface RawMenuRow {
  category?: string
  subcategory?: string
  name?: string
  price?: string
  note?: string
}

export interface MenuItemEntry {
  type: 'item'
  name: string
  price: string
  note?: string
}

export interface MenuNoteEntry {
  type: 'note'
  text: string
}

export type MenuEntry = MenuItemEntry | MenuNoteEntry

export interface MenuSubcategoryGroup {
  subcategory: string | null
  entries: MenuEntry[]
}

export interface MenuCategoryTab {
  category: string
  groups: MenuSubcategoryGroup[]
}

export function parseMenuCsv(csvText: string): MenuCategoryTab[] {
  const { data } = Papa.parse<RawMenuRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  })

  const categoryOrder: string[] = []
  const subcategoryOrderByCategory = new Map<string, string[]>()
  const entriesByCategoryAndSubcategory = new Map<string, Map<string, MenuEntry[]>>()

  for (const row of data) {
    const category = (row.category ?? '').trim()
    const subcategory = (row.subcategory ?? '').trim()
    const name = (row.name ?? '').trim()
    const price = (row.price ?? '').trim()
    const note = (row.note ?? '').trim()

    if (!category && !subcategory && !name && !price && !note) continue
    if (!category) continue

    if (!entriesByCategoryAndSubcategory.has(category)) {
      entriesByCategoryAndSubcategory.set(category, new Map())
      subcategoryOrderByCategory.set(category, [])
      categoryOrder.push(category)
    }
    const subcategoryMap = entriesByCategoryAndSubcategory.get(category)!
    const subcategoryOrder = subcategoryOrderByCategory.get(category)!

    if (!subcategoryMap.has(subcategory)) {
      subcategoryMap.set(subcategory, [])
      subcategoryOrder.push(subcategory)
    }
    const entries = subcategoryMap.get(subcategory)!

    if (!name && !price) {
      if (note) entries.push({ type: 'note', text: note })
      continue
    }

    entries.push({ type: 'item', name, price, note: note || undefined })
  }

  return categoryOrder.map((category) => ({
    category,
    groups: subcategoryOrderByCategory.get(category)!.map((subcategory) => ({
      subcategory: subcategory || null,
      entries: entriesByCategoryAndSubcategory.get(category)!.get(subcategory)!,
    })),
  }))
}

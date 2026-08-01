import { useEffect, useState } from 'react'
import { MENU_CSV_URL, parseMenuCsv, type MenuCategoryTab } from '../lib/menu'

interface MenuDataState {
  tabs: MenuCategoryTab[]
  loading: boolean
  error: string | null
}

export function useMenuData(): MenuDataState {
  const [state, setState] = useState<MenuDataState>({
    tabs: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const res = await fetch(MENU_CSV_URL)
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
        const csvText = await res.text()
        const tabs = parseMenuCsv(csvText)
        if (!cancelled) setState({ tabs, loading: false, error: null })
      } catch {
        if (!cancelled) {
          setState({
            tabs: [],
            loading: false,
            error: 'No se ha podido cargar el menú en este momento. Inténtalo de nuevo más tarde.',
          })
        }
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return state
}

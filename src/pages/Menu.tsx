import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMenuData } from '../hooks/useMenuData'
import MenuTabs from '../components/menu/MenuTabs'
import SubcategoryBlock from '../components/menu/SubcategoryBlock'

function Menu() {
  const { tabs, loading, error } = useMenuData()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    if (!activeCategory && tabs.length > 0) {
      setActiveCategory(tabs[0].category)
    }
  }, [tabs, activeCategory])

  const activeTab = tabs.find((tab) => tab.category === activeCategory)

  return (
    <div className="min-h-screen bg-antique-white text-graphite">
      <header className="mx-auto max-w-5xl px-4 pt-10 pb-4 text-center">
        <Link
          to="/"
          className="inline-block rounded-full border border-olive-wood/50 px-4 py-1.5 font-body text-sm text-dim-gray transition hover:border-olive-wood hover:text-olive-wood"
        >
          &larr; Volver al inicio
        </Link>
        <h1 className="mt-2 font-display text-4xl">Menú</h1>
      </header>

      {loading && (
        <p className="py-16 text-center font-body text-dim-gray">
          Cargando el menú&hellip;
        </p>
      )}

      {error && (
        <p className="py-16 text-center font-body text-red-700">{error}</p>
      )}

      {!loading && !error && tabs.length === 0 && (
        <p className="py-16 text-center font-body text-dim-gray">
          No se han encontrado productos.
        </p>
      )}

      {!loading && !error && activeTab && (
        <>
          <MenuTabs
            categories={tabs.map((tab) => tab.category)}
            active={activeTab.category}
            onSelect={setActiveCategory}
          />
          <div className="mx-auto max-w-5xl px-4 py-8">
            <div
              className={
                activeTab.groups.length >= 2 ? 'columns-1 gap-x-10 md:columns-2' : ''
              }
            >
              {activeTab.groups.map((group, i) => (
                <SubcategoryBlock key={`${activeTab.category}-${i}`} group={group} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Menu

interface MenuTabsProps {
  categories: string[]
  active: string
  onSelect: (category: string) => void
}

function MenuTabs({ categories, active, onSelect }: MenuTabsProps) {
  return (
    <div className="sticky top-0 z-10 border-b border-olive-wood/30 bg-antique-white">
      <div className="mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3">
        {categories.map((category) => {
          const isActive = category === active
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-display text-base transition ${
                isActive
                  ? 'bg-sandy-clay text-graphite'
                  : 'text-graphite hover:bg-olive-wood/10'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MenuTabs

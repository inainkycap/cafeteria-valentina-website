import type { MenuSubcategoryGroup } from '../../lib/menu'
import MenuItemRow from './MenuItemRow'

function SubcategoryBlock({ group }: { group: MenuSubcategoryGroup }) {
  return (
    <div className="mb-8 break-inside-avoid">
      {group.subcategory && (
        <h3 className="mb-2 border-b border-olive-wood/30 pb-1 font-display text-lg text-olive-wood">
          {group.subcategory}
        </h3>
      )}
      <div className="divide-y divide-olive-wood/10">
        {group.entries.map((entry, i) => (
          <MenuItemRow key={i} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default SubcategoryBlock

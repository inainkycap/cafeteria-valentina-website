import type { MenuEntry } from '../../lib/menu'

function MenuItemRow({ entry }: { entry: MenuEntry }) {
  if (entry.type === 'note') {
    return <p className="py-1.5 font-body text-sm italic text-dim-gray">{entry.text}</p>
  }

  return (
    <div className="py-1.5">
      <div className="flex items-baseline gap-2">
        <span className="font-body text-graphite">{entry.name}</span>
        <span
          aria-hidden
          className="mb-1 flex-1 border-b border-dotted border-olive-wood/60"
        />
        <span className="whitespace-nowrap font-body text-graphite">
          {entry.price}
        </span>
      </div>
      {entry.note && (
        <p className="mt-0.5 font-body text-xs text-dim-gray">{entry.note}</p>
      )}
    </div>
  )
}

export default MenuItemRow

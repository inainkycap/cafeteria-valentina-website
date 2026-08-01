interface PlaceholderBlockProps {
  label: string
  className?: string
}

function PlaceholderBlock({ label, className = '' }: PlaceholderBlockProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-md border-2 border-dashed border-olive-wood/50 bg-olive-wood/10 text-center text-sm text-olive-wood ${className}`}
    >
      {label}
    </div>
  )
}

export default PlaceholderBlock

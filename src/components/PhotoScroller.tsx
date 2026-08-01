import { useEffect, useRef } from 'react'
import PlaceholderBlock from './PlaceholderBlock'

const PHOTOS = [1, 2, 3, 4, 5, 6]

function PhotoScroller() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const hoveredRef = useRef(false)
  const directionRef = useRef<1 | -1>(1)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let frameId: number

    function step() {
      if (el && !hoveredRef.current) {
        const max = el.scrollWidth - el.clientWidth
        if (max > 0) {
          let next = el.scrollLeft + directionRef.current * 0.6
          if (next >= max) {
            next = max
            directionRef.current = -1
          } else if (next <= 0) {
            next = 0
            directionRef.current = 1
          }
          el.scrollLeft = next
        }
      }
      frameId = requestAnimationFrame(step)
    }

    frameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => {
        hoveredRef.current = true
      }}
      onMouseLeave={() => {
        hoveredRef.current = false
      }}
      className="no-scrollbar flex gap-4 overflow-x-auto"
    >
      {PHOTOS.map((n) => (
        <div key={n} className="group relative h-32 w-48 shrink-0">
          <PlaceholderBlock label="[ FOTO ]" className="h-full w-full" />
          <div className="absolute inset-0 flex items-center justify-center rounded-md bg-graphite/75 px-3 text-center text-xs text-antique-white opacity-0 transition-opacity group-hover:opacity-100">
            [ Descripción — se añadirá más adelante ]
          </div>
        </div>
      ))}
    </div>
  )
}

export default PhotoScroller

import { Link } from 'react-router-dom'
import PhotoScroller from '../components/PhotoScroller'

function Home() {
  return (
    <div className="min-h-screen bg-antique-white text-graphite">
      {/* Hero: photo + name on the left, general info on the right. The photo
          side always stretches to match the info side's full height, so it
          reaches the bottom of the page no matter how tall the content is. */}
      <section className="flex flex-col md:min-h-screen md:flex-row">
        {/* Left: storefront photo with name overlaid at the bottom */}
        <div className="relative flex h-80 items-center justify-center border-b-2 border-dashed border-olive-wood/50 bg-olive-wood/10 md:h-auto md:w-1/2 md:border-r-2 md:border-b-0">
          <span className="px-4 text-center text-sm text-olive-wood">
            [ FOTO DEL LOCAL — MARCADOR DE POSICIÓN ]
          </span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-graphite/90 via-graphite/50 to-transparent px-6 pt-24 pb-8 text-center">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-antique-white sm:text-5xl">
              Cafetería Valentina
            </h1>
          </div>
        </div>

        {/* Right: CTA, general info, and scrolling photos on antique-white */}
        <div className="flex flex-col justify-center gap-10 bg-antique-white px-6 py-12 sm:px-12 md:w-1/2 md:py-16">
          <div className="text-center md:text-left">
            <Link
              to="/menu"
              className="inline-block rounded-full bg-sandy-clay px-8 py-3 font-display text-base font-semibold text-graphite transition hover:bg-sandy-clay/80"
            >
              Menú →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-display text-xl text-olive-wood">
                Visítanos
              </h2>
              <dl className="mt-3 space-y-3 font-body text-graphite">
                <div>
                  <dt className="text-sm text-dim-gray">Dirección</dt>
                  <dd>Carrer Major, 64, 12520 Nules, Castelló</dd>
                </div>
                <div>
                  <dt className="text-sm text-dim-gray">Teléfono</dt>
                  <dd>+34964841744</dd>
                </div>
                <div>
                  <dt className="text-sm text-dim-gray">Servicio</dt>
                  <dd>Autoservicio</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="font-display text-xl text-olive-wood">
                Horario
              </h2>
              <p className="mt-1 font-body text-sm text-dim-gray">
                Abierto 365 días al año
              </p>
              <dl className="mt-3 space-y-2 font-body text-graphite">
                <div className="flex justify-between gap-4">
                  <dt className="text-dim-gray">Lun–Dom</dt>
                  <dd>[ 06:00 – 22:00 ]</dd>
                </div>
              </dl>

              <div className="mt-4 rounded-lg border border-sandy-clay bg-sandy-clay/20 px-4 py-3">
                <h2 className="font-display text-xl text-olive-wood">
                  Menú desayuno – 2.50€
                </h2>
                <p className="mt-2 font-body text-graphite">
                  Cualquier café + tostada/curasán/fartón
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling photos, no heading */}
          <PhotoScroller />
        </div>
      </section>
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, Calendar, Clock3, MapPin, Menu, Sprout, X } from 'lucide-react'
import { Layout } from './components/layout'
import { Button, Container } from './components/ui'

const dishes = [
  {
    name: 'Charred young leeks',
    description: 'Cultured cream, smoked hazelnut, and garden herbs.',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85',
    alt: 'A composed plate of seasonal vegetables with herbs',
  },
  {
    name: 'Ember-roasted roots',
    description: 'Carrot, wild fennel, and fermented plum jus.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    alt: 'A warm bowl of vegetables and grains in natural light',
  },
  {
    name: 'The orchard finale',
    description: 'Poached pear, bay leaf, and toasted oat milk.',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85',
    alt: 'A delicate plated dessert with fruit and cream',
  },
]

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function updatePageMetadata(isNotFound: boolean) {
  const title = isNotFound ? 'Page Not Found — VERDANT' : 'VERDANT — Seasonal Fine Dining'
  const description = isNotFound
    ? 'The VERDANT page you requested could not be found.'
    : 'VERDANT is a contemporary dining room centered on seasonal California ingredients, thoughtful technique, and an unhurried table experience.'

  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
}

function NotFoundPage() {
  return (
    <Layout>
      <main className="flex min-h-[70vh] items-center bg-ivory py-32" aria-labelledby="not-found-heading">
        <Container size="md">
          <p className="editorial-eyebrow">A quiet wrong turn</p>
          <h1 id="not-found-heading" className="mt-4 max-w-xl font-serif text-6xl leading-none text-forest sm:text-8xl">This page has wandered off.</h1>
          <p className="mt-8 max-w-lg font-sans text-base leading-7 text-forest/80">The page you requested is not part of the VERDANT table. Return home to continue exploring the current season.</p>
          <a href="/" className="mt-8 inline-flex items-center gap-2 border-b border-olive pb-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-forest hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest">Return to VERDANT <ArrowRight className="h-4 w-4" /></a>
        </Container>
      </main>
    </Layout>
  )
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)
  const isNotFound = window.location.pathname !== '/'

  useEffect(() => {
    updatePageMetadata(isNotFound)
  }, [isNotFound])

  if (isNotFound) {
    return <NotFoundPage />
  }

  return (
    <Layout>
      <header className="absolute inset-x-0 top-0 z-20 text-ivory">
        <Container size="xl">
          <div className="flex h-24 items-center justify-between border-b border-ivory/25">
            <a href="/" className="group flex flex-col rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory">
              <span className="font-serif text-3xl tracking-[0.16em] text-ivory group-hover:text-cream">VERDANT</span>
              <span className="-mt-1 font-sans text-[9px] font-medium uppercase tracking-[0.28em] text-cream/80">Seasonal dining</span>
            </a>
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
              <a className="nav-light-link" href="#philosophy">Philosophy</a>
              <a className="nav-light-link" href="#menu">The menu</a>
              <a className="nav-light-link" href="#experience">Experience</a>
              <a className="nav-light-link" href="#contact">Visit us</a>
            </nav>
            <Button variant="secondary" size="sm" className="hidden border-ivory/60 bg-transparent text-ivory hover:bg-ivory hover:text-forest sm:inline-flex" icon={<Calendar className="h-3.5 w-3.5" />} onClick={() => scrollToSection('reservations')}>Reserve a table</Button>
            <button type="button" className="rounded p-2 text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory lg:hidden" aria-expanded={isMenuOpen} aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </Container>
        {isMenuOpen && (
          <div className="border-b border-olive/20 bg-ivory text-forest lg:hidden">
            <Container size="xl" className="flex flex-col gap-3 py-6">
              <a className="mobile-nav-link" href="#philosophy" onClick={closeMenu}>Philosophy</a>
              <a className="mobile-nav-link" href="#menu" onClick={closeMenu}>The menu</a>
              <a className="mobile-nav-link" href="#experience" onClick={closeMenu}>Experience</a>
              <a className="mobile-nav-link" href="#contact" onClick={closeMenu}>Visit us</a>
              <Button variant="primary" size="md" className="mt-2 w-full" icon={<Calendar className="h-4 w-4" />} onClick={() => { closeMenu(); scrollToSection('reservations') }}>Reserve a table</Button>
            </Container>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative flex min-h-[720px] items-end overflow-hidden bg-forest pb-20 pt-32 text-ivory sm:min-h-[780px] sm:pb-28" aria-labelledby="hero-heading">
          <img className="absolute inset-0 h-full w-full object-cover opacity-75" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90" srcSet="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=960&q=85 960w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1440&q=88 1440w, https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90 2200w" sizes="100vw" alt="Warmly lit dining room with linen tables and greenery" />
          <div className="absolute inset-0 bg-forest/55" />
          <Container size="xl" className="relative">
            <div className="max-w-3xl">
              <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.3em] text-cream">San Francisco · California</p>
              <h1 id="hero-heading" className="max-w-2xl font-serif text-6xl leading-[0.92] tracking-tight text-ivory sm:text-8xl lg:text-9xl">A table set by the seasons.</h1>
              <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ivory/85 sm:text-lg">VERDANT is a contemporary dining room where the wild edges of California meet the rituals of the table.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button variant="primary" size="lg" className="bg-ivory text-forest hover:bg-cream hover:text-forest" icon={<Calendar className="h-4 w-4" />} onClick={() => scrollToSection('reservations')}>Reserve a table</Button>
                <a href="#menu" className="inline-flex items-center gap-2 border-b border-ivory/60 pb-1 font-sans text-xs font-medium uppercase tracking-[0.18em] text-ivory hover:border-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory">Explore the menu <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
            <a href="#philosophy" className="mt-16 inline-flex items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-ivory/75 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"><ArrowDown className="h-4 w-4" /> Begin the experience</a>
          </Container>
        </section>

        <section id="philosophy" className="bg-ivory py-24 sm:py-32" aria-labelledby="philosophy-heading">
          <Container size="xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div><p className="editorial-eyebrow">Our philosophy</p><h2 id="philosophy-heading" className="mt-3 max-w-md font-serif text-5xl leading-none text-forest sm:text-6xl">Let the ingredient lead.</h2></div>
              <div className="max-w-2xl border-l border-olive/30 pl-6 sm:pl-10"><p className="font-serif text-2xl leading-tight text-forest sm:text-3xl">We cook in conversation with the coast, the orchard, and the growers who care for both.</p><p className="mt-7 max-w-xl font-sans text-sm leading-7 text-forest/80 sm:text-base">Our menus change with the weather. Preservation, fire, and fermentation help us hold onto a fleeting harvest, while each plate stays clear, generous, and quietly surprising.</p><div className="mt-8 flex items-center gap-3 font-sans text-xs uppercase tracking-[0.18em] text-olive"><Sprout className="h-4 w-4" /> Regenerative ingredients · considered technique</div></div>
            </div>
          </Container>
        </section>

        <section id="menu" className="bg-cream/55 py-24 sm:py-32" aria-labelledby="menu-heading">
          <Container size="xl">
            <div className="flex flex-col justify-between gap-6 border-b border-olive/25 pb-8 sm:flex-row sm:items-end"><div><p className="editorial-eyebrow">From the current menu</p><h2 id="menu-heading" className="mt-3 font-serif text-5xl leading-none text-forest sm:text-6xl">A few signatures.</h2></div><p className="max-w-xs font-sans text-sm leading-6 text-forest/75">Our full tasting menu is written nightly around what is brightest at the farm.</p></div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">{dishes.map((dish) => <article key={dish.name} className="group"><div className="aspect-[4/5] overflow-hidden bg-sage/20"><img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={dish.image} srcSet={`${dish.image.replace('w=1200', 'w=640')} 640w, ${dish.image.replace('w=1200', 'w=960')} 960w, ${dish.image} 1200w`} sizes="(min-width: 768px) 33vw, 100vw" alt={dish.alt} /></div><div className="pt-5"><h3 className="font-serif text-2xl text-forest">{dish.name}</h3><p className="mt-2 max-w-xs font-sans text-sm leading-6 text-forest/75">{dish.description}</p></div></article>)}</div>
            <div className="mt-12 text-center"><Button variant="editorial" onClick={() => scrollToSection('reservations')}>Request the seasonal menu <ArrowRight className="h-4 w-4" /></Button></div>
          </Container>
        </section>

        <section id="experience" className="bg-ivory py-24 sm:py-32" aria-labelledby="experience-heading">
          <Container size="xl"><div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="relative overflow-hidden bg-sage/20"><img className="aspect-[5/4] h-full w-full object-cover" src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85" srcSet="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=82 800w, https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85 1200w, https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85 1400w" sizes="(min-width: 1024px) 55vw, 100vw" alt="Guests sharing a meal in a softly lit restaurant" /></div><div className="lg:pl-8"><p className="editorial-eyebrow">The dining experience</p><h2 id="experience-heading" className="mt-3 font-serif text-5xl leading-none text-forest sm:text-6xl">Unhurried, intimate, alive.</h2><p className="mt-7 font-sans text-base leading-7 text-forest/80">Settle in for an evening that moves at its own pace. Our dining room holds twenty-eight guests, with an open kitchen, a small natural wine cellar, and a service style that gives the table room to breathe.</p><dl className="mt-9 grid grid-cols-2 gap-6 border-t border-olive/25 pt-6 font-sans text-sm"><div><dt className="text-olive">Format</dt><dd className="mt-1 text-forest">Seasonal tasting menu</dd></div><div><dt className="text-olive">Duration</dt><dd className="mt-1 text-forest">Two and a half hours</dd></div></dl></div></div></Container>
        </section>

        <section id="reservations" className="bg-sage py-20 text-forest sm:py-24" aria-labelledby="reservations-heading"><Container size="lg"><div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-forest/75">Reservations</p><h2 id="reservations-heading" className="mt-3 max-w-xl font-serif text-5xl leading-none text-forest sm:text-6xl">Make an evening of it.</h2><p className="mt-5 max-w-lg font-sans text-sm leading-6 text-forest/80">Online reservations are not connected yet. Reservation contact details will be added once the restaurant information is confirmed.</p></div><span className="inline-flex w-fit items-center border-b border-forest/40 pb-2 font-sans text-xs font-medium uppercase tracking-[0.16em] text-forest/75">Reservations coming soon</span></div></Container></section>

        <section id="contact" className="bg-cream/60 py-24 sm:py-32" aria-labelledby="contact-heading"><Container size="xl"><div className="grid gap-12 lg:grid-cols-2 lg:gap-24"><div><p className="editorial-eyebrow">Find us</p><h2 id="contact-heading" className="mt-3 font-serif text-5xl leading-none text-forest sm:text-6xl">A room for the curious.</h2><p className="mt-7 max-w-md font-sans text-sm leading-7 text-forest/80">Our address, hours, and contact details below are placeholders for the final restaurant information.</p></div><div className="grid gap-8 border-t border-olive/25 pt-6 font-sans text-sm sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><div><MapPin className="h-5 w-5 text-olive" /><h3 className="mt-4 font-serif text-2xl text-forest">Location</h3><p className="mt-2 leading-6 text-forest/75">[Restaurant address placeholder]<br />San Francisco, CA [ZIP]</p></div><div><Clock3 className="h-5 w-5 text-olive" /><h3 className="mt-4 font-serif text-2xl text-forest">Opening hours</h3><p className="mt-2 leading-6 text-forest/75">[Hours placeholder]<br />[Days and service times]</p></div></div></div></Container></section>
      </main>
    </Layout>
  )
}

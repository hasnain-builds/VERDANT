import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="bg-forest py-12 text-ivory sm:py-16">
      <Container size="xl">
        <div className="flex flex-col justify-between gap-10 border-b border-ivory/20 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-serif text-4xl tracking-[0.16em]">VERDANT</p>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.22em] text-cream/70">Seasonal dining · San Francisco</p>
          </div>
          <p className="max-w-xs font-sans text-xs leading-5 text-cream/75">Reservation contact details will be published here once confirmed.</p>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 font-sans text-xs text-cream/70 sm:flex-row">
          <p>Restaurant details shown are placeholders pending final business information.</p>
          <p>© {new Date().getFullYear()} VERDANT</p>
        </div>
      </Container>
    </footer>
  )
}

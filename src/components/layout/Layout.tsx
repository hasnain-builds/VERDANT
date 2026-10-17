import React from 'react'
import { Footer } from './Footer'

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-forest selection:bg-sage selection:text-ivory">
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  )
}

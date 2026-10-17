import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cream' | 'ivory' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

export function Card({
  children,
  variant = 'cream',
  padding = 'md',
  hoverable = false,
  className = '',
  ...props
}: CardProps) {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10 lg:p-12',
  }

  const variantStyles = {
    cream: 'bg-cream/70 backdrop-blur-sm border border-olive/20 text-forest shadow-sm',
    ivory: 'bg-ivory border border-olive/25 text-forest shadow-sm',
    ghost: 'bg-transparent border border-olive/20 text-forest',
  }

  const hoverStyles = hoverable
    ? 'transition-all duration-300 hover:shadow-md hover:border-olive/40 hover:-translate-y-0.5'
    : ''

  return (
    <div
      className={`rounded-lg ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

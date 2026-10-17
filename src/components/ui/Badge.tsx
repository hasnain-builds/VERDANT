import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'sage' | 'olive' | 'cream' | 'outline'
  size?: 'sm' | 'md'
}

export function Badge({
  children,
  variant = 'cream',
  size = 'md',
  className = '',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.2em] select-none rounded'

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  }

  const variantStyles = {
    sage: 'bg-sage/15 text-sage-800 border border-sage/30',
    olive: 'bg-olive/15 text-olive-800 border border-olive/30',
    cream: 'bg-cream text-forest/90 border border-olive/20',
    outline: 'bg-transparent text-forest/80 border border-olive/30',
  }

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

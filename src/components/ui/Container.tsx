import React from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'
}

export function Container({
  children,
  size = 'xl',
  as = 'div',
  className = '',
  ...props
}: ContainerProps) {
  const Component = as

  const sizeStyles = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl', // ~1280px
    full: 'max-w-full',
  }

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}

import React, { forwardRef } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'editorial'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      className = '',
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'

    const sizeStyles = {
      sm: 'text-xs tracking-wider uppercase px-3 py-1.5 rounded gap-1.5',
      md: 'text-xs tracking-widest uppercase px-5 py-2.5 rounded gap-2',
      lg: 'text-sm tracking-widest uppercase px-7 py-3.5 rounded-md gap-2.5',
    }

    const variantStyles = {
      primary:
        'bg-sage text-ivory hover:bg-sage-600 active:bg-sage-700 shadow-sm hover:shadow active:scale-[0.99]',
      secondary:
        'bg-cream/60 text-forest border border-olive/25 hover:bg-cream hover:border-olive/50 active:bg-cream-dark active:scale-[0.99]',
      ghost:
        'bg-transparent text-forest/90 hover:bg-cream/50 hover:text-forest active:bg-cream/75',
      editorial:
        'bg-transparent text-forest font-serif lowercase tracking-normal text-base normal-case italic hover:text-olive border-b border-olive/40 hover:border-olive rounded-none p-0 pb-0.5',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${variant !== 'editorial' ? sizeStyles[size] : 'gap-1'} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'

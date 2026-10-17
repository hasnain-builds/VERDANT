import React from 'react'

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  subtitle?: string
  headingLevel?: 'h1' | 'h2'
  align?: 'left' | 'center' | 'right'
  divider?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  headingLevel = 'h2',
  align = 'center',
  divider = true,
  className = '',
  ...props
}: SectionHeadingProps) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }

  const dividerAlign = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  }

  const Heading = headingLevel

  return (
    <div className={`flex flex-col ${alignStyles[align]} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${className}`} {...props}>
      {eyebrow && (
        <span className="editorial-eyebrow mb-2.5">
          {eyebrow}
        </span>
      )}

      <Heading className="text-3xl sm:text-4xl lg:text-5xl font-serif text-forest tracking-normal leading-[1.15] mb-3">
        {title}
      </Heading>

      {divider && (
        <div className={`h-px w-16 bg-sage/60 my-3 ${dividerAlign[align]}`} />
      )}

      {subtitle && (
        <p className="text-sm sm:text-base text-forest/75 font-sans leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </div>
  )
}

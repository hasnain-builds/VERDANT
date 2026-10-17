import React, { forwardRef, useId } from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, icon, className = '', id, disabled, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const errorId = `${inputId}-error`
    const helperId = `${inputId}-helper`

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs uppercase tracking-wider font-sans font-medium text-forest/80 select-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3.5 text-olive pointer-events-none inline-flex">
              {icon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : helperText ? helperId : undefined}
            className={`w-full bg-cream/40 text-forest placeholder:text-forest/40 border rounded px-3.5 py-2.5 text-sm font-sans transition-all duration-200 outline-none ${
              icon ? 'pl-10' : ''
            } ${
              error
                ? 'border-red-600 focus:border-red-700 focus:ring-1 focus:ring-red-600'
                : 'border-olive/30 focus:border-sage focus:ring-2 focus:ring-sage/40'
            } disabled:opacity-50 disabled:bg-cream/20 disabled:cursor-not-allowed ${className}`}
            {...props}
          />
        </div>

        {error ? (
          <span id={errorId} className="text-xs text-red-700 font-sans" role="alert">
            {error}
          </span>
        ) : helperText ? (
          <span id={helperId} className="text-xs text-olive/80 font-sans">
            {helperText}
          </span>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'

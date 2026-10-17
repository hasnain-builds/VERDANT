// Core domain and application types for VERDANT

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'starter' | 'main' | 'dessert' | 'beverage' | 'tasting'
  dietary?: ('vegan' | 'vegetarian' | 'gluten-free')[]
  featured?: boolean
  image?: string
}

export interface ReservationRequest {
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone: string
  specialRequests?: string
}

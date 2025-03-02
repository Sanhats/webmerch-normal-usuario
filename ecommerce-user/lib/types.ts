export type Product = {
  id: string
  name: string
  description: string
  price: number
  stock: number
  featured: boolean
  category_id: string
  created_at: string
}

export type Category = {
  id: string
  name: string
  created_at: string
}

export type Color = {
  id: string
  name: string
  hex_value: string
  created_at: string
}

export type ProductImage = {
  id: string
  product_id: string
  color_id: string
  url: string
  created_at: string
}
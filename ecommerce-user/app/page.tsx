import { supabase } from '@/lib/supabase'
import { ProductCard } from '@/components/ui/product-card'
import type { Product, ProductImage } from '@/lib/types'

async function getProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return products as Product[]
}

async function getProductImages() {
  const { data: images, error } = await supabase
    .from('product_images')
    .select('*')

  if (error) {
    console.error('Error fetching product images:', error)
    return []
  }

  return images as ProductImage[]
}

export default async function Home() {
  const [products, images] = await Promise.all([
    getProducts(),
    getProductImages(),
  ])

  // Get first image for each product
  const productImages = images.reduce((acc, image) => {
    if (!acc[image.product_id]) {
      acc[image.product_id] = image
    }
    return acc
  }, {} as Record<string, ProductImage>)

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos Destacados</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            image={productImages[product.id]}
          />
        ))}
      </div>
    </div>
  )
}
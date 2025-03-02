import Image from 'next/image'
import Link from 'next/link'
import { Product, ProductImage } from '@/lib/types'

interface ProductCardProps {
  product: Product
  image?: ProductImage
}

export function ProductCard({ product, image }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          {image ? (
            <Image
              src={image.url || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-100">
              <span className="text-gray-400">Sin imagen</span>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-sm text-gray-500">Stock: {product.stock}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        {product.featured && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Destacado
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
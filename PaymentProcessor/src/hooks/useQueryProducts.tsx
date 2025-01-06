import { fetchProducts } from '../lib/helpers'
import { useQuery } from '@tanstack/react-query'

export default function useQueryProducts() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await fetchProducts(),
  })

  return { products, isLoading }
}

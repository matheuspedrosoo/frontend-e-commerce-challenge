'use client'
import { useProducts } from '@/hooks/usePropducts'

interface ProductListProps {}

export function ProductList() {
	const { data } = useProducts()

	return <div></div>
}

import { Product } from './producs'

export interface ProductsFetchResponse {
	data: {
		allProducts: Product[]
	}
}

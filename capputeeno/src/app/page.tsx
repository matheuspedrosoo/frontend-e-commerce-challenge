'use client'
import styles from './page.module.css'
import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/Products'

export default function Home() {
	return (
		<main className={styles.main}>
			<FilterBar />
			<ProductList />
		</main>
	)
}

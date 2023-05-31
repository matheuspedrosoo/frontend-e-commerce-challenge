'use client'
import styled from 'styled-components'
import { DefaultPageLayout } from '@/components/DefaultPageLayout/default-page-layout'
import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/Products'

const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default function Home() {
	return (
		<DefaultPageLayout>
			<PageWrapper>
				<FilterBar />
				<ProductList />
			</PageWrapper>
		</DefaultPageLayout>
	)
}

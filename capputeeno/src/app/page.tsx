'use client'
import { FilterBar } from '@/components/FilterBar'
import { ProductList } from '@/components/Products'
import styled from 'styled-components'

const PageWrapper = styled.main`
	min-height: 100vh;
	padding: 12px 24px;
	background-color: var(--bg-primary);

	@media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
		padding: 34px 160px;
	}
`

export default function Home() {
	return (
		<PageWrapper>
			<FilterBar />
			<ProductList />
		</PageWrapper>
	)
}

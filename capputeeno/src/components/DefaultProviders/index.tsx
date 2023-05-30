'use client'
import { FilterContextProvider } from '@/context/filter-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

interface DefaultPropvidersProps {
	children: ReactNode
}

const theme = {
	desktopBreakpoint: '768px'
}

export function DefaultPropviders({ children }: DefaultPropvidersProps) {
	const client = new QueryClient()
	return (
		<QueryClientProvider client={client}>
			<FilterContextProvider>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</FilterContextProvider>
		</QueryClientProvider>
	)
}

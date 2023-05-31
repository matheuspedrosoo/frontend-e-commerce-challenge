'use client'

import styled from 'styled-components'

export const DefaultPageLayout = styled.div`
	min-height: 100vh;
	padding: 12px 24px;
	background-color: var(--bg-primary);

	@media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
		padding: 34px 160px;
	}
`

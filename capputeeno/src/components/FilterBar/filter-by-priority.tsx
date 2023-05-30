'use client'
import styled from 'styled-components'
import { useFilter } from '@/hooks/useFilter'
import { useState } from 'react'
import { ArrowIcon } from '../Icons/arrow-icon'
import { PriorityTypes } from '@/types/priority-types'

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	button {
		border: none;
		background: transparent;
		cursor: pointer;
		font-family: inherit;
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		color: var(--text-dark);

		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			margin-left: 16px;
		}
	}
`

const Priority = styled.ul`
	position: absolute;
	width: max-content;
	padding: 12px 16px;
	z-index: 999;

	background: #ffffff;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	border-radius: 4px;

	list-style: none;

	top: 100%;
	right: 8px;

	li {
		color: var(--text-dark);
		font-weight: 400;
		font-size: 14px;
		line-height: 22px;
		cursor: pointer;

		& + li {
			margin-top: 4px;
		}
	}
`

export function FilterByPriority() {
	const [isOpen, setIsOpen] = useState(false)
	const { setPriority } = useFilter()

	const handleOpen = () => setIsOpen((prev) => !prev)

	const handleUpdatedPriority = (value: PriorityTypes) => {
		setPriority(value)
		setIsOpen(false)
	}

	return (
		<FilterContainer>
			<button onClick={handleOpen}>
				Organizar Por <ArrowIcon />
			</button>

			{isOpen && (
				<Priority>
					<li onClick={() => handleUpdatedPriority(PriorityTypes.NEWS)}>Novidades</li>
					<li onClick={() => handleUpdatedPriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
					<li onClick={() => handleUpdatedPriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - maior</li>
					<li onClick={() => handleUpdatedPriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
				</Priority>
			)}
		</FilterContainer>
	)
}

import { styled } from 'styled-components'
import { ChangeEvent, InputHTMLAttributes } from 'react'
import { SearchIcon } from '../Icons/search-icon'

export const PrimaryInput = styled.input`
	width: 100%;
	border-radius: 8px;
	border: none;
	outline: none;
	padding: 10px 16px;

	background-color: var(--bg-secondary);

	font-family: inherit;
	font-weight: 400;
	font-size: 12px;
	line-height: 20px;
	color: var(--text-dark);

	@media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
		font-size: 14px;
		line-height: 22px;
	}
`
export const InputContainer = styled.div`
	position: relative;
	width: 250px;

	svg {
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
		width: 352px;
	}
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string
	handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon({ handleChange, ...props }: InputProps) {
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleChange(e.target.value)
	}

	return (
		<InputContainer>
			<PrimaryInput
				{...props}
				onChange={handleInputChange}
			/>
			<SearchIcon />
		</InputContainer>
	)
}

import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import BackIcon from '../Icons/back-icon'

interface ButtonProps {
	navigate: string
}

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	cursor: pointer;
	gap: 8px;

	font-weight: 500;
	font-size: 14px;
	line-height: 150%;
	color: var(--secounday-text);
`

export function BackButton({ navigate }: ButtonProps) {
	const router = useRouter()

	const handleNavigate = () => {
		router.push(navigate)
	}

	return (
		<Button onClick={handleNavigate}>
			<BackIcon />
			Voltar
		</Button>
	)
}

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from '../Icons/cart-icon'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'

const Container = styled.button`
	position: relative;
	cursor: pointer;
	border: none;
	background: transparent;
`

const CartCount = styled.span`
	width: 17px;
	height: 17px;
	border-radius: 100%;
	padding: 0 5px;
	font-size: 10px;

	background-color: var(--delete-color);
	color: white;

	margin-left: -10px;
`

export function CartControl() {
	const router = useRouter()
	const { value } = useLocalStorage('cart-items', [])

	const handleNavigation = () => {
		router.push('/cart')
	}

	return (
		<Container onClick={handleNavigation}>
			<CartIcon />
			{value.length > 0 && <CartCount>{value.length}</CartCount>}
		</Container>
	)
}

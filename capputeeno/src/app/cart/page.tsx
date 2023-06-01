'use client'
import styled from 'styled-components'
import { BackButton } from '@/components/BackButton'
import { DefaultPageLayout } from '@/components/DefaultPageLayout/default-page-layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ProductInCart } from '@/types/producs'
import { formatPrice } from '@/utils/format-price'
import { CartItem } from '@/components/Cart/cart-item'
import { Divider } from '@/components/Divider'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 32px;

	@media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
		flex-direction: row;
	}
`

const CartListContainer = styled.div`
	margin-top: 24px;

	h3 {
		font-size: 24px;
		font-weight: 500;
		line-height: 150%;
		text-transform: uppercase;
		color: var(--text-dark-2);
		margin-top: 24px;
	}

	p {
		font-size: 16px;
		font-weight: 300;
		color: var(--text-dark-2);

		span {
			font-weight: 600;
		}
	}
`

const CartList = styled.ul`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
	margin-top: 24px;
`

const CardResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	min-width: 352px;
	padding: 16px 24px;

	background-color: white;
	height: 100%;

	h3 {
		font-size: 26px;
		font-weight: 600;
		color: var(--text-dark-2);
		text-transform: uppercase;
		margin-bottom: 30px;
	}
`

const TotalItem = styled.div<{ isBold: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;

	font-size: 16px;
	font-weight: ${({ isBold }) => (isBold ? '600' : '400')};
	line-height: 150%;

	margin-bottom: 12px;
`

const ShopBtn = styled.button`
	text-transform: uppercase;
	border: none;
	color: white;
	border-radius: 4px;
	background-color: var(--success-color);
	padding: 12px 12px;
	width: 100%;
	margin-top: 40px;
	cursor: pointer;
`

export default function CartPage() {
	const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>('cart-items', [])

	const calculateTotal = (value: ProductInCart[]) => {
		return value.reduce((sum, item) => (sum += item.price_in_cents * item.quantity), 0)
	}

	const cartTotal = formatPrice(calculateTotal(value))
	const deliveryFee = 400
	const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

	const handleUpdateQuantity = (id: string, quantity: number) => {
		const newValue = value.map((item) => {
			if (item.id !== id) return item
			return { ...item, quantity: quantity }
		})
		updateLocalStorage(newValue)
	}

	const handleDeleteItem = (id: string) => {
		const newValue = value.filter((item) => {
			if (item.id !== id) return item
		})

		updateLocalStorage(newValue)
	}

	return (
		<DefaultPageLayout>
			<Container>
				<CartListContainer>
					<BackButton navigate='/' />
					<h3>Seu carrinho</h3>
					<p>
						Total ({value.length} {value.length !== 1 ? 'produtos' : 'produto'}) <span>{cartTotal}</span>
					</p>
					<CartList>
						{value.map((item) => (
							<CartItem
								key={item.id}
								product={item}
								handleUpdateQuantity={handleUpdateQuantity}
								handleDelete={handleDeleteItem}
							/>
						))}
					</CartList>
				</CartListContainer>
				<CardResultContainer>
					<h3>Resumo do Pedido</h3>
					<TotalItem isBold={false}>
						<p>Subtotal de produtos</p>
						<p>{cartTotal}</p>
					</TotalItem>
					<TotalItem isBold={false}>
						<p>Subtotal da entrega</p>
						<p>{formatPrice(deliveryFee)}</p>
					</TotalItem>
					<Divider />
					<TotalItem isBold>
						<p>Total</p>
						<p>{cartTotalWithDelivery}</p>
					</TotalItem>
					<ShopBtn>Finalizar compra </ShopBtn>
				</CardResultContainer>
			</Container>
		</DefaultPageLayout>
	)
}

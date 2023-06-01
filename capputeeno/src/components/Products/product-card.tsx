/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'
import { formatPrice } from '@/utils/format-price'
import { useRouter } from 'next/navigation'
import { Divider } from '../Divider'

interface ProductCardProps {
	image: string
	title: string
	price: number
	id: string
}

const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	cursor: pointer;

	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(10px);
	border-radius: 0px 0px 4px 4px;

	img {
		width: 256px;
		height: 300px;
	}

	h3 {
		font-weight: 300;
		font-size: 16px;
		line-height: 150%;
		color: var(--text-dark-2);
	}

	p {
		font-weight: 600;
		font-size: 14px;
		line-height: 150%;
		color: var(--shapes-dark);
	}

	div {
		display: flex;
		align-items: start;
		justify-content: center;
		flex-direction: column;
		padding: 8px 12px;
		width: 100%;
	}
`

export function ProductCard({ image, title, price, id }: ProductCardProps) {
	const router = useRouter()
	const priceFormatted = formatPrice(price)

	const handleNavigate = () => {
		router.push(`/product?id=${id}`)
	}

	return (
		<Card onClick={handleNavigate}>
			<img
				src={image}
				alt={title}
			/>
			<div>
				<h3>{title}</h3>
				<Divider />
				<p>{priceFormatted}</p>
			</div>
		</Card>
	)
}

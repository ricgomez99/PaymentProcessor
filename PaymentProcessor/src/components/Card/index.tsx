import { useState, useCallback } from 'react'
import Modal from '../Modal'
import PayForm from '../PayForm'
import { CardData } from '../../types/componentTypes'

export default function Card({
  title,
  description,
  price,
  imageUrl,
  stock,
}: CardData) {
  const [isOpen, setIsOpen] = useState(false)
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formatPrice = format(price)

  const handleClick = useCallback(() => setIsOpen((prev) => !prev), [])
  return (
    <>
      <div className="flex flex-col justify-center max-w-md bg-white">
        <img
          alt="product image"
          src={imageUrl}
          className="max-w-md aspect-square object-contain"
        />
        <h3
          role="cardTitle"
          className="text-xl text-gray-400 font-bold text-left"
        >
          {title}
        </h3>
        <span className="text-lg text-gray-400 font-semibold">Description</span>
        <p role="description" className="text-base font-normal text-gray-900">
          {description}
        </p>
        <span className="text-lg text-gray-400 font-semibold">Price</span>
        <span role="price" className="text-base font-normal text-gray-900">
          {formatPrice}
        </span>
        <span role="stock" className="text-base font-normal text-gray-900">
          Stock: {stock}
        </span>
        <button onClick={handleClick}>Pay with credit card</button>
      </div>
      {isOpen && (
        <Modal onClose={handleClick}>
          <PayForm />
        </Modal>
      )}
    </>
  )
}

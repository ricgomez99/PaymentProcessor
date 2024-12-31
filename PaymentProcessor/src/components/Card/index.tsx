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
  const [showDetails, setShowDetails] = useState(false)

  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formatPrice = format(price)

  const handleClick = useCallback(() => setIsOpen((prev) => !prev), [])
  const handleOpenDetails = useCallback(
    () => setShowDetails((prev) => !prev),
    []
  )
  return (
    <>
      <article className="flex flex-col justify-between max-w-lg bg-white rounded-lg">
        <img
          alt="product image"
          src={imageUrl}
          className="w-full aspect-square object-cover rounded-t-lg"
        />
        <div className="p-2 flex flex-row justify-between items-center">
          <h3
            role="cardTitle"
            className="text-3xl text-ellipsis text-gray-400 font-bold text-left"
          >
            {title}
          </h3>
          <button onClick={handleOpenDetails}></button>
        </div>
        <div
          className={`${
            showDetails
              ? 'flex flex-col opacity-100 p-2 text-left'
              : 'overflow-hidden w-0 h-0 opacity-0 translate-x-[-10px]'
          } transition-all duration-300 ease-in-out p-2`}
        >
          <span className="text-lg text-gray-400 font-semibold">
            Description
          </span>
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
        </div>
        <div className="p-2 cursor-pointer">
          <button className="w-full" onClick={handleClick}>
            Pay with credit card
          </button>
        </div>
      </article>
      {isOpen && (
        <Modal onClose={handleClick}>
          <PayForm />
        </Modal>
      )}
    </>
  )
}

import { useState, useCallback } from 'react'
import Modal from '../Modal'
import PayForm from '../PayForm'
import { BiChevronDown } from 'react-icons/bi'
import { useProductContext } from '../../hooks/useProductContext'
import { ProductPayload } from '../../types/helpers'

export default function Card({
  _id,
  title,
  description,
  price,
  imageUrl,
  stock,
}: ProductPayload) {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const { saveProductId } = useProductContext()

  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formatPrice = format(price)

  const handleClick = useCallback(() => {
    const productId = _id ?? ''
    saveProductId(productId)
    setIsOpen((prev) => !prev)
  }, [_id, saveProductId])
  const handleOpenDetails = useCallback(
    () => setShowDetails((prev) => !prev),
    []
  )
  return (
    <>
      <article className="flex flex-col justify-between max-w-md bg-[#F8FAFC] rounded-lg">
        <img
          alt="product image"
          src={imageUrl}
          className="w-full pb-1 aspect-square object-cover rounded-t-lg"
        />
        <div className="px-2 flex flex-row justify-between items-center">
          <h3
            role="cardTitle"
            className="text-2xl text-ellipsis text-slate-700 font-semibold text-left"
          >
            {title}
          </h3>
          <BiChevronDown
            className={`${
              showDetails && 'rotate-180'
            } transition-all duration-200 ease-in-out text-slate-700 cursor-pointer font-bold text-3xl`}
            onClick={handleOpenDetails}
          />
        </div>
        <div
          className={`${
            showDetails
              ? 'flex flex-col opacity-100 text-left'
              : 'overflow-y-hidden w-0 h-0 opacity-0 translate-y-[-12px]'
          } transition-all duration-300 ease-in-out p-2`}
        >
          <p role="description" className="text-base text-gray-800">
            {description}
          </p>
          <div className="flex flex-row justify-start gap-3">
            <p role="price" className="text-base text-gray-400 font-semibold">
              Price:{' '}
              <span className="text-sm text-gray-800">{formatPrice}</span>
            </p>
            <p role="stock" className="text-gray-400 font-semibold">
              Stock: <span className="text-sm text-gray-800">{stock}</span>
            </p>
          </div>
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

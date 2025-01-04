import { cardMocks } from '../../lib/mocks'
import { useProductContext } from '../../hooks/useProductContext'
import { CardData } from '../../types/componentTypes'
import { calculatePrice } from '../../lib/calculatePrice'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCircleCheck } from 'react-icons/fa6'
import { PiSpinner } from 'react-icons/pi'
import ToastSuccess from '../Toasts/ToustSuccess'
import { ToastContainer } from 'react-toastify'

export default function DetailsCard() {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentDone, setPaymentDone] = useState(false)
  const goTo = useNavigate()
  const { getPaymentDetails, getProductId } = useProductContext()
  const productId = getProductId()
  const orderDetails = getPaymentDetails()
  const productDetails: Partial<CardData | undefined> =
    cardMocks && cardMocks.find((card) => String(card.id) === productId)
  const { format } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const formattedPrice = format(productDetails?.price ?? '0')
  const shippingFee = format(4)
  const deliveryFee = format(2)
  const totalPrice = calculatePrice(4, 2, productDetails?.price ?? 0)

  const renderButtonContent = () => {
    return isLoading ? (
      <PiSpinner className="animate-spin" />
    ) : paymentDone ? (
      <FaCircleCheck />
    ) : (
      'Pay now'
    )
  }

  const orderTotal = format(totalPrice)
  const handlePayment = useCallback(() => {
    try {
      setIsLoading(true)
      setTimeout(() => {
        ToastSuccess('payment processed!')
        setIsLoading(false)
        setPaymentDone(true)
        setTimeout(() => {
          goTo('/')
        }, 3000)
      }, 3000)
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    }
  }, [goTo])

  return (
    <article className="flex flex-col mt-8 justify-between gap-3 lg:min-w-[450px] max-w-3xl bg-[#F8FAFC] rounded-lg p-3 shadow-lg">
      <aside className="flex flex-col gap-2 text-left justify-center items-start">
        <div className="w-full flex flex-row justify-between gap-2">
          <img
            className="max-w-24 aspect-square object-cover rounded-lg border border-slate-400"
            role="image"
            src={productDetails?.imageUrl}
            alt={productDetails?.title}
          />
          <div className="flex flex-col w-full">
            <h4 role="title" className="text-lg font-semibold text-slate-700">
              {productDetails?.title}
            </h4>
            <p role="description" className="text-sm text-slate-700">
              {productDetails?.description}
            </p>
            <span role="price" className="text-sm text-slate-400">
              {formattedPrice}
            </span>
            <p role="stock" className="text-xs text-slate-400 font-semibold">
              Stock:{' '}
              <span className="text-xs text-slate-700">
                {productDetails?.stock}
              </span>
            </p>
          </div>
        </div>
      </aside>
      <aside className="flex flex-col text-left items-start">
        <h4 className="text-lg font-semibold text-slate-700">
          Shipping Address
        </h4>
        <div>
          <p className="text-base text-slate-400 flex gap-1">
            <span role="shippingAddress">{orderDetails?.address}</span>
            <span role="country">{orderDetails?.country}</span>
            <span role="zipCode">{orderDetails?.zipCode}</span>
          </p>
        </div>
        <div className="flex flex-row justify-center gap-1">
          <p
            role="shippingFee"
            className="text-xs text-slate-400 font-semibold"
          >
            Sh.Fee: <span className="text-slate-700">{shippingFee}</span>
          </p>
          <p
            role="deliveryFee"
            className="text-xs text-slate-400 font-semibold"
          >
            Del.Fee: <span className="text-slate-700">{deliveryFee}</span>
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2 pt-2">
          <h4 className="text-lg font-semibold text-slate-700">Total Price:</h4>
          <span role="totalPrice" className="text-slate-700">
            {orderTotal}
          </span>
        </div>
      </aside>
      <button
        className={`${
          paymentDone && 'bg-green-400 border-green-400 text-white'
        } flex transition-all duration-150 ease-in-out justify-center items-center focus:outline-none`}
        role="payButton"
        onClick={handlePayment}
      >
        {renderButtonContent()}
      </button>
      <ToastContainer />
    </article>
  )
}

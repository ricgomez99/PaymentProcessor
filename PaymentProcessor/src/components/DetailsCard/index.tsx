import { cardMocks } from '../../lib/mocks'
import { useProductContext } from '../../hooks/useProductContext'
import { CardData } from '../../types/componentTypes'

export default function DetailsCard() {
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

  return (
    <article className="flex flex-col mt-8 justify-between lg:min-w-[450px] lg:flex-row max-w-3xl bg-[#F8FAFC] rounded-lg p-3 shadow-lg">
      <aside className="flex flex-col gap-2 text-left">
        <div className="flex flex-row justify-between gap-2">
          <img
            className="max-w-16 aspect-square object-cover rounded-lg border border-slate-400"
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
          </div>
        </div>
        <p role="stock" className="text-sm text-slate-400 font-semibold">
          Stock:{' '}
          <span className="text-sm text-slate-700">
            {productDetails?.stock}
          </span>
        </p>
      </aside>
      <aside className="flex flex-col text-left">
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
        <div className="flex flex-row justify-between gap-1">
          <p className="text-sm text-slate-400 font-semibold">
            Shipping Fee: <span className="text-slate-700">{shippingFee}</span>
          </p>
          <p className="text-sm text-slate-400 font-semibold">
            Delivery Fee: <span className="text-slate-700">{deliveryFee}</span>
          </p>
        </div>
      </aside>
    </article>
  )
}

import Card from '../../components/Card'
import { memo } from 'react'
import useQueryProducts from '../../hooks/useQueryProducts'
import { ProductPayload } from '../../types/helpers'

export default memo(function MainPage() {
  const { products } = useQueryProducts()
  return (
    <section className="max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products &&
        products.map((card: ProductPayload) => (
          <Card
            key={card._id}
            _id={card._id}
            title={card.title}
            description={card.description}
            price={card.price}
            imageUrl={card.imageUrl}
            stock={card.stock}
          />
        ))}
    </section>
  )
})

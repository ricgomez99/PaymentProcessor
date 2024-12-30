import { cardMocks } from '../../lib/mocks'
import Card from '../../components/Card'

export default function MainPage() {
  return (
    <section className="max-w-5xl grid grid-cols-3">
      {cardMocks &&
        cardMocks.map((card) => (
          <Card
            title={card.title}
            description={card.description}
            price={card.price}
            imageUrl={card.imageUrl}
            stock={card.stock}
            key={card.id}
          />
        ))}
    </section>
  )
}

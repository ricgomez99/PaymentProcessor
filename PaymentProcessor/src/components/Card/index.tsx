import { useState } from 'react'

export default function Card() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((prev) => (prev += 1))
  return (
    <div className="flex flex-col justify-center items-center max-w-md">
      <img alt="product image" />
      <h3>Card Title</h3>
      <span>Description</span>
      <p role="description">This is the pruduct description</p>
      <span>Price</span>
      <span role="price">$1</span>
      <p>
        Count: <span role="counter">{count}</span>
      </p>
      <button onClick={handleClick}>Increment</button>
      <button>Pay with credit card</button>
    </div>
  )
}

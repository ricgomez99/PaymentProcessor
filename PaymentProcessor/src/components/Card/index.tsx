import { useState } from 'react'

export default function Card() {
  const [count, setCount] = useState(0)

  const handleClick = () => setCount((prev) => (prev += 1))
  return (
    <div className="flex flex-col justify-center items-center max-w-md">
      <h3>Card Title</h3>
      <p>
        Count: <span role="counter">{count}</span>
      </p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

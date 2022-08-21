import { useState } from 'react'

export default function Home() {
  const [score, setScore] = useState(0)
  const increaseScore = () => setScore(score + 1)
  const reduceScore = () => setScore(score - 1)

  // const [substract, setSubstraction] = useState()

  return (
    <div>
      <p>Your score is {score}</p>
      <button onClick={increaseScore}>+</button>
      <button onClick={reduceScore}>-</button>
    </div>
  )
}

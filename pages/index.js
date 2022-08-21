import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [score, setScore] = useState(0)
  const increaseScore = () => setScore(score + 1)

  return (
    <div>
      <p>Your score is {score}</p>
      <button onClick={increaseScore}>+</button>
    </div>
  )
}

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Привет из React!</h1>
      <div className="card">
        <p>Добро пожаловать на React-сайт</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Счётчик: {count}
        </button>
      </div>
    </>
  )
}

export default App

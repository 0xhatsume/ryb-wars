import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { atom, useAtom } from 'jotai'

// Create your atoms and derivatives
const textAtom = atom('hello')
const uppercaseAtom = atom(
  (get) => get(textAtom).toUpperCase()
)

// Use them anywhere in your app
const Input = () => {
  const [text, setText] = useAtom(textAtom)
  const handleChange = (e) => setText(e.target.value)
  return (
    <input value={text} onChange={handleChange} />
  )
}

const Uppercase = () => {
  const [uppercase] = useAtom(uppercaseAtom)
  return (
    <div>Uppercase: {uppercase}</div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Input />
      <Uppercase />
      <div><Button>Click me</Button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

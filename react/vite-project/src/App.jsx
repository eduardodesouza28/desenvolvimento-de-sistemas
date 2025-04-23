import { use, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(loading => setLoading(loading))
      console.log(loading)
    }, 2000)
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => response.json())
      .then(data => setData(data))
    console.log(data)
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count + 1}`)
      .then(response => response.json())
      .then(data => setData(data))
    console.log(data)
  }, [count])




  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
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
        <div className='card'>
          {!loading && <h2>Loading...</h2>}
          {loading && <h2>{loading.title}</h2>}
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

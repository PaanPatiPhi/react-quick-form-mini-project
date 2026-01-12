import { useState } from 'react'
import MovieForm from './component/MovieForm'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<MovieForm />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/productionHouse'
import GenreMovieList from './Components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>

      <Slider/>

      <ProductionHouse/>

      <GenreMovieList/>
      </div>
    </>
  )
}

export default App

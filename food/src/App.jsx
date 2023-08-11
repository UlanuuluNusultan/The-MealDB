import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FoodDatail from './pages/FoodDatail'
import Header from './components/header/Header'
import './App.css'

const App = () => {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/food-info/:foodId' element ={<FoodDatail/>}/>
      </Routes>
    </div>
  )
}

export default App
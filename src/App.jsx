import { useState } from 'react'

import './App.css'
import Navigation from './Component/Header/Navigation'
import Footer from './Component/Footer/Footer'
import Body from './Component/Body/Body'
import Product from './Component/Body/Product'
import SearchAccount from './Component/Header/SearchAccount'

function App() {
  

  return (
    <>
    
       <Navigation />
       <SearchAccount />
       <Body />
       <Product/>
       <Footer />
     
    
    </>
  )
}

export default App

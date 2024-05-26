import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Category from './components/pages/Category'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Footer from './components/footer/Footer'
import CardDetail from './components/pages/Card/CardDetail'
import Checkout from './components/checkout/Checkout'
import { CartProvider } from './components/context/Context'

function App() {

  return (
    <>  
<CartProvider>
    <BrowserRouter>

     <Navbar/>
     <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/about' element={ <About/>} />
      <Route path='/Category' element={<Category/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/check' element={<Checkout/>} />
      <Route path='/products/:id' element={<CardDetail/>} />
     
     </Routes>
     <Footer/>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

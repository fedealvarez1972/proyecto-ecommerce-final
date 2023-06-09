import './App.css'
import {
    HashRouter,
    Routes,
    Route
  } from 'react-router-dom'
  
import NavBar from './Components/Navbar'
import Home from './Page/Home'
import ProductsDetail from './Page/ProductsDetail'
import Login from './Page/Login'
import Purchases from './Page/Purchases'
import { useSelector } from 'react-redux'


function App() {
  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
        <div className="App"> 
        { isLoading && <Loader/> }
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product/id" element={<ProductsDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Purchases" element={<Purchases />} />
        </Routes>
        </div>
      
    </HashRouter>
  );
}

export default App


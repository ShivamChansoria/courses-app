import './App.css'

import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Navbar from './Compnents/Header/Header'
import Landing from './Compnents/Home/Landing'
import Home from './Compnents/Home/Home';
import Login from './Auth/Login';
import Cart from './Compnents/Cart/Cart';
import Signup from './Auth/Signup';

const router = createBrowserRouter([ 
  { path: "*", Component: Root},
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {

  return (
    <div style={{overflowX:"hidden", msTransitionDelay:"3s"}}>
      <Routes>

<Route path="/" element={<Home />} />
<Route path="/login"  element={<Login />} />
<Route path="/cart"  element={<Cart />} />
<Route path="/signup"  element={<Signup />} />

</Routes>
    </div>
    
  )
}

     

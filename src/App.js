import { BrowserRouter, Routes , Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Router } from 'react-router-dom';
import './App.css';
import Products from './Components/Products';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';
import NotFound from './Components/NotFound';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Products/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  ))
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Dashboard/>} />
    //   <Route path="/products" element={<Products/>} />
    //   <Route path="/products/:id" element={<Products/>} />
    //   <Route path='/cart' element={<Cart/>} />
    //   <Route path="*" element={<Products/>} />
    // </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>

    
  );
}

export default App;

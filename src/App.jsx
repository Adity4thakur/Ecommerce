// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  // const [count, setCount] = useState(0);

  return <>
  < Header />
  {/* <Products /> */}
   {/* <Home/> */}
   {/* <Category /> */}
   <ProductsDetails/>
  <Footer/>
 
  </>;
}

export default App;

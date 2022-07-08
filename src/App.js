import React, {useEffect, lazy, Suspense} from "react"
import './App.css';
import {Switch, BrowserRouter, Route} from "react-router-dom"
// import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
// import Login from './Pages/Login/Login';
// import Register from './Pages/Register/Register';
import {useDispatch} from "react-redux"
import {auth} from "./utils/firebase"
import { setUser } from "./Redux/actions";
// import SingleProduct from "./Pages/SingleProduct/SingleProduct";
// import Checkout from "./Pages/Checkout/Checkout";
// import Payment from "./Pages/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js" 
import {Elements} from "@stripe/react-stripe-js"
// import Orders from "./Pages/Orders/Orders";
import Loading from "./Components/Loading/Loading"

const Home = lazy(()=> import("./Pages/Home/Home")) 
const Login = lazy(()=> import("./Pages/Login/Login")) 
const Register = lazy(()=> import("./Pages/Register/Register")) 
const Checkout = lazy(()=> import("./Pages/Checkout/Checkout")) 
const Orders = lazy(()=> import("./Pages/Orders/Orders")) 
const Payment = lazy(()=> import("./Pages/Payment/Payment"))  
const SingleProduct = lazy(()=> import("./Pages/SingleProduct/SingleProduct"))  

const promise = loadStripe("pk_test_51LIl9ISDPtLKApAvcRGnkD5aEBupO7lsaJdLCjvTTJEMg6Wuxn6ENciPQRCaHJFq7MYwaSNa4Bnz3XSrxhPtZBrw00q1SXqywl")

const App = () =>  {
  let dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Suspense fallback={<Loading/>}>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}> 
                <Payment/>
              </Elements>
            </Route>
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
            
          <Route path="/orders">
              <Header/>
              <Orders/>
            </Route>

          <Route path="/checkout">
              <Header/>
              <Checkout/>
            </Route>
            
          <Route path="/product/:id">
              <Header/>
              <SingleProduct/>
            </Route>
            
            <Route path="/register">
              <Register/>
            </Route>
            
            <Route path="/login">
              <Login/>
            </Route>
          </Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

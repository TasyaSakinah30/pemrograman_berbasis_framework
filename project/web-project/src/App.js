import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import About from "./components/About";
import Keranjang from "./components/Keranjang";
import ProductPost from "./components/ProductPost";
// import AddProduct from "./components/AddProduct";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
    <Route path="/login" component={Login} />
    <>
    <Navbar />
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />    
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      {/* <Route path="/add" component={AddProduct} /> */}
      <Route path="/Keranjang" component={Keranjang} />
      <Route path="/addBarang" component={ProductPost} />
      </>
    </Switch>  
  );
}
function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
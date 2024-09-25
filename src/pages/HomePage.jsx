import React from "react";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/Banner";
import ProductsPage from "./ProductsPage";
// import ProductList from '../components/product/ProductList';
// import BookSection from '../components/product/BookSection';
import Footer from "../components/shared/Footer";
const HomePage = () => {
  return (<div>
    <Navbar/>
    <Banner/>
    <ProductsPage/>
    <Footer/>
  </div>);
};

export default HomePage;

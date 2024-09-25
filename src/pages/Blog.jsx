import React from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "./../components/shared/Footer";

export default function Blog() {
  return (<div>
    {" "}
    <Navbar/>
    <p className="container mx-auto p-20">Welcome to Blog Page</p>
    <Footer/>
  </div>);
}

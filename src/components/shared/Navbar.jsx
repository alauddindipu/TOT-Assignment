import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "./../../routes/index.js";

function Navbar() {
  return (<section className="bg-gray-200 p-0 lg:p-5 sticky top-0 z-50">
    <div className="container mx-auto ">
      <header className="flex items-center flex-col lg:flex-row lg:justify-evenly">
        <div className="">
          <Link to={ROUTES.HOME}>
            {/* <img src="src/components/images/book-logo.jpg" alt="logo" className="cursor-pointer"/> */}
            <p className="items-center font-extrabold">BooksLover</p>
          </Link>
        </div>
        <div className="items-center space-x-4">
          <Link to="/" className="hover:text-orange-500 cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500 cursor-pointer">
            About
          </Link>
          <Link to="/blog" className="hover:text-orange-500 cursor-pointer">
            Blog
          </Link>
          <Link to="/faq" className="hover:text-orange-500 cursor-pointer">
            FAQ
          </Link>
        </div>

        <div className="space-x-4">
          <button type="button" className="bg-orange-300 hover:bg-orange-600 rounded  p-1 lg:p-2">
            {" "}
            Buy Book
          </button>
          <button type="button" className="bg-orange-300 hover:bg-orange-600 rounded p-1 lg:p-2">
            {" "}
            Sign In
          </button>
        </div>
      </header>
    </div>
  </section>);
}

export default Navbar;

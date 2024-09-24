import React from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "./../../routes/index.js";

function Navbar() {
  return (<section className="bg-gray-200 p-4">
    <div className="container mx-auto ">
      <header className="flex items-center justify-between">
        <Link to={ROUTES.HOME}>
          <img src="src/components/images/book-logo.png" alt="logo" className="h-20 w-40 cursor-pointer"/>
        </Link>

        <nav className="items-center space-x-4">
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
        </nav>

        <div className="space-x-6">
          <button type="button" className="bg-orange-300 hover:bg-orange-600 rounded p-4">
            {" "}
            Buy Book
          </button>
          <button type="button" className="bg-orange-300 hover:bg-orange-600 rounded p-4">
            {" "}
            Sign In
          </button>
        </div>
      </header>
    </div>
  </section>);
}

export default Navbar;

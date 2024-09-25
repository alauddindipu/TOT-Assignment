import React from "react";
import Navbar from "./../components/shared/Navbar";

export default function NotFound() {
  return (<div>
    <Navbar/>
    <div className="container mx-auto">
      404- Page not Found.
      <p>Please try correctly.</p>
    </div>
  </div>);
}

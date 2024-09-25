import React from "react";
import Navbar from "./../components/shared/Navbar";
import Footer from "./../components/shared/Footer";

export default function Faq() {
  return (<div>
    <Navbar/>
    <div className="container mx-auto p-10">
      <p className="font-bold text-3xl p-4 flex justify-center">FAQ</p>
      <p className="p-2 font-semibold">
        1# What is React.js and Explain the concept of "components" in React.
      </p>
      <p>
        Ans: React.js is a JavaScript library for building user interfaces, particularly for single-page applications, by allowing developers to create reusable UI components. In React, "components" are independent, self-contained pieces of code that manage their own state and render specific parts of the UI, promoting modularity and reusability.
      </p>
      <p className="p-2 font-semibold">
        2# What is JSX in React, and how does it work?
      </p>
      <p>
        Ans: JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within React components. It gets compiled into JavaScript function calls, creating React elements that render the UI efficiently.
      </p>
      <p className="p-2 font-semibold">
        3# What is the Virtual DOM, and how does React use it to optimize performance?
      </p>
      <p>
        Ans: The Virtual DOM is a lightweight, in-memory representation of the actual DOM that React uses to improve performance by minimizing direct DOM manipulations. React efficiently updates the real DOM by first comparing changes to the Virtual DOM, ensuring only necessary updates are applied, which reduces rendering time.
      </p>
      <p className="p-2 font-semibold">
        4# Explain the concept of "props" in React and how they are used.
      </p>
      <p>
        Ans: In React, "props" (short for properties) are read-only attributes passed from parent components to child components, allowing data and event handlers to be shared. They enable component reusability and dynamic rendering by letting components receive and display varying data based on their context.
      </p>
      <p className="p-2 font-semibold">
        5# What is "state" in React, and how does it differ from props?
      </p>
      <p>
        Ans: In React, "state" refers to a mutable data structure that a component can manage and update internally, affecting its behavior and rendering. Unlike props, which are passed from parent to child and are immutable, state is local to the component and can change over time, often in response to user interactions.
      </p>
    </div>
    <Footer/>
  </div>);
}

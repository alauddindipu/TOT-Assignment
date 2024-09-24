import React from 'react';

function Navbar() {
    return (
      <section className="bg-gray-200 p-4">
        <div className="container mx-auto ">
          <header className="flex items-center justify-between">
            
            <div> <img
                    src="src/components/images/book-logo.png" 
                    alt="logo"
                    className="h-20 w-40 cursor-pointer"
                />
             </div>
         
            <nav className="items-center space-x-4">
              <span className="hover:text-orange-500 cursor-pointer">Home</span>
              <span className="hover:text-orange-500 cursor-pointer">About</span>
              <span className="hover:text-orange-500 cursor-pointer">Blog</span>
              <span className="hover:text-orange-500 cursor-pointer">FAQ</span>
            </nav>
            <div className='space-x-6'>
                <button type="button" className='bg-orange-300 hover:bg-orange-600 rounded p-4'> Buy Book</button>
                <button type="button" className='bg-orange-300 hover:bg-orange-600 rounded p-4'> Sign In</button>
            </div>
          </header>
        </div>
      </section>
    );
  }

export default Navbar;

const Banner = () => {
  return (<section className="p-8">
    <div className="container mx-auto ">
      <div className="hero ">
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-around ">
          <div className="">
            {" "}
            <img src="src/components/images/books-banner.jpg" className="max-w-sm rounded-lg shadow-2xl"/>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Book Shop</h1>
            <p className="py-6 text-2xl">
              <p>Unlock a World of Stories</p>– Find Your Next Favorite Book at
              <span className="font-bold px-2">BooksLover</span>
            </p>
            <button className="bg-orange-300 hover:bg-orange-600 rounded p-4">
              Buy Book
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

export default Banner;

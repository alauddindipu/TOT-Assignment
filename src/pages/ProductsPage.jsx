import React, { useEffect, useState } from 'react';
// import Script from '/src/utils';


export default function ProductsPage() {
    const [books, setBook] = useState([]);
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBook(data));

    }, [])
    return(
        
    <section>
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
                {books?.map((book)=>{
                    return <div key={book?.bookId} className='bg-gray p-3 shadow space-y-4'>
                                <div className='bg-gray-100'>
                                <img src={book.image} alt="image" />
                                </div>
                                <div><p>{book.tags}</p></div>
                                <p>{book.bookName}</p>
                                <p>{book.author}</p>
                                <p>{book.category}</p>
                                <p>{book.rating}</p>
                                <button type="button" className='bg-orange-400 p-3 text-white rounded'>Book Details</button>

                            </div>
                    })
                }
    </div>
    </section>
    );
}

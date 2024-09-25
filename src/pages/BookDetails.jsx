import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Bookjson from "/src/book.json";
import Navbar from "./../components/shared/Navbar";

export default function BookDetails() {
  let {bookId} = useParams();

  const bookWithIds = Bookjson.filter(category => bookId.includes(category.bookId));

  return (<div>
    <Navbar/>
    <section className="p-5 bg-gray shadow flex flex-col lg:justify-between lg:flex-row container mx-auto">
      <div className="h-47 w-96">
        <p>
          <img src={bookWithIds.map(a => a.image)} alt="image"/>
        </p>
        <br/>
        <p>
          <button type="button" className="bg-orange-400 p-2 text-white rounded overflow-hidden	">
            Wish to Read
          </button>{" "}
        </p>
      </div>
      <div className="px-5 py-18 lg:py-0">
        <p>{bookWithIds.map(a => a.bookName)}</p>
        <p>{bookWithIds.map(a => a.author)}</p>
        <p>{bookWithIds.map(a => a.category)}</p>
        <p>{bookWithIds.map(a => a.review)}</p>
        <p>{bookWithIds.map(a => a.tags)}</p>
        <p>{bookWithIds.map(a => a.totalPages)}</p>
        <p>{bookWithIds.map(a => a.publisher)}</p>
        <p>{bookWithIds.map(a => a.yearOfPublishing)}</p>
        <p>{bookWithIds.map(a => a.rating)}</p>
      </div>
    </section>
  </div>);
}

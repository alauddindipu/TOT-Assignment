import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Bookjson from "/public/book.json";
import Navbar from "./../components/shared/Navbar";

export default function BookDetails() {
  let {bookId} = useParams();

  const bookWithIds = Bookjson.filter(category => bookId.includes(category.bookId));

  return (<div>
    <Navbar/>
    <section className="p-5 bg-gray shadow flex flex-col lg:justify-between lg:flex-row container mx-auto">
      <div className="h-48 w-96">
        <img src={bookWithIds.map(a => a.image)} alt="image"/>
      </div>
      <div className="py-10 px-5 lg:py-0">
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

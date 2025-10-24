import { useEffect, useState } from "react";
import React from "react";

function LocalAPI() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/api/books/");
    const bookData = await response.json();
    console.log(bookData);
    setBooks(bookData);
  };

  return <div>LocalAPI</div>;
}

export default LocalAPI;

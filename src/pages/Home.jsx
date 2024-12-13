import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";
import { books } from "../store/data"; // Import the books data

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Discover Your Next Favorite Book!
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-4">by {book.author}</p>
                <button
                  onClick={() => handleOpenModal(book)}
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedBook && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-4/5 max-w-3xl transform transition-all duration-500 ease-out scale-110">
              <div className="relative">
                <button
                  className="absolute top-0 right-0 p-3 text-gray-700 hover:text-gray-900"
                  onClick={handleCloseModal}
                >
                  &#10005;
                </button>
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <h2 className="text-3xl font-bold text-gray-800 mt-4">
                  {selectedBook.title}
                </h2>
                <p className="text-gray-600 mt-2">{selectedBook.description}</p>
              </div>
            </div>
          </div>
        )}

        <Chatbot />
      </div>
    </>
  );
};

export default Home;

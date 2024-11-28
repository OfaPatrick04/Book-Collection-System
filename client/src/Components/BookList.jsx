/* eslint-disable react/prop-types */
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {books.length > 0 ? (
        books.map((book) => (
          <div
            key={book._id}
            className="bg-white p-4 rounded-md shadow-md flex justify-between items-start hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div>
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-600">Author: {book.author}</p>
              <p className="text-gray-600">Price: ${book.price}</p>
              <p className="text-gray-600">Genre: {book.genre}</p>
              <p className="text-gray-600">Copies Left: {book.copiesLeft}</p>
            </div>
            <div className="space-x-2 pt-[25%]">
              <Link
                to="/edit"
                onClick={() => onEdit(book)}
                className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
              >
                Edit
              </Link>
              <button
                onClick={() => onDelete(book._id)}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No books available.</p>
      )}
    </div>
  );
};

export default BookList;

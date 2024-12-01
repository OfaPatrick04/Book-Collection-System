import { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookList = ({ books, onEdit, onDelete }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedBookId(id);
    setShowPopup(true);
  };

  const confirmDelete = () => {
    onDelete(selectedBookId);
    setShowPopup(false);
    setSelectedBookId(null);
  };

  const cancelDelete = () => {
    setShowPopup(false);
    setSelectedBookId(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <p className="text-gray-600">Price: ${book.price}</p>
                <p className="text-gray-600">Genre: {book.genre}</p>
                <p className="text-gray-600">Copies Left: {book.copiesLeft}</p>
              </div>
              <div className="flex justify-between bg-gray-100 px-4 py-2">
                <Link
                  to="/edit"
                  onClick={() => onEdit(book)}
                  className="text-blue-500 hover:text-blue-700 transition-all"
                >
                  <FaEdit className="inline mr-2" />
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteClick(book._id)}
                  className="text-red-500 hover:text-red-700 transition-all"
                >
                  <FaTrash className="inline mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No books available. Start adding some!
          </p>
        )}
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this book?
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;

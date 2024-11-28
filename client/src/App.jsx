import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import AddBook from './Pages/AddBook';
import EditBook from './Pages/EditBook';
import './index.css'

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  // Fetch books from the backend
  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3000/books'); // Adjust the endpoint URL if necessary
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Add a new book
  const handleAddBook = async (newBook) => {
    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      } else {
        alert("Book Added Successfully")
      }
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  // Update an existing book
  const handleUpdateBook = async (updatedBook) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${updatedBook._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
      });
      if (!response.ok) {
        throw new Error('Failed to update book');
      }
      fetchBooks(); // Refresh the book list
      setEditingBook(null); // Clear the edit state
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  // Delete a book
  const handleDeleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
      fetchBooks(); // Refresh the book list
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  useEffect(() => {
    fetchBooks(); // Initial fetch on component mount
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                books={books}
                onEdit={setEditingBook}
                onDelete={handleDeleteBook}
              />
            }
          />
          <Route path="/add" element={<AddBook onAdd={handleAddBook} />} />
          <Route
            path="/edit"
            element={
              editingBook ? (
                <EditBook
                  book={editingBook}
                  onUpdate={handleUpdateBook}
                />
              ) : (
                <div className="text-center text-gray-600 mt-8">
                  No book selected for editing.
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

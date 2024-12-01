import { useState, useEffect } from 'react';

const BookForm = ({ initialBook, onSubmit }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    genre: '',
    copiesLeft: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (initialBook) setBook(initialBook);
  }, [initialBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);

    setSuccessMessage('Book added successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 

    setBook({
      title: '',
      author: '',
      price: '',
      genre: '',
      copiesLeft: '',
    });
  };

  return (
    <div>
      {successMessage && (
        <p className="bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4">
          {successMessage}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-xl font-bold">
          {initialBook ? 'Edit Book' : 'Add Book'}
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          required
          className="block w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-1"
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          required
          className="block w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-1"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={book.price}
          onChange={handleChange}
          required
          className="block w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-1"
        />
        <select
          name="genre"
          value={book.genre}
          onChange={handleChange}
          required
          className="block w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-1"
        >
          <option value="">Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Biography">Biography</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
        <input
          type="number"
          name="copiesLeft"
          placeholder="Copies Left"
          value={book.copiesLeft}
          onChange={handleChange}
          required
          className="block w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          {initialBook ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;

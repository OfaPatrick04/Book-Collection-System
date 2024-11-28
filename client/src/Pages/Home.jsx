/* eslint-disable react/prop-types */
import BookList from '../Components/BookList';

const Home = ({ books, onEdit, onDelete }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Book List</h1>
      <BookList books={books} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Home;

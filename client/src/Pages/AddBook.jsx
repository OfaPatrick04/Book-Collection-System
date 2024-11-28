/* eslint-disable react/prop-types */
import BookForm from '../Components/BookForm';

const AddBook = ({ onAdd }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Book</h1>
      <BookForm onSubmit={onAdd} />
    </div>
  );
};

export default AddBook;

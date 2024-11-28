/* eslint-disable react/prop-types */
import BookForm from '../Components/BookForm';

const EditBook = ({ book, onUpdate }) => {
  const handleUpdate = (updatedBook) => {
    onUpdate({ ...updatedBook, id: book._id });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Book</h2>
      <BookForm initialBook={book} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditBook;

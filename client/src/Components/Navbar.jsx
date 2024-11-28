import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Book Management</h1>
        <p>AMANGBO IKECHUKWU SAMUEL - 10943349</p>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/add" className="hover:underline">
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

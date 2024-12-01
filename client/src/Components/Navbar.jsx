import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">
          Book<span className="text-yellow-400"> Management</span> System
        </h1>
        <h2>AMANGBO IKECHUKWU SAMUEL - 10943349</h2>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/add"
            className="bg-yellow-400 text-teal-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition-all"
          >
            Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-end items-center">
      <Link to="/" className="hover:text-gray-400">
        <HomeIcon size={28} />
      </Link>
    </nav>
  );
}

export default Navbar;

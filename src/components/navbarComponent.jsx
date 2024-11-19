import { useState } from 'react';
import Link from 'next/link';
import {MdClose, MdOutlineMenu} from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white capitalize">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">car parking app</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none"
        >
          {isOpen ? <MdClose/> : <MdOutlineMenu/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-600">About</Link>
          <Link href="/services" className="block px-4 py-2 hover:bg-gray-600">Services</Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

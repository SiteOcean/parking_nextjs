import { useState } from 'react';
import Link from 'next/link';
import {MdClose, MdOutlineMenu} from 'react-icons/md'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonBlur=()=>{
    setTimeout(()=>{
      setIsOpen(false)
    },100)
  }

  return (
    <nav className="min-h-[75px] bg-gradient-to-r from-blue-300 via-purple-400 to-blue-400 text-white capitalize">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">car parking app</Link>
        </div>

        <div className="hidden md:flex space-x-6 text-center">
        <Link href="/" className="hover:text-gray-100 hover:border hover:rounded-md p-2 w-[70px] transition-all duration-200">Home</Link>
        <Link href="/aboutPage" className="hover:text-gray-100 hover:border hover:rounded-md p-2 w-[70px] transition-all duration-200">About</Link>
        <Link href="/contactPage" className="hover:text-gray-100 hover:border hover:rounded-md p-2 w-[70px] transition-all duration-200">Contact</Link>
      </div>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden  focus:outline-none"
          onBlur={handleButtonBlur}
        >
          {isOpen ? <MdClose className='text-[30px]'/> : <MdOutlineMenu className='text-[30px]'/>}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-300 via-purple-400 to-blue-400">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link href="/aboutPage" className="block px-4 py-2 hover:bg-gray-600">About</Link>
          <Link href="/contactPage" className="block px-4 py-2 hover:bg-gray-600">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

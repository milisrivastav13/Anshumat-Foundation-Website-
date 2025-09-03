import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="bg-blue-600 fixed top-0 left-0 right-0 shadow-md z-50">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Anshumat.org
          </Link>

          {/* Hamburger icon */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Side menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-500">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col mt-6 space-y-4 px-4">
          <li>
            <Link
              to="/"
              className="block hover:bg-blue-600 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:bg-blue-600 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/initiatives"
              className="block hover:bg-blue-600 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Initiatives
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:bg-blue-600 px-3 py-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block bg-white text-blue-700 px-3 py-2 rounded hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="block bg-yellow-400 text-blue-900 px-3 py-2 rounded hover:bg-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
























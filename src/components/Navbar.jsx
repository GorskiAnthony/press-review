import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeek } from "../services/handleFunction";
import "../assets/dropdown.css";

const Navbar = () => {
  const [week, setWeek] = useState([]);

  useEffect(() => {
    getWeek().then((res) => {
      setWeek(res);
    });
  }, []);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://res.cloudinary.com/wildcodeschool/image/upload/c_fill,h_50/v1/static/irjoy97aq0eol8bf6959"
            alt="logo"
          />
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Accueil
          </Link>
          <Link to="/add" className="mr-5 hover:text-gray-900">
            Ajouter un article
          </Link>
          <ul>
            <button
              type="button"
              className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dropdown"
            >
              <span>Les semaines</span>
              <div className="dropdown-content text-gray-600">
                {week.map((day, index) => (
                  <li key={index} className="mr-5 hover:text-gray-900">
                    <Link to={`/week/${day}`}>Semaine {day}</Link>
                  </li>
                ))}
              </div>
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

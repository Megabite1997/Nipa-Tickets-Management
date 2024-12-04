import React from "react";
import { NavLink, Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";

import LogoNipa from "../assets/nipa/nipa_logo.jpeg";

const Navbar: React.FC = () => {
  return (
    <header className="fixed w-full flex bg-white items-center justify-end p-2 px-5 sm:px-10 shadow-lg z-50">
      <Link className="mr-auto flex items-center" to="/">
        <img className="w-12 md:w-16" src={LogoNipa} alt="Logo Nipa" />
        <p>NIPA Tickets</p>
      </Link>

      <div className="md:hidden">
        <GiHamburgerMenu className="peer" />
        <div className="absolute bg-pink-600 hover:bg-pink-800 text-white hidden peer-hover:flex hover:flex flex-col w-28 shadow-xl right-4">
          <NavLink className="p-2" to="tickets">
            Tickets
          </NavLink>
          <NavLink className="p-2" to="create_tickets">
            Create Tickets
          </NavLink>
          <NavLink className="p-2" to="update_tickets">
            Update Tickets
          </NavLink>
          <NavLink className="p-2" to="about_us">
            About Us
          </NavLink>
          <NavLink className="p-2" to="contact_us">
            Contact Us
          </NavLink>
        </div>
      </div>

      <nav className="hidden md:block">
        <ul className="list-none m-0 p-0 flex w-full md:gap-8 lg:gap-14 xl:gap-20 items-center md:text-sm lg:text-lg">
          <li className="lg:ml-10">
            <NavLink
              to="tickets"
              className={({ isActive }) =>
                isActive
                  ? "peer flex items-center gap-2 text-pink-600"
                  : "peer flex items-center gap-2 hover:text-pink-600"
              }
            >
              Tickets <RiArrowDropDownLine size={30} />
            </NavLink>
            <div className="absolute bg-pink-600 text-white hidden peer-hover:flex hover:flex flex-col shadow-xl">
              <NavLink className=" hover:bg-pink-800 p-2" to="create_tickets">
                Create Tickets
              </NavLink>
              <NavLink className="hover:bg-pink-800 p-2" to="update_tickets">
                Update Tickets
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink
              to="about_us"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-pink-600 "
                  : "flex items-center gap-2 hover:text-pink-600"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact_us"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 text-pink-600 "
                  : "flex items-center gap-2 hover:text-pink-600"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

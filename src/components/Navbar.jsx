import { Link, Outlet } from "react-router-dom";
import Logo from "../images/Logo.png";
import { useState } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        <nav className="p-6  bg-white sm:flex sm:justify-around sm:items-center sm:py-5">
          <div className="logo flex justify-between ">
            <img className="mx-4 animate-bounce sm:mx-0" src={Logo} width={80} alt="" />
            <span
              onClick={() => {
                setShow(!show);
              }}
              className="sm:hidden"
            >
              <div className="bg-pink-600 w-8 h-2 m-1 rounded-2xl"></div>
              <div className="bg-pink-600 w-8 h-1 m-1 rounded-2xl"></div>
              <div className="bg-pink-600 w-8 h-2 m-1 rounded-2xl"></div>
            </span>
          </div>

          {show ? (
            <>
              <div className="nav-links py-5 sm:py-0 list-none sm:flex ">
                <li>
                  <Link className="p-4" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="p-4" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="p-4" to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="p-4" to="/price">
                    Price
                  </Link>
                </li>
              
              </div>
              <div className="py-5 sm:py-0">
                <Link className="p-4" to="/">
                  Login
                </Link>
                <Link
                  className=" bg-pink-600 text-white rounded-full px-4 py-3"
                  to="/"
                >
                  Register
                </Link>
              </div>
            </>
          ) : null}
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

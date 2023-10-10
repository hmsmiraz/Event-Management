import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";
import swal from "sweetalert";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        swal("logout Successfully");
      })
      .catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/premium">Premium</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
    </>
  );
  return (
    <div data-aos="fade-down" className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xs lg:text-xl">
          Event Sphere
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <div className="flex items-center justify-center">
          <div>
            {user ? (
              <p className="font-light text-xs w-10 lg:w-20">
                {user.displayName}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            {user ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-5 lg:w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CPH.png";
import Scroll from "../Scroll/Scroll";
import "./Header.css";
import { AuthContext } from "../../component/providers/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // button
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link>
          Services
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-green-600 text-white">
          <li>
            <Link to="/technicaleducation">কারিগরি শিক্ষা</Link>
          </li>
          <li>
            <Link to="/reliefdistribution">বন্যার্তদের মধ্যে ত্রাণ বিতরণ</Link>
          </li>
          <li>
            <Link to="/raisingeducating">এতিমদের লালন-পালন ও শিক্ষাদান</Link>
          </li>
          <li>
            <Link to="/sadaqahjariyah">সাদাকাহ জারিয়াহ</Link>
          </li>
          <li>
            <Link to="/distributionwinterclothes">শীতবস্ত্র বিতরণ</Link>
          </li>
          <li>
            <Link to="/plantationprogram">বৃক্ষরোপণ কর্মসূচি</Link>
          </li>
          <li>
            <Link to="/iftarramadanfood">ইফতার ও রমাদান ফুড বিতরণ</Link>
          </li>
          <li>
            <Link to="/distributionbooks">বই-পুস্তক লিফলেট বিতরণ</Link>
          </li>
          <li>
            <Link to="/vectorservices">সবার জন্য কুরবানী</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contactus">Contact</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/volunteer">Volunteer</Link>
      </li>
      <li>
        <Link>
          {user && (
            <p>
              Welcome{" "}
              <span className="text-light lg:text-green-600">
                {" "}
                {user?.displayName}
              </span>
            </p>
          )}{" "}
        </Link>
      </li>
    </React.Fragment>
  );
  return (
    <div className="navbar fixed shadow-md bg-light text-black bg-white  z-50 w-full px-5 py-2 flex justify-between items-center ">
      <div className="navbar-start">
        <div className="dropdown ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-600 lg:text-dark text-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          {" "}
          <img className="h-15" src={logo} alt="Clipping Path Hero" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <Link
            className="btn bg-green-600 mx-5 rounded-none text-white border-green-600  hover:border-2 hover:border-green-600 hover:bg-white hover:text-green-600"
            to="/login"
          >
            Login
          </Link>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                ) : (
                  <span className="text-4xl  text-green-600">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 bg-gradient-to-r from-green-600 to-green-400 text-white"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <button>Settings</button>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Scroll></Scroll>
      {/* <Whatsapp></Whatsapp> */}
    </div>
  );
};

export default Header;

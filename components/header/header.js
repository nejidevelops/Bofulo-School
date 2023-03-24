import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AppContext from "../AppContext";

const Header = () => {
  let context = useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <span className="text-warning">Build</span>Con
          </Link>
          <button
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-bs-target="#navbarSupportedContent"
            data-bs-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#about">
                  About
                </Link>
              </li>
              {context.currentUser ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="./writeArticle">
                      Blog
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" href="././writeArticle">
                      Blogs
                    </Link>
                  </li> */}

                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="/images/avatar.jpg"
                        className="rounded-circle"
                        height={30}
                        alt="Avatar"
                        // loading="lazy"
                        width={30}
                      />
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" href="/profile">
                          My profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/">
                          Bookmarks
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/userLogout">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" href="./userLogin">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="./userSignUp">
                      Create Account
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import React from "react";
import { useAuth } from "./AuthContext";
import styles from "../styles/Home.module.css";

const Header = () => {
  const { currentUser, googleLogin, logout } = useAuth();
  const googleLoginHandler = async () => {
    await googleLogin();
  };
  const signOutButton = async () => {
    await logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="/ideas.png" width="80px" height="80px" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                Pricing
              </a>
            </li>
          </ul>{" "}
          {currentUser ? (
            <div
              className="btn  mr-4"
              type="submit"
              onClick={() => signOutButton()}
            >
              Logout
            </div>
          ) : (
            <div
              className="btn  mr-4"
              type="submit"
              onClick={() => googleLoginHandler()}
            >
              Sign In
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;

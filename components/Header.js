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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <img src="/ideas.png" width="80px" height="80px" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link font-weight-bold" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">
                Pricing
              </a>
            </li>
          </ul>{" "}
          {currentUser ? (
            <div
              class="btn  mr-4"
              type="submit"
              onClick={() => signOutButton()}
            >
              Logout
            </div>
          ) : (
            <div
              class="btn  mr-4"
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

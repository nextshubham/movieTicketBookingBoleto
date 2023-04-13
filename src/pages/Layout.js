import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
export default function Layout() {
  return (
    <div>
      <>
        {" "}
        {/* <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="overlay" />
        <a href="#0" className="scrollToTop">
          <i className="fas fa-angle-up" />
        </a> */}
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
}

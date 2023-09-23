"use client";
import "./nav.css";
import Button from "../button/page";
import Button2 from "../button2/page";
import Logo from "../logo/page";
import Line from "../line/page";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [menuBtn, setMenuBtn] = React.useState(true);

  const ShuffleMenuIcon = () => {
    setMenuBtn(!menuBtn);
  };

  const closeMenu = () => {
    setMenuBtn(true);
  };

  return (
    <div className="fixer">
      <div className="nav">
        <div className={menuBtn ? "routes2" : "routes2_active"}>
          <div className="links_wrapper">
            <Link className="links" href="/" onClick={closeMenu}>
              Timeline
            </Link>
            <Link className="links" href="/" onClick={closeMenu}>
              Overview
            </Link>
            <Link className="links" href="/" onClick={closeMenu}>
              FAQs
            </Link>
            <Link className="links" href="/ContactPage" onClick={closeMenu}>
              Contact
            </Link>
          </div>
          <div>
            <Button
              route="/RegisterPage"
              children="Register"
              closee={closeMenu}
            />
          </div>
        </div>

        <div className="nav_wrapper">
          <div>
            <Logo />
          </div>
          <div className="routes">
            <div className="links_wrapper">
              <Link className="links" href="/">
                Timeline
              </Link>
              <Link className="links" href="/">
                Overview
              </Link>
              <Link className="links" href="/">
                FAQs
              </Link>
              <Link className="links" href="/ContactPage">
                Contact
              </Link>
            </div>
            <div>
              <Button2 route="/RegisterPage" children="Register" />
            </div>
          </div>

          <div className={menuBtn ? "unfixed" : "fixed"}>
            <div className="menubar" onClick={ShuffleMenuIcon}>
              <div className={menuBtn ? "hide" : "show"}></div>
              <img
                src={menuBtn ? "/menu.svg" : "/x.svg"}
                className="menu_icon"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default Nav;

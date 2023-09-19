"use client";
import "./nav.css";
import Button from "../button/page";
import Logo from "../logo/page";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const [menuBtn, setMenuBtn] = React.useState(true);

  const ShuffleMenuIcon = () => {
    setMenuBtn(!menuBtn);
  };

  return (
    <div>
      <div className="nav">
        <div className="nav_wrapper">
            <div className="flare">
                <img src="/flare.svg" alt="e no dey" />
            </div>
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
              <Link className="links" href="/">
                Contact
              </Link>
            </div>
            <div>
              <Button route="/logo" children="Register" />
            </div>
          </div>

          <div className={menuBtn ? "routes2" : "routes2_active"}>
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
              <Link className="links" href="/">
                Contact
              </Link>
            </div>
            <div>
              <Button route="/logo" children="Register" />
            </div>
          </div>


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
  );
};
export default Nav;

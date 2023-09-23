import "./first.css";
import Link from "next/link";
import React from "react";
import Button2 from "../../button2/page";
import Line from "../../line/page";
import Logo from "../../logo/page";

const FirstSection = () => {
  return (
    <div className="rights">
      <div className="ignite_wrapper">
        <div className="ignite">
          <p className="right_text">Igniting a Revolution in HR Innovation</p>
          <img src="/curve.svg" className="curve" alt="" />
        </div>
      </div>
      <div className="wrapper">
        <div className="first_left">
          <div className="flare">
            <img src="/flare.svg" alt="e no dey" />
          </div>
          <div className="intro">
            <div className="intro_wrap">
              <p className="intro_text">getlinked Tech</p>
              <img className="img4" src="/bulb.svg" alt="" />
            </div>
            <div className="intro2">
              <p className="intro_text">
                Hackathon <span className="alt_text">1.0</span>
              </p>
              <img className="img2" src="/spark.svg" alt="" />
              <img className="img3" src="/chain.svg" alt="" />
            </div>
            <img className="img1" src="/star.svg" alt="" />
          </div>
          <p className="desc">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button2 route="/RegisterPage" children="Register" />

          <div className="timer">
            <p>
              00<span>H</span>
            </p>
            <p>
              00<span>M</span>
            </p>
            <p>
              00<span>S</span>
            </p>
          </div>
        </div>
        <div className="first_right">
          <div className="vr">
            <img src="/vr_ball.svg" className="vr1" alt="" />
            <img src="/vr_guy.svg" className="vr2" alt="" />
            <img src="flare2.svg" className="vr3" alt="" />
          </div>
        </div>
      </div>

      <Line />
    </div>
  );
};
export default FirstSection;

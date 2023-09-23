import "./ninth.css";
import Button from "../../button/page";

const Ninth = () => {
  return (
    <div>
      <div className="wrapper9">
        <div className="header9">
          <p className="policy">Privacy Policy and</p>
          <p className="terms">Terms</p>
          <p className="updates">Last updated on September 12, 2023</p>
          <p className="goodies">
            Below are our privacy & policy, which outline a lot of goodies.{" "}
          </p>
          <p className="aim">it’s our aim to always take of our participant</p>
        </div>
        <div className="flex9">
          <div className="left9">
            <div className="left9_cont">
              <p className="value">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <p className="license">Licensing Policy</p>
              <p className="standard">
                Here are terms of our Standard License:
              </p>
              <div className="terms_div">
                <img src="/tick.svg" alt="" />
                <p className="exclusive">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </p>
              </div>
              <div className="terms_div">
                <img src="/tick.svg" alt="" />
                <p className="exclusive">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>
              <Button route="/" children="Read More" />
            </div>
          </div>
          <div className="right9">
            <img src="/openlock.svg" alt="" className="openlock" />
            <img src="/secure.svg" alt="" className="secure" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ninth;

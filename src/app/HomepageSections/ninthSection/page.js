import "./ninth.css";
import Button2 from "../../button2/page";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";

const Ninth = () => {
  return (
    <div>
      <div className="wrapper9">
        <div className="header9">
          <Transition>
            <p className="policy">Privacy Policy and</p>
          </Transition>
          <Transition>
            <p className="terms">Terms</p>
          </Transition>
          <Transition>
            <p className="updates">Last updated on September 12, 2023</p>
          </Transition>
          <Transition2>
            <p className="goodies">
              Below are our privacy & policy, which outline a lot of goodies.
            </p>
          </Transition2>
          <Transition2>
            <p className="aim">it’s our aim to always take of our participant</p>
          </Transition2>
        </div>
        <div className="flex9">
          <div className="left9">
            <div className="left9_cont">
              <Transition>
                <p className="value">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This Privacy
                  Policy outlines how we collect, use, disclose, and safeguard
                  your data when you participate in our tech hackathon event. By
                  participating in our event, you consent to the practices
                  described in this policy.
                </p>
              </Transition>
              <Transition>
                <p className="license">Licensing Policy</p>
              </Transition>
              <Transition2>
                <p className="standard">
                  Here are terms of our Standard License:
                </p>
              </Transition2>
              <div className="terms_div">
                <img src="/tick.svg" alt="" />
                <Transition>
                  <p className="exclusive">
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </Transition>
              </div>
              <div className="terms_div">
                <img src="/tick.svg" alt="" />
                <Transition>
                  <p className="exclusive">
                    You are licensed to use the item available at any free source
                    sites, for your project developement
                  </p>
                </Transition>
              </div>
              <Button2 route="/" children="Read More" />
            </div>
          </div>
          <div className="right9">
            <Transition>
              <img loading="lazy" src="/openlock.svg" alt="" className="openlock" />
              <img loading="lazy" src="/secure.svg" alt="" className="secure" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ninth;

import "./eighth.css";
import Line from "../../line/page";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";

const Eighth = () => {
  return (
    <div>
      <div className="wrapper8">
        <div className="header8">
          <Transition>
            <p className="partners">Partners and Sponsors</p>
          </Transition>
          <Transition2>
            <p className="major">
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
            </p>
          </Transition2>
          <Transition2>
            <p className="major2">companies as its partners and sponsors</p>
          </Transition2>
        </div>
        <Transition2>
          <div className="border">
            <div className="flex_cont1">
              <div className="sec1">
                <img src="/Liberty.svg" alt="" />
                <hr className="hr1" />
                <hr className="hr2" />
                <hr className="hr3" />
                <hr className="hr5" />
              </div>
              <div className="sec2">
                <img src="/Libertypay.svg" alt="" />
                <hr className="hr4" />
              </div>
              <div className="sec3">
                <img src="/Winwise.svg" alt="" />
              </div>
            </div>
            <div className="flex_cont2">
              <div className="sec4">
                <img src="/wisper.svg" alt="" />
                <hr className="hr6" />
              </div>
              <div className="sec5">
                <img src="/Paybox.svg" alt="" />
                <hr className="hr7" />
              </div>
              <div className="sec6">
                <img src="/vizual.svg" alt="" />
              </div>
            </div>
          </div>
        </Transition2>
        <Line />
      </div>
    </div>
  );
};
export default Eighth;

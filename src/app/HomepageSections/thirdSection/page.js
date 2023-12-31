import "./third.css";
import Line from "../../line/page";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";

const Third = () => {
  return (
    <div>
      <div className="wrapper2">
        <div className="flex_wrapper2">
          <div className="flex_left">
            <Transition>
              <p className="guide">
                Rules and
                <br />
                <span className="alt_guide">Guidelines</span>
              </p>
            </Transition>
            <Transition2>
              <p className="guide_desc">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're a
                coding genius, a design maverick, or a concept wizard, you'll have
                the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </Transition2>
            <img className="flare3" src="/flare3.svg" alt="" />
            <img className="strL" src="/strL.svg" alt="" />
            <img className="strR" src="/strR.svg" alt="" />
          </div>
          <div className="flex_right">
            <Transition><img className="sit" src="/sitting.svg" alt="" /></Transition>
            <img className="flare4" src="/flare4.svg" alt="" />
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default Third;

import "./second.css";
import Line from "../../line/page";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";

const Second = () => {
  return (
    <div id="overview">
      <div className="wrapper">
        <div className="flex_wrapper">
          <div className="left">
            <Transition>
              <img className="idea" src="/idea.svg" alt="" />
            </Transition>
            <img className="starleft" src="/starleft.svg" alt="" />
            <img className="arrow" src="/arrow.svg" alt="" />
          </div>
          <div className="right" id="overvieww">
            <div className="content">
              <Transition>
                <p className="title">
                  Introduction to getlinked
                  <br />
                  <span>tech Hackathon 1.0</span>
                </p>
              </Transition>
              <Transition2>
                <p className="descriptio">
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether you're
                  a coding genius, a design maverick, or a concept wizard, you'll
                  have the chance to transform your ideas into reality. Solving
                  real-world problems, pushing the boundaries of technology, and
                  creating solutions that can change the world, that's what we're
                  all about!
                </p>
              </Transition2>
            </div>
            <img className="starright" src="/starright.svg" alt="" />
          </div>
        </div>
      </div>

      <Line />
    </div>
  );
};
export default Second;

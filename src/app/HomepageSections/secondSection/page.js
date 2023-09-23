import "./second.css";
import Line from "../../line/page";

const Second = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="flex_wrapper">
          <div className="left">
            <img className="idea" src="/idea.svg" alt="" />
            <img className="starleft" src="/starleft.svg" alt="" />
            <img className="arrow" src="/arrow.svg" alt="" />
          </div>
          <div className="right">
            <div className="content">
              <p className="title">
                Introduction to getlinked
                <br />
                <span>tech Hackathon 1.0</span>
              </p>
              <p className="descriptio">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
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

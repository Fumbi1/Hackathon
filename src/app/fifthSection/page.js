import "./fifth.css";
import Line from "../line/page";

const Fifth = () => {
  return <div>
    <div className="wrap">
        <div className="flex_wrap">
            <div className="left_flex">
                <img className="q0" src="/starright.svg" alt="" />
                <p className="freq">
                Frequently Asked<br/>
                <span className="alt_freq">Questions</span>
                </p>
                <p className="ans">
                We got answers to the questions that you might
                want to ask about <span>getlinked Hackathon 1.0</span>
                </p>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        Can I work on a project I started before the hackathon?
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        What happens if I need help during the hackathon?
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        What happens if I don't have an idea for a project?
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        Can I join a team or do I have to come with one?
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        What happens after the hackathon ends
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>

                <div className="soln">
                    <div className="row">
                        <p className="ques">
                        Can I work on a project I started before the hackathon?
                        </p>
                        <img className="plus" src="/a.svg" alt="" />
                    </div>
                    <hr />
                </div>
            </div>
            <div className="right_flex">
                <img src="/think.svg" alt="" />
                <img className="q1" src="/que.svg" alt="" />
                <img className="q2" src="/que.svg" alt="" />
                <img className="q3" src="/que.svg" alt="" />
                <img className="q4" src="/starright.svg" alt="" />
                <img className="q5" src="/starright.svg" alt="" />
                <img className="q6" src="/strL.svg" alt="" />
                <img className="q7" src="/strR.svg" alt="" />
            </div>
        </div>
    </div>
    <Line/>
  </div>;
};
export default Fifth;

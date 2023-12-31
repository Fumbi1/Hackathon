import "./fourth.css";
import Button2 from "../../button2/page";
import Line from "../../line/page";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";
const Fourth = () => {
  return (
    <div>
      <div className="wrapper3">
        <div className="flex_wrapper3">
          <div className="flex3_left">
            <Transition><img loading="lazy" className="svg_1" src="/analysis.svg" alt="" /></Transition>
            <img className="svg_2" src="/starright.svg" alt="" />
            <img className="svg_3" src="/strL.svg" alt="" />
            <img className="svg_4" src="/strR.svg" alt="" />
            <img className="svg_5" src="/ellipse.svg" alt="" />
          </div>
          <div className="flex3_right">
            <Transition>
              <p className="header">
                Judging Criteria
                <br />
                <span className="alt_header">Key attributes</span>
              </p>
            </Transition>
            <Transition>
              <p className="body">
                <span className="alt">Innovation and Creativity:</span> Evaluate
                the uniqueness and creativity of the solution. Consider whether it
                addresses a real-world problem in a novel way or introduces
                innovative features.
              </p>
            </Transition>
            <Transition2>
              <p className="body">
                <span className="alt">Functionality:</span> Assess how well the
                solution works. Does it perform its intended functions effectively
                and without major issues? Judges would consider the completeness
                and robustness of the solution.
              </p>
            </Transition2>
            <Transition>
              <p className="body">
                <span className="alt">Impact and Relevance:</span> Determine the
                potential impact of the solution in the real world. Does it
                address a significant problem, and is it relevant to the target
                audience? Judges would assess the potential social, economic, or
                environmental benefits.
              </p>
            </Transition>
            <Transition2>
              <p className="body">
                <span className="alt">Technical Complexity:</span> Evaluate the
                technical sophistication of the solution. Judges would consider
                the complexity of the code, the use of advanced technologies or
                algorithms, and the scalability of the solution.
              </p>
            </Transition2>
            <Transition>
              <p className="body2">
                <span className="alt">Adherence to Hackathon Rules:</span> Judges
                will Ensure that the team adhered to the rules and guidelines of
                the hackathon, including deadlines, use of specific technologies
                or APIs, and any other competition-specific requirements.
              </p>
            </Transition>

            <Button2 children="Read More" route="/" />
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};
export default Fourth;

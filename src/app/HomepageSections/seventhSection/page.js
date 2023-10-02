import "./seventh.css";
import Transition from "@/app/Transitions/Transition/page";
import Transition2 from "@/app/Transitions/Transition2/page";

const Seventh = () => {
  return <div>
    <div className="wrapper7">
        <div>
            <div className="gift">
                <Transition>
                    <p className="prizes">Prizes and</p>
                </Transition>
                <Transition>
                    <p className="rewards">Rewards</p>
                </Transition>
                <Transition2>
                    <p className="highlights">Highlights of the prizes or reward for winners and for participants.</p>
                </Transition2>
            </div>
            <div className="flex7">
                <div className="champ_left">
                    <Transition><img loading="lazy" className="trophy" src="/trophy.svg" alt="" /></Transition>
                    <img className="flare7" src="/flare.svg" alt="" />
                </div>
                <div className="champ_right">
                    <img className="shine1" src="/strR.svg" alt="" />
                    <img className="shine2" src="/strR.svg" alt="" />
                    <img className="shine3" src="/strL.svg" alt="" />
                    <div className="firsst">
                            <img className="same" src="/silver.svg" alt="" />
                        <Transition2>
                            <p className="position">2nd</p>
                            <p className="run">Runner</p>
                            <p className="prize">N300,000</p>
                        </Transition2>
                    </div>
                    <div className="second">
                            <img className="diff" src="/gold.svg" alt="" />
                        <Transition>
                            <p className="position">1st</p>
                            <p className="run">Runner</p>
                            <p className="prize">N400,000</p>
                        </Transition>
                    </div>
                    <div className="third">
                            <img className="same" src="/bronze.svg" alt="" />
                        <Transition2>
                            <p className="position">3rd</p>
                            <p className="run">Runner</p>
                            <p className="prize">N150,000</p>
                        </Transition2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};
export default Seventh;

import "./seventh.css";

const Seventh = () => {
  return <div>
    <div className="wrapper7">
        <div>
            <div className="gift">
                <p className="prizes">Prizes and</p>
                <p className="rewards">Rewards</p>
                <p className="highlights">Highlights of the prizes or reward for winners and for participants.</p>
            </div>
            <div className="flex7">
                <div className="champ_left">
                    <img className="trophy" src="/trophy.svg" alt="" />
                    <img className="flare7" src="/flare.svg" alt="" />
                </div>
                <div className="champ_right">
                    <div className="firsst">
                        <img className="same" src="/silver.svg" alt="" />
                        <p className="position">2nd</p>
                        <p className="run">Runner</p>
                        <p className="prize">N300,000</p>
                    </div>
                    <div className="second">
                        <img className="diff" src="/gold.svg" alt="" />
                        <p className="position">1st</p>
                        <p className="run">Runner</p>
                        <p className="prize">N400,000</p>
                    </div>
                    <div className="third">
                        <img className="same" src="/bronze.svg" alt="" />
                        <p className="position">3rd</p>
                        <p className="run">Runner</p>
                        <p className="prize">N150,000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>;
};
export default Seventh;

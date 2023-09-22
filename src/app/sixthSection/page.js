import "./sixth.css";

const Sixth = () => {

    const TimeLine = [
        {
            header1:"Hackathon Announcement",
            desc1:"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
            header2:"November 18, 2023",
            desc2:"",
            num:"1"
        },
        {
            header1:"November 18, 2023",
            desc1:"",
            header2:"Teams Registration begins",
            desc2:"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
            num:"2"
        },
        {
            header1:"Teams Registration ends",
            desc1:"Interested Participants are no longer Allowed to register",
            header2:"November 18, 2023",
            desc2:"",
            num:"3"
        },
        {
            header1:"November 18, 2023",
            desc1:"",
            header2:"Announcement of the accepted teams and ideas",
            desc2:"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
            num:"4"
        },
        {
            header1:"Getlinked Hackathon 1.0 Offically Begins",
            desc1:"Accepted teams can now proceed to build their ground breaking skill driven solutions",
            header2:"November 18, 2023",
            desc2:"",
            num:"5"
        },
        {
            header1:"November 18, 2023",
            desc1:"",
            header2:"Demo Day",
            desc2:"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
            num:"6"
        },
    ]


  return <div>
    <div className="wrapp">

        <p className="timee">Timeline</p>
        <p className="t_desc">Here is the breakdown of the time we anticipate </p>
        <p className="t_desc2">using for the upcoming event.</p>
        {TimeLine.map((item, index) => {
            return (
            <div className="flex_wrapp" key={index}>
                <div className="label_div">
                    <hr className="linee"/>
                    <div className="circle">
                        <p className="num">{item.num}</p>
                    </div>
                </div>
                <div className={item.desc2 == ""? "flex_div" : "flex_div2"}>
                    <div className="side_left">
                        <p className="header1">
                            {item.header1}
                        </p>
                        <p className="desc1">
                            {item.desc1}
                        </p>
                    </div>
                    <div className="side_right">
                        <p className="header2">
                            {item.header2}
                        </p>
                        <p className="desc2">
                            {item.desc2}
                        </p>
                    </div>
                </div>
            </div>
            )
        })}
        <img className="starr1" src="starright.svg" alt="" />
        <img className="starr2" src="strL.svg" alt="" />
        <img className="starr3" src="strR.svg" alt="" />
    </div>
  </div>;
};
export default Sixth;

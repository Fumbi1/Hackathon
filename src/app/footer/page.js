import "./footer.css";
import Logo from "../logo/page";
import Link from "next/link";

const Footer = () => {
  return <div>
    <div className="footer">
        <div className="footer_wrap">
            <div className="left_footer">
                <Logo />
                <p className="tech">
                Getlinked Tech Hackathon is a technology
                innovation program established by a group
                of organizations with the aim of showcasing
                young and talented individuals in the field
                of technology
                </p>
                <div className="term_div">
                    <p className="termss">
                    Terms of Use
                    </p>
                    <hr className="hrr"/> 
                    <p className="termss">
                        Privacy Policy
                    </p>
                </div>
            </div>
            <div className=" middle_footer">
                <p className="useful">Useful Links</p>
                <Link className="footer_links" href="/">Overview</Link>
                <Link className="footer_links" href="/">Timeline</Link>
                <Link className="footer_links" href="/">FAQs</Link>
                <Link className="footer_links" href="/">Register</Link>
                <div className="socials">
                    <p className="useful">Follow Us</p>
                    <img src="/insta.svg" alt="" />
                    <img src="/xx.svg" alt="" />
                    <img src="/face.svg" alt="" />
                    <img src="/linkedin.svg" alt="" />
                </div>
            </div>
            <div className="right_footer">
                <p className="useful">Contact Us</p>
                <div className="socials">
                    <img src="/call.svg" alt="" />
                    <p className="termss">+234 679 81819</p>
                </div>
                <div className="socials2">
                    <img src="/gps.svg" alt="" />
                    <p className="termss">
                    27,Alara Street<br/>
                    Yaba 100012<br/>
                    Lagos State
                    </p>
                </div>
            </div>
        </div>
        <p className="ltd">
            All rights reserved. © getlinked Ltd.
        </p>
    </div>
  </div>;
};
export default Footer;


import "./btn2.css";
import Link from "next/link";
import Transition2 from "../Transitions/Transition2/page";

const Button2 = ({route, children}) => {

  const routex = "/"
  const childrenx = "Register"

  route = route || routex;
  children = children || childrenx;


  return <div>
    <div className="btn_wrapper">
        <Transition2>
          <Link href={route} className="link">{children}</Link>
        </Transition2>
    </div>
  </div>;
};
export default Button2;
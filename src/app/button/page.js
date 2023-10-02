import "./btn.css";
import Link from "next/link";
import Transition2 from "../Transitions/Transition2/page";

const Button = ({ route, closee, children }) => {

  let routex = "/";
  let childrenx = "Register";
  let closeex = null;

  route = route || routex;
  closee = closee || closeex;
  children = children || childrenx

  return (
    <div>
      <div className="btn_wrapper" onClick={closee}>
        <Transition2>
          <Link href={route} className="link">
            {children}
          </Link>
        </Transition2>
      </div>
    </div>
  );
};
export default Button;

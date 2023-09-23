import "./btn2.css";
import Link from "next/link";

const Button2 = ({route, children}) => {
  return <div>
    <div className="btn_wrapper">
        <Link href={route} className="link">{children}</Link>
    </div>
  </div>;
};
export default Button2;
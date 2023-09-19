import "./btn.css";
import Link from "next/link";

const Button = ({route, children}) => {
  return <div>
    <div className="btn_wrapper">
        <Link href={route} className="link">{children}</Link>
    </div>
  </div>;
};
export default Button;


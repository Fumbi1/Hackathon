import "./btn.css";
import Link from "next/link";

const Button = ({route, closee, children}) => {
  return <div>
    <div className="btn_wrapper">
        <Link href={route} onClick={closee} className="link">{children}</Link>
    </div>
  </div>;
};
export default Button;


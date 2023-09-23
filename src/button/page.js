import "./btn.css";
import Link from "next/link";

const Button = ({route, closee, children}) => {

  Button.defaultProps = {
    route: null,
    closee: null,
    children: null,
  };

  return <div>
    <div className="btn_wrapper">
        <Link href={route} onClick={closee} className="link">{children}</Link>
    </div>
  </div>;
};
export default Button;


import "./btn.css";
import Link from "next/link";

const Button = ({ route, closee, children }) => {

  let routex = "/";
  let childrenx = "Register";
  let closeex = null;

  route = route || routex;
  closee = closee || closeex;
  children = children || childrenx

  return (
    <div>
      <div className="btn_wrapper">
        <Link href={route} onClick={closee} className="link">
          {children}
        </Link>
      </div>
    </div>
  );
};
export default Button;

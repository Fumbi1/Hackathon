import "./logo.css";
import Link from "next/link";

const Logo = () => {
  return <div>
    <Link href="/" className="logo">
        get<span className="logo_span">linked</span>
    </Link>
  </div>;
};
export default Logo;

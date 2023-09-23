import "./page.css";
import FirstSection from "./HomepageSections/firstSectio/page";
import Second from "./HomepageSections/secondSection/page";
import Third from "./HomepageSections/thirdSection/page";
import Fourth from "./HomepageSections/fourthSection/page";
import Fifth from "./HomepageSections/fifthSection/page";
import Sixth from "./HomepageSections/sixthSection/page";
import Seventh from "./HomepageSections/seventhSection/page";
import Eighth from "./HomepageSections/eighthSection/page";
import Ninth from "./HomepageSections/ninthSection/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth />
      <Footer />
    </div>
  );
}

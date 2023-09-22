import './page.css';
import FirstSection from './firstSectio/page';
import Second from './secondSection/page';
import Third from './thirdSection/page';
import Fourth from './fourthSection/page';
import Fifth from './fifthSection/page';
import Sixth from './sixthSection/page';
import Seventh from './seventhSection/page';

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
    </div>
  )
}

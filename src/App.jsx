import './App.scss';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {
  Footer,
  Landing,
  Content,
  Features,
  FormComp,
  Testimonial,
  CallToAction,
  Showcase,
  Team,
  Contact,
  PriceTable,
} from './components';

function App() {
  return (
    <div className="wholeApp">
      <main>
        <Landing />
        {/* <Content /> */}
        {/* <Features /> */}
        {/* <FormComp /> */}
        {/* <Testimonial /> */}
        {/* <CallToAction /> */}
        {/* <Showcase /> */}
        {/* <Team /> */}
        {/* <Contact /> */}
        {/* <PriceTable /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

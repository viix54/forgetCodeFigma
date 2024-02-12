import './App.scss';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Home, Footer, Landing, Content, Features } from './components';

function App() {
  return (
    <div className="wholeApp">
      <main>
        <Landing />
        <Content />
        <Features />
        {/* <article className="second_article">
          <header>2 ARTICLE</header>
          <h2>Leroudfgjfdklgjfdl ldfk jgdf lkjgdflk jgdf </h2>
        </article>
        <Home /> */}
      </main>
      {/* <footer style={{ border: '1px solid yellow' }}>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;

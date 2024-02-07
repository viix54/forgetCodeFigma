import { useState } from 'react';
import viteLogo from '/vite.svg';
import codingLogo from '/coding.svg';
import './App.css';

import { Home, Navbar, Footer } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wholeApp">
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

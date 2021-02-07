import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Page from './Page';


// - - - - - - - - - - - - - - - - - - - - - - - - - - -
// npm i react-router-dom
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// sfc + tab      <--- tworzy komponent funkcyjny


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ZOBACZ PLIK pages/HOOC/UseHistory.js aby zobaczyć useHistory a potem pages/HOOC/UseHistoryBackBtn.js do przycisku do wracania
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">

        <header>
          <Header />
        </header>

        <main>
          <aside>
            <Navigation />
          </aside>

          <section className="page">
            <Page />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
  );
}

export default App;

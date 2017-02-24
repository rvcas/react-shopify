import React from 'react';
import Helmet from 'react-helmet';

import NavBar from '../NavBar';
import Footer from '../../components/Footer';

import "./styles.css";

const App = ({ children, location }) => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - HHS"
      defaultTitle="HHS"
      meta={[
        { name: 'Shop at HHS', content: 'clothes' },
      ]} />
    { location.pathname === "/" ? null : <NavBar /> }

    <main className="main-wrapper">
      {React.Children.toArray(children)}
    </main>

    { location.pathname === "/" ? null : <Footer /> }
  </div>
);

export default App;

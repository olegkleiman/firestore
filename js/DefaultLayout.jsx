import React from 'react';

import MiniMap from './MiniMap.jsx';
import Dashboard from './Dashboard.jsx';
import Categories from './Categories.jsx';
import Footer from './Footer.jsx';

class DefaultLayout extends React.Component {

  render() { return(
      <main className='mdl-layout__content'>
        <MiniMap />
        <Dashboard  {...this.props}/>
        <Categories />
        <Footer />
      </main>);
  }

};

export default DefaultLayout;

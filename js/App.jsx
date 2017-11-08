import React from 'react';
import {render} from 'react-dom';

import Header from './Header.jsx';
import Navigator from './Navigator.jsx';
import Categories from './Categories.jsx';
import MiniMap from './MiniMap.jsx';
import Dashboard from './Dashboard.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  // statc propTypes = {
  //   children: React.PropTypes.object,
  // };

 render() {
       return(<div className='mdl-layout mdl-js-layout'>
                 <Header />
                 <Navigator />
                 {this.props.children}
              </div>);
 };

};

export default App;

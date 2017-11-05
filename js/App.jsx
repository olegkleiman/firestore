import React from 'react';
import {render} from 'react-dom';

import Header from '../js/Header.jsx';
import Categories from '../js/Categories.jsx';
import MiniMap from '../js/MiniMap.jsx';

class App extends React.Component {

  constructor(props){
    super(props);
  }

 render() {
       return(<div>
                <Header />
                <MiniMap />
                <Categories />
               </div>);
 };
};

export default App;

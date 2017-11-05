import React from 'react';
import {render} from 'react-dom';

import Categories from '../js/Categories.jsx';
import MiniMap from '../js/MiniMap.jsx';

class App extends React.Component {

  constructor(props){
    super(props);
  }

 render() {
       return(<div>
                 <MiniMap />
                 <Categories />
               </div>);
 };
};

export default App;

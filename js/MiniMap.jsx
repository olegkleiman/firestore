import React from 'react';

import styles from '../css/minimap.css'
import Markers from '../js/Markers.jsx';

class MiniMap extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    const mapClassName = styles.mapimage;
    //console.log(mapClassName);
    return (<div className={mapClassName}>
              <Markers />
            </div>)
  }

};

export default MiniMap;

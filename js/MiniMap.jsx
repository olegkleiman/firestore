import React from 'react';
import { injectIntl } from 'react-intl';

import styles from '../css/minimap.css'
import Markers from '../js/Markers.jsx';

class MiniMap extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    const mapClassName = styles.mapimage;
    //console.log(beta);

    return (<div className={mapClassName}>
              <span className={styles.beta}>{this.props.intl.messages.beta}</span>
              <Markers />
            </div>)
  }

};

export default injectIntl(MiniMap);

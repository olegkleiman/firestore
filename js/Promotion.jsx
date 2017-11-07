import React from 'react';
import styles from '../css/promotion.css'

class Promotion extends React.Component {

  render() {

    return (<div className={styles.item + ' mdl-grid mdl-cell mdl-cell--12-col'}
                  role='button' tabIndex='0'>
                  <div className={styles.itemText + ' mdl-cell mdl-cell--10-col-desktop mdl-cell--3-col-phone mdl-cell--stretch mdl-cell--middle'}>
                    {this.props.name}
                  </div>
                  <div className={styles.itemImage + ' mdl-cell mdl-cell--2-col-desktop mdl-cell--1-col-phone mdl-cell--stretch mdl-cell--middle'}>
                  </div>
            </div>);
  }

};

export default Promotion;

import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

import styles from '../css/dashboard.css';

import Promotion from './Promotion.jsx';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='mdl-grid mdl-grid--no-spacing'>
              <div className='mdl-cell mdl-cell--8-col'>
                <div className='mdl-grid'>
                  <h1 className={styles.title + ' mdl-cell mdl-cell--12-col'}>{this.props.intl.messages.welcome}</h1>
                  <div className={styles.text + ' mdl-cell mdl-cell--6-col'}>
                    <b>dfsafdsafdsf</b>
                  </div>
                  <div className={styles.text + ' mdl-cell mdl-cell--6-col'}>
                    dfdsfds
                  </div>
                  <br />
                  <div>
                    fgfd@me
                  </div>
                  <br />
                </div>
              </div>
              <div className='mdl-cell mdl-cell--stretch mdl-cell--4-col mdl-cell--12-col-tablet'>
                <div className='mdl-grid'>
                  <div className={styles.band}>
                    <h2 className={styles.caption + 'mdl-cell mdl-cell--12-col'}>{this.props.intl.messages.popularDatasets}</h2>
                    {this.props.promotions.map( (promo, index) => {
                        return <Promotion key={index} name={promo.name} {...this.props} />
                      })}
                  </div>
                </div>
              </div>
            </div>);
  }

};

const mapStateToProps = state => {

  return {
    promotions: (state) ? state.promotions : ''
  };
};

export default connect(mapStateToProps)(injectIntl(Dashboard));

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
                  <h1>{this.props.intl.messages.welcome}</h1>
                </div>
              </div>
              <div className='mdl-cell mdl-cell--stretch mdl-cell--4-col mdl-cell--12-col-tablet'>
                <div className='mdl-grid'>
                  <div className={styles.band}>
                    <h2 className='mdl-cell mdl-cell--12-col'>{this.props.intl.messages.popularDatasets}</h2>
                    {this.props.promotions.map( (promo, index) => {
                        return <Promotion key={index} name={promo.name} />
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

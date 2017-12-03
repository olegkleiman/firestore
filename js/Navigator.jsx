import React from 'react';
import { injectIntl } from 'react-intl';

import styles from '../css/navigator.css';

class Navigator extends React.Component {

  render() {

    return (<nav className='mdl-layout__drawer'>
              <h2 className='mdl-layout-title'>
                <div className='mdl-grid'>
                  <div className='mdl-cell mdl-cell--9-col-desktop mdl-cell--3-col-phone'>
                    TLV OpenData
                  </div>
                  <div className='mdl-cell mdl-cell--3-col-desktop mdl-cell--1-col-phone'>
                    <button className='mdl-button'>
                      <i className='material-icons'>close</i>
                    </button>
                  </div>
                </div>
              </h2>
              <ul>
                <li className='mdl-navigation'>
                  <a className={styles.button + 'mdl-navigation__link mdl-textfield'} href='#/'>
                    <i className='material-icons' aria-hidden='true'>{this.props.intl.messages.home}</i>
                    <span>{this.props.intl.messages.home}</span>
                  </a>
                </li>
                <li className='mdl-navigation'>
                  <a className={styles.button + 'mdl-navigation__link mdl-textfield'}>
                    <i className='material-icons' aria-hidden='true'>{this.props.intl.messages.allDatasets}</i>
                    <span>{this.props.intl.messages.allDatasets}</span>
                  </a>
                </li>
                <li className='mdl-navigation'>
                  <a className={styles.button + 'mdl-navigation__link mdl-textfield'}>
                    <i className='material-icons' aria-hidden='true'>{this.props.intl.messages.faq}</i>
                    <span>{this.props.intl.messages.faq}</span>
                  </a>
                </li>
                <li className='mdl-navigation'>
                  <a className={styles.button + 'mdl-navigation__link mdl-textfield'}>
                    <i className='material-icons' aria-hidden='true'>{this.props.intl.messages.developers}</i>
                    <span>{this.props.intl.messages.developers}</span>
                  </a>
                </li>
              </ul>
            </nav>);

  };

};

export default injectIntl(Navigator);

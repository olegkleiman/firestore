import React from 'react';
import { render } from 'react-dom';
import { injectIntl } from 'react-intl';

import styles from '../css/header.css'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
              <header id="app_header" className={styles.headerWaterfall + ' mdl-layout__header mdl-layout__header--scroll'}
                      aria-haspopup="true" aria-label={this.props.intl.messages.main_menu}>
                  <div className='mdl-layout__header-row'>
                      {/* Title */}
                      <span className='mdl-layout-title' role='banner'>
                        <a href="#/" className={styles.odsCaption}>TLV OpenData</a>
                      </span>

                      <div className='mdl-layout-spaces'></div>
                      <div className='mdl-layout-spaces'></div>
                      <div className='mdl-layout-spaces'></div>

                      <a className={styles.headerButton} href="/?lang=en">
                        {this.props.intl.messages.language}
                      </a>

                  </div>
              </header>
            </div>);
  }

};

export default injectIntl(Header);

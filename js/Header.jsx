import React from 'react';
import { render } from 'react-dom';
import { injectIntl } from 'react-intl';

import styles from '../css/header.css'

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const locale = '/?lang=' + this.props.intl.messages.alt_language;

    return (<header id="app_header" className={styles.headerWaterfall + ' mdl-layout__header mdl-layout__header--scroll'}
                      aria-haspopup="true" aria-label={this.props.intl.messages.main_menu}>
                  <div className='mdl-layout__header-row'>
                      {/* Title */}
                      <span className='mdl-layout-title' role='banner'>
                        <a href="#/" className={styles.headerCaption}>TLV OpenData</a>
                      </span>

                      <div className='mdl-layout-spaces'></div>
                      <div className='mdl-layout-spaces'></div>
                      <div className='mdl-layout-spaces'></div>

                      <div className='mdh-expandable-search mdl-cell--hide-desktop mdl-cell--hide-tablet'>
                        <i className={styles.white + 'material-icons'}>
                          search
                        </i>
                      </div>

                      <a className={styles.headerButton} href={locale}>
                        {this.props.intl.messages.language}
                      </a>

                  </div>

                  <div className='mdl-layout__header-row mdl-cell--hide-desktop mdl-cell--hide-tablet'>
                    <div className='mdh-expandable-search'>
                        <input id='mobileSearchBox' />
                    </div>
                  </div>
              </header>
            );
  }

};

export default injectIntl(Header);

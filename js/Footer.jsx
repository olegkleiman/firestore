import React from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';

import styles from '../css/footer.css'
let cx = classNames.bind(styles);

class Footer extends React.Component {

  render() {

    const isHebrewLocale = this.props.intl.locale === 'he' ? true : false;

    let backgroundClassName = cx({
      heBackground: isHebrewLocale,
      enBackground: !isHebrewLocale
    });
    let copyrightClassName = cx({
      heCopyright: isHebrewLocale,
      enCopyright: !isHebrewLocale
    });

    return (<footer role='contentinfo'>
              <div className={backgroundClassName}>
              </div>
              <div className={copyrightClassName}>
              </div>
            </footer>);
  };

};

export default injectIntl(Footer);

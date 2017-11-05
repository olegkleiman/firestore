import React from 'react';
import { injectIntl } from 'react-intl';

class Marker extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (<div>
            {this.props.text}
            </div>);
  };

};

export default injectIntl(Marker);

import React from 'react';
import { connect } from 'react-redux';

import Category from '../js/Category.jsx';

class Categories extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
      bandStyle : {
        backgroundColor: '#ECECEC',
        paddingRight: '20px'
      }
    }
  };

  componentDidCatch(error, info) {
    console.log(error);
  };

  componentWillReceiveProps(nextProps) {
    console.log('CWP: ' + nextProps);
  };

  render() {
    return (<div>
              <div className='mdl-grid' style={this.styles.bandStyle}>
              {this.props.categories.map( (category, index) => {
                return <Category key={index} {...category} />
              })}
              </div>
            </div>);
  };
};

const mapStateToProps = state => {

  return {
    categories: (state) ? state.categories : ''
  };
};

export default connect(mapStateToProps)(Categories);

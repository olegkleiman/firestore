import React from 'react';
import { connect } from 'react-redux';
import Marker from '../js/Marker.jsx'

class Markers extends React.Component {

  constructor(props) {

    super(props);

  };

  componentDidCatch(error, info) {
    console.log(error);
  };

  render() {
    return(<div>
          {this.props.markers.map( (marker, index) => {
              return <Marker key={index} {...marker} />
            })}
          </div>)
  };

};

const mapStateToProps = state => {

  return {
    markers: (state) ? state.markers : ''
  };
};

export default connect(mapStateToProps)(Markers);

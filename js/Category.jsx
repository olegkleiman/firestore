import React from 'react';
import { connect } from 'react-redux';

class Category extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
      imageStyle: {
        color: 'blue',
        height: '57px'
      },
      descriptionStyle: {
        color: '#444',
        fontSize: '20px'
      }
    };

    this.categorySelected = this.categorySelected.bind(this);
  };

  categorySelected() {
      console.log('Category selected: ' + this.props.id);
      this.props.dispatch({
        type: 'CATEGORY_CHANGED',
        data: this.props.id
      });
  };

  render() {

    let imageUrl = this.props.card_image;
    this.styles.imageStyle.background = 'url(../' + imageUrl + ') center no-repeat';

    return (<div onClick={this.categorySelected} className='mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-phone'>
              <div className='mdl-cell mdl-cell--9-col-desktop mdl-cell--3-col-phone'>
                <h3 className='k-category'>{this.props.name.he}</h3>
              </div>
            </div>);
  }

};

export default connect()(Category);

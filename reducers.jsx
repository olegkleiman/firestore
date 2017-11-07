import _ from 'lodash'

const update = (state, mutations) => {
  _.assign({}, state, mutations);
};

const INITIAL_STATE = {
  categories: [],
  markers: [],
  promotions: [],
  selectedCategory: 0
};

const reducers = (state = INITIAL_STATE, action) => {

  //console.log('Reducer: ' + action.type + ' Data: ' + action.data);

  switch( action.type ) {
    case 'CATEGORIES_INIT':
      return {
          ...state,
          categories: state.categories.concat(action.data)
      };

    case 'MARKERS_INIT':
      return {
          ...state,
          markers: state.markers.concat(action.data)
      };

    case 'PROMOTIONS_INIT':
      return {
        ...state,
        promotions: state.promotions.concat(action.data)
      };

    case 'CATEGORY_CHANGED':
      //state = update(state, {selectedCategory: action.data} );
      state = _.assign({}, state, {selectedCategory: action.data});
      break;

    default:
      break;
  };

  return state;

};

export default reducers;

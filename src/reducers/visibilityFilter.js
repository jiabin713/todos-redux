import {
  SET_VISIBILITY_FILTER,
} from '../actions/actionTypes';

import {
  VisibilityFilters
} from '../actions';

const visibilityFilter = (state=VisibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;

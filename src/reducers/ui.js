
import { fromJS } from "immutable";
import { SET_LOADING } from "../action/types";

const initialState = fromJS({
  loading: false,
});

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING:
      return state.setIn(['loading'], action.payload)
    default:
      return state
  }
}

export { uiReducer };

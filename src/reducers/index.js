import {combineReducers} from 'redux';
// library ini digunakan untuk redux form
// import {reducer as formReducer} from 'redux-form';
import { regist} from "./regist"
const allReducers = combineReducers({
  regist
  // form: formReducer,
});
export default allReducers;

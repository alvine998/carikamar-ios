import {all, fork} from 'redux-saga/effects';
import {watchRegist} from './regist'
export default function* sagas() {
  yield all([
    fork(watchRegist),
  ]);
}
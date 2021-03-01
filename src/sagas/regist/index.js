import {takeLatest, put} from 'redux-saga/effects';
import {REGIST_ERROR, REGIST_PROCESS, REGIST_SUCCESS} from '../../actions'
import {API_URL} from '../../utils/constant'
import {filterFetch, filterFetchTest} from '../../utils/apiFetch'

function* regist(action) {
  console.log("action from sagas " , action)
  try {
    const result = yield filterFetch(API_URL + 'registrasi', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // 'x-api-key': API_KEY,
      },
      // timeout: API_TIMEOUT,
      body: JSON.stringify(action.data),
    });
    yield put({
      type: REGIST_SUCCESS,
      result: result,
    });
    console.log(" result " , result);
  } catch (error) {
    console.log(" error " , error);
    yield put({
      type: REGIST_ERROR,
      error: error,
    });
  }
}

export function* watchRegist() {
  yield takeLatest(REGIST_PROCESS, regist);
}
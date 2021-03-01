export const REGIST_PROCESS = 'REGIST_PROCESS';
export const REGIST_SUCCESS = 'REGIST_SUCCESS';
export const REGIST_ERROR = 'REGIST_ERROR';

export function regist(data) {
  return  {
    type: REGIST_PROCESS,
    data: data,
  }
}
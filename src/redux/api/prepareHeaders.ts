import {BaseQueryApi} from '@reduxjs/toolkit/query';
import {RootState} from '..';

export const prepareHeaders = (
  headers: Headers,
  {getState}: Pick<BaseQueryApi, 'getState'>,
) => {
  const {userToken} = getState() as RootState;
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Accept', 'application/json');
  if (userToken.userToken?.token) {
    headers.set('Authorization', userToken.userToken.token);
  }

  return headers;
};

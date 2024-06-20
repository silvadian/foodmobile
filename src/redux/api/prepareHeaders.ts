import {BaseQueryApi} from '@reduxjs/toolkit/query';
import {RootState} from '..';

export const prepareHeaders = (
  headers: Headers,
  {getState}: Pick<BaseQueryApi, 'getState'>,
) => {
  const {user} = getState() as RootState;
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Accept', 'application/json');
  if (user.userToken?.token) {
    headers.set('Authorization', user.userToken.token);
  }

  return headers;
};

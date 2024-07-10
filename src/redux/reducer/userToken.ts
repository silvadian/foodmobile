import {createSlice} from '@reduxjs/toolkit';
import {userApi} from '../api/userApi';

interface UserTokenSlice {
  userToken: {
    token?: string;
    refreshToken?: string;
    isLogin: boolean;
  };
}

const initialState: UserTokenSlice = {
  userToken: {
    token: undefined,
    refreshToken: undefined,
    isLogin: false,
  },
};

const userTokenSlice = createSlice({
  name: 'userTokenSlice',
  initialState,
  reducers: {
    clearUserToken: state => {
      state.userToken = initialState.userToken;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.userToken.token = action.payload.data.token;
        state.userToken.refreshToken = action.payload.data.refresh_token;
        state.userToken.isLogin = true;
      },
    );
  },
});

export const {clearUserToken} = userTokenSlice.actions;
export default userTokenSlice.reducer;

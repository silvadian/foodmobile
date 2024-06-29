import {createSlice} from '@reduxjs/toolkit';
import {userApi} from '../api/userApi';

interface UserTokenSlice {
  userToken: {
    token?: string;
    refreshToken?: string;
  };
}

const initialState: UserTokenSlice = {
  userToken: {
    token: undefined,
    refreshToken: undefined,
  },
};

const userTokenSlice = createSlice({
  name: 'userTokenSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.userToken.token = action.payload.data.token;
        state.userToken.refreshToken = action.payload.data.refresh_token;
      },
    );
  },
});

export default userTokenSlice.reducer;

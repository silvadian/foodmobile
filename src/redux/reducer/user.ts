import {createSlice} from '@reduxjs/toolkit';
import {userApi} from '../api/userApi';

interface UserSlice {
  userToken: {
    token?: string;
    refreshToken?: string;
  };
}

const initialState: UserSlice = {
  userToken: {
    token: undefined,
    refreshToken: undefined,
  },
};

const userSlice = createSlice({
  name: 'user',
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

export default userSlice.reducer;

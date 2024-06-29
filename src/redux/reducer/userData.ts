import {createSlice} from '@reduxjs/toolkit';
import {userApi} from '../api/userApi';
import {UserData} from '../../utils';

interface UserDataSlice {
  userData: UserData;
}

const initialState: UserDataSlice = {
  userData: {
    avatar: '',
    email: '',
    full_name: '',
    id: 0,
    rules: 'user',
    address: {
      address: '',
      city: '',
      createdAt: new Date(),
      house_number: '',
      id: 0,
      phone: '',
      updatedAt: new Date(),
      user_id: 0,
    },
  },
};

const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.userData.id = action.payload.data.id;
        state.userData.email = action.payload.data.email;
        state.userData.rules = action.payload.data.rules;
        state.userData.avatar = action.payload.data.avatar;
        state.userData.full_name = action.payload.data.full_name;
        state.userData.address = action.payload.data.address;
      },
    );
  },
});

export default userDataSlice.reducer;

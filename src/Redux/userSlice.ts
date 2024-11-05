import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDetails {
  _id: string;
  username: string;
  email: string;
  role: string;
  membership: boolean;
}

interface UserState {
  userData: UserDetails | null;
  token: string | null;
}

const initialState: UserState = {
  userData: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<{ userData: UserDetails; token: string }>
    ) => {
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
    clearUserData: (state) => {
      state.userData = null;
      state.token = null;
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;

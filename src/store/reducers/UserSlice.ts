import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'

interface UserState {
  users: IUser[]
  isLoading: boolean
  error: string
  count: number
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    usersFetching(state) {
      state.isLoading = true
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false
      state.error = ''
      state.users = action.payload
    },
    usersFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default userSlice.reducer

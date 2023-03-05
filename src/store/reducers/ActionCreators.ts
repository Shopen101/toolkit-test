import axios from 'axios'
import { IUser } from '../../models/IUser'
import { AppDispatch } from '../store'
import { userSlice } from './UserSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching())
    const response = await axios.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users',
    )
    dispatch(userSlice.actions.usersFetchingSuccess(response.data))
  } catch (error) {
    dispatch(userSlice.actions.usersFetchingError((error as Error).message))
  }
}

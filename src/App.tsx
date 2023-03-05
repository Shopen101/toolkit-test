import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'
import { userSlice } from './store/reducers/UserSlice'

function App() {
  const dispatch = useAppDispatch()
  const { increment } = userSlice.actions
  const { count, users, isLoading, error } = useAppSelector(
    state => state.userReducer,
  )

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default App

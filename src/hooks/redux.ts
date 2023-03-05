import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>() // typed dispatch can't dispatch actions we didn't created
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // this hook can give typed selector & autocomplete in IDE

import { combineReducers } from '@reduxjs/toolkit'
import tasks from './tasksSlice'

const rootReducer = combineReducers({tasks})
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TasksType, getTasks } from '../data'
import { AppThunk } from './configureStore'

interface TasksStateProps {
  data: TasksType
  isFetching: boolean
  error: undefined | Error
}

const initialState = {
  data: [],
  isFetching: true,
  error: undefined,
} as TasksStateProps

const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    fetchStart: state => ({
      data: [],
      isFetching: true,
      error: undefined,
    }),
    fetchSuccess: (state, action: PayloadAction<TasksType>) => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    fetchFailure: (state, action: PayloadAction<Error>) => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    addTask: (state, action: PayloadAction<string>) => ({
      ...state,
      data: [
        { description: action.payload, isComplete: false, id: `${state.data.length + 1}` },
        ...state.data,
      ],
    }),
    completeTask: (state, action: PayloadAction<string>) => ({
      ...state,
      data: state.data.map(task => {
        if (task.id !== action.payload) return task
        return { ...task, isComplete: !task.isComplete }
      }),
    }),
  },
})

export const { fetchStart, fetchSuccess, fetchFailure, addTask, completeTask } = tasks.actions

export default tasks.reducer

export const fetchTasks = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchStart())
    const tasks = await getTasks('fakeurl')
    dispatch(fetchSuccess(tasks))
  } catch (err) {
    dispatch(fetchFailure(err))
  }
}

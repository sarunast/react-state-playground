import React, { createContext, useCallback, useEffect, useReducer } from 'react'

import { TasksType } from '../data'
import useDataApi from './useDataApi'
import taskReducer, { addTaskAction, completeTaskAction, iniTasksAction } from './taskReducer'

interface TasksContextProps {
  tasks: TasksType,
  isLoading: boolean,
  error: undefined | Error
  addNewTask: (taskDescription: string) => void
  toggleIsComplete: (id: string) => void
}

export const TaskContext = createContext<TasksContextProps>({
  isLoading: false,
  error: undefined,
  tasks: [] as TasksType,
} as TasksContextProps)

const TaskProvider: React.FC = ({ children }) => {
  const [{ data, isLoading, error }] = useDataApi<TasksType>('http://fakeurl.com', [])
  const [tasks, dispatch] = useReducer(taskReducer, [])

  useEffect(() => {
    if (data) {
      dispatch(iniTasksAction(data))
    }
  }, [data, dispatch])

  const toggleIsComplete = useCallback(
    (id: string) => {
      dispatch(completeTaskAction(id))
    },
    [dispatch],
  )

  const addNewTask = useCallback(
    (taskDescription: string) => {
      dispatch(addTaskAction({ isComplete: false, description: taskDescription }))
    },
    [dispatch],
  )

  return (
    <TaskContext.Provider value={{ tasks, addNewTask, toggleIsComplete, isLoading, error }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider

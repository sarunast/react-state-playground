import React, { useCallback, useEffect, useReducer } from 'react'
import { TasksType } from '../data'
import ListTasks from './ListTasks'
import useDataApi from './useDataApi'
import NewTask from './NewTask'
import taskReducer, {
  addTaskAction,
  completeTaskAction,
  iniTasksAction,
} from './taskReducer'

const Example3 = () => {
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

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <NewTask addNewTask={addNewTask} />
      <ListTasks tasks={tasks} onComplete={toggleIsComplete} />
    </div>
  )
}

export default Example3

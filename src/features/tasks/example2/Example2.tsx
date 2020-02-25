import React, { useEffect, useState } from 'react'
import { TasksType } from '../data'
import ListTasks from './ListTasks'
import useDataApi from './useDataApi'
import NewTask from './NewTask'

const Example2 = () => {
  const [{ data, isLoading, error }] = useDataApi('http://fakeurl.com', [] as TasksType)
  const [tasks, setTasks] = useState<TasksType>([])

  useEffect(() => {
    if (data) {
      setTasks(data)
    }
  }, [data])

  const toggleIsComplete = (id: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id !== id) return task
        return { ...task, isComplete: !task.isComplete }
      }),
    )
  }

  const addNewTask = (taskDescription: string) => {
    setTasks([{ id: `${tasks.length + 1}`, isComplete: false, description: taskDescription }, ...tasks])
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <NewTask addNewTask={addNewTask} />
      <ListTasks tasks={tasks} toggleIsComplete={toggleIsComplete} />
    </>
  )
}

export default Example2

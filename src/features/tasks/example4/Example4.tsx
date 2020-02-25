import React, { useContext } from 'react'

import ListTasks from './ListTasks'
import NewTask from './NewTask'
import { TaskContext } from './TasksContext'

const Example4 = () => {
  const { error, isLoading } = useContext(TaskContext);

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <NewTask />
      <ListTasks />
    </div>
  )
}

export default Example4

import React from 'react'

import Task from './Task'
import { useSelector } from 'react-redux'
import { RootState } from './rootReducer'

const ListTasks: React.FC = () => {
  const tasks = useSelector(
    (state: RootState) => state.tasks.data
  )

  return (
    <section>
      <h2>Tasks {tasks.length}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  )
}

export default ListTasks

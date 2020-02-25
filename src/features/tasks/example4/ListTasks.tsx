import React, { useContext } from 'react'

import Task from './Task'
import { TaskContext } from './TasksContext'

const ListTasks: React.FC = () => {
  const { tasks } = useContext(TaskContext)

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

import React from 'react'
import { TasksType } from '../data'
import Task from './Task'

interface Props {
  tasks: TasksType
  toggleIsComplete: (id: string) => void
}

const ListTasks: React.FC<Props> = ({ tasks = [], toggleIsComplete }) => {
  return (
    <>
      <h2>Tasks {tasks.length}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} toggleIsComplete={toggleIsComplete} />
      ))}
    </>
  )
}

export default ListTasks

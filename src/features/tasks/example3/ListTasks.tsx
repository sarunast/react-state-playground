import React from 'react'
import { TasksType } from '../data'
import Task from './Task'

interface Props {
  tasks: TasksType
  onComplete: (id: string) => void
}

const ListTasks: React.FC<Props> = ({ tasks = [], onComplete }) => {
  return (
    <section>
      <h2>Tasks {tasks.length}</h2>
      {tasks.map(task => (
        <Task key={task.id} task={task} onComplete={onComplete} />
      ))}
    </section>
  )
}

export default ListTasks

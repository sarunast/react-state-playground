import React from 'react'
import { TasksType } from '../data'

interface Props {
  task: TasksType[0],
  toggleIsComplete: (id: string) => void
}

const Task: React.FC<Props> = ({ task, toggleIsComplete}) => {
  return (
    <div key={task.id}>
      <h4>
        {task.description}{' '}
        <input
          name="isComplete"
          type="checkbox"
          checked={task.isComplete}
          onChange={() => toggleIsComplete(task.id)}
        />
      </h4>
    </div>
  )
}

export default Task

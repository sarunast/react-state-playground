import React, { memo } from 'react'
import { TasksType } from '../data'

interface Props {
  task: TasksType[0]
  onComplete: (id: string) => void
}

const Task: React.FC<Props> = ({ task, onComplete }) => {
  console.log('Rendering Task', task.id);

  return (
    <h4>
      {task.description}{' '}
      <input
        name="isComplete"
        type="checkbox"
        checked={task.isComplete}
        onChange={() => onComplete(task.id)}
      />
    </h4>
  )
}

export default memo(Task)

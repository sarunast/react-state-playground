import React, { memo, useContext } from 'react'

import { TasksType } from '../data'
import { TaskContext } from './TasksContext'

interface Props {
  task: TasksType[0]
}

const Task: React.FC<Props> = ({ task }) => {
  const { toggleIsComplete } = useContext(TaskContext);
  console.log('Rendering Task', task.id);

  return (
    <h4>
      {task.description}{' '}
      <input
        name="isComplete"
        type="checkbox"
        checked={task.isComplete}
        onChange={() => toggleIsComplete(task.id)}
      />
    </h4>
  )
}

export default memo(Task)

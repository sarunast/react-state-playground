import React, { memo } from 'react'

import { TasksType } from '../data'
import { useDispatch } from 'react-redux'
import { completeTask } from './tasksSlice'

interface Props {
  task: TasksType[0]
}

const Task: React.FC<Props> = ({ task }) => {
  const dispatch = useDispatch()
  console.log('Rendering Task', task.id);

  return (
    <h4>
      {task.description}{' '}
      <input
        name="isComplete"
        type="checkbox"
        checked={task.isComplete}
        onChange={() => dispatch(completeTask(task.id))}
      />
    </h4>
  )
}

export default memo(Task)

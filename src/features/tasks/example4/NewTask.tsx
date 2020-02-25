import React, { memo, useCallback, useState } from 'react'
import { TaskContext } from './TasksContext'

const NewTask: React.FC = () => {
  const { addNewTask } = React.useContext(TaskContext);
  const [input, setInput] = useState('')

  console.log('Rendering New Task component');

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    [setInput],
  )

  const handleButton = () => {
    addNewTask(input)
    setInput('')
  }

  return (
    <div>
      <input value={input} onChange={handleInput} />
      <button onClick={handleButton}>Add</button>
    </div>
  )
}

export default memo(NewTask)

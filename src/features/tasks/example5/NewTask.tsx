import React, { memo, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTask } from './tasksSlice'

const NewTask: React.FC = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  console.log('Rendering New Task component');

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    [setInput],
  )

  const handleButton = () => {
    dispatch(addTask(input))
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

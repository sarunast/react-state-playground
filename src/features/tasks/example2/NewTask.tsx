import React, { useCallback, useState } from 'react'

interface Props {
  addNewTask: (taskDescription: string) => void
}

const NewTask: React.FC<Props> = ({ addNewTask }) => {
  const [input, setInput] = useState('')

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
    <>
      <input value={input} onChange={handleInput} />
      <button onClick={handleButton}>Add</button>
    </>
  )
}

export default NewTask

import React, { useCallback, useEffect, useState } from 'react'
import { getTasks, TasksType } from '../data'

const Example1 = () => {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState<TasksType>([])

  useEffect(() => {
    let didCancel = false

    async function fetchData() {
      setError(undefined)
      setLoading(true)

      try {
        const tasks = await getTasks('fakeUrl')
        if (!didCancel) {
          setTasks(tasks)
        }
      } catch (e) {
        if (!didCancel) {
          setError(e)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => {
      didCancel = true
    }
  }, [])

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    },
    [setInput],
  )

  const toggleCheckbox = (id: string) => {
    setTasks(
      tasks.map(task => {
        if (task.id !== id) return task
        return { ...task, isComplete: !task.isComplete }
      }),
    )
  }

  const handleButton = () => {
    setTasks([{ id: `${tasks.length + 1}`, isComplete: false, description: input }, ...tasks])
    setInput('')
  }

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <>
      <input value={input} onChange={handleInput} />
      <button onClick={handleButton}>Add</button>
      {tasks.map(task => (
        <div key={task.id}>
          <h4>
            {task.description}{' '}
            <input
              name="isComplete"
              type="checkbox"
              checked={task.isComplete}
              onChange={() => toggleCheckbox(task.id)}
            />
          </h4>
        </div>
      ))}
    </>
  )
}

export default Example1

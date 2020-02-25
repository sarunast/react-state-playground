import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ListTasks from './ListTasks'
import NewTask from './NewTask'
import { fetchTasks } from './tasksSlice'
import { RootState } from './rootReducer'

const Example5 = () => {
  const dispatch = useDispatch()
  const error = useSelector((state: RootState) => state.tasks.error)
  const isLoading = useSelector((state: RootState) => state.tasks.isFetching)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <NewTask />
      <ListTasks />
    </div>
  )
}

export default Example5

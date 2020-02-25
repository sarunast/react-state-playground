import { TasksType } from '../data'

// CONSTS

export const TASK_INIT = 'TASK_INIT'
export const TASK_ADD = 'TASK_ADD'
export const TASK_COMPLETE = 'TASK_COMPLETE'

// Actions

export const iniTasksAction = (tasks: TasksType) => ({ type: TASK_INIT, payload: tasks })
export const addTaskAction = (task: { isComplete: boolean; description: string }) => ({
  type: TASK_ADD,
  payload: task,
})
export const completeTaskAction = (id: string) => ({ type: TASK_COMPLETE, payload: { id } })

// Reducer

const taskReducer = (state: TasksType, action: { type: string; payload: any }) => {
  switch (action.type) {
    case TASK_INIT:
      return [...action.payload]
    case TASK_ADD:
      return [{ ...action.payload, id: `${state.length + 1}` }, ...state]
    case TASK_COMPLETE:
      return state.map(task => {
        if (task.id !== action.payload.id) return task
        return { ...task, isComplete: !task.isComplete }
      })
    default:
      return state
  }
}

export default taskReducer

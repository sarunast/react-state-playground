import React, { Component } from 'react'
import { getTasks, TasksType } from '../data'

interface State {
  error: Error | undefined
  input: string
  isLoading: boolean
  tasks: TasksType
}

class Example0 extends Component<null, State> {
  state: State = {
    error: undefined,
    input: '',
    isLoading: true,
    tasks: [],
  }

  componentDidMount = () => {
    const fetchData = async () => {
      this.setState({
        error: undefined,
        isLoading: true,
      })

      try {
        const tasks = await getTasks('fakeUrl')
        this.setState({ tasks })
      } catch (e) {
        this.setState({ error: e })
      } finally {
        this.setState({ isLoading: false })
      }
    }

    fetchData()
  }

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value })
  }

  handleButton = () => {
    const { tasks, input } = this.state

    this.setState({
      input: '',
      tasks: [{ id: `${tasks.length + 1}`, isComplete: false, description: input }, ...tasks],
    })
  }

  toggleCheckbox = (taskId: string) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id !== taskId) return task
        return { ...task, isComplete: !task.isComplete }
      }),
    })
  }

  render() {
    const { tasks, input, isLoading, error } = this.state

    if (isLoading) {
      return <p>Loading</p>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return (
      <>
        <input value={input} onChange={this.handleInput} />
        <button onClick={this.handleButton}>Add</button>
        {tasks.map(task => (
          <div key={task.id}>
            <h4>
              {task.description}{' '}
              <input
                name="isComplete"
                type="checkbox"
                checked={task.isComplete}
                onChange={() => this.toggleCheckbox(task.id)}
              />
            </h4>
          </div>
        ))}
      </>
    )
  }
}

export default Example0

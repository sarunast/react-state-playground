import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import Tasks0 from '../features/tasks/example0/Example0'
import Tasks1 from '../features/tasks/example1/Example1'
import Tasks2 from '../features/tasks/example2/Example2'
import Tasks3 from '../features/tasks/example3/Example3'
import Tasks4 from '../features/tasks/example4/Example4'
import TaskProvider from '../features/tasks/example4/TasksContext'
import Tasks5 from '../features/tasks/example5/Example5'
import store from '../features/tasks/example5/configureStore'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/example0">
        <Tasks0 />
      </Route>
      <Route path="/example1">
        <Tasks1 />
      </Route>
      <Route path="/example2">
        <Tasks2 />
      </Route>
      <Route path="/example3">
        <Tasks3 />
      </Route>
      <Route path="/example4">
        <TaskProvider>
          <Tasks4 />
        </TaskProvider>
      </Route>
      <Route path="/example5">
        <Provider store={store}>
          <Tasks5 />
        </Provider>
      </Route>
      <Route path="/">
        <h1> Select example</h1>
        <Link to="/example1">Example 1</Link>
      </Route>
    </Switch>
  )
}

export default hot(App)

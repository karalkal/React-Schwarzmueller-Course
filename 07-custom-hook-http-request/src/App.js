import React, { useEffect, useState } from 'react'

import Tasks from './components/Tasks/Tasks'
import NewTask from './components/NewTask/NewTask'
import useHttp from './hooks/use-http'

function App () {
  const [tasks, setTasks] = useState([])

  function transformTasks (tasksObj) {
    // transform objects received from response to objects with id and text which we need to map and render
    const loadedTasks = []

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
    }

    setTasks(loadedTasks)
  }

  // function useHttp expects requestConfig object and applyData func
  const httpData = useHttp(
    {
      url: 'https://tasks-af17a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    },
    transformTasks
  )
  // pull props from httpData by destructuring (use alias)
  const { isLoading, error, sendRequest: fetchTasks } = httpData

  useEffect(() => {
    fetchTasks()
  }, [])

  const taskAddHandler = task => {
    setTasks(prevTasks => prevTasks.concat(task))
  }

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  )
}

export default App

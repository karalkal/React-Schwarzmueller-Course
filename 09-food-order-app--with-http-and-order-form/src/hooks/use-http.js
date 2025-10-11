import { useState } from 'react'

// 1. requestConfig argument is object with properties of the request,
//**  e.g. url, options (method, headers)
//2.  if the response contains data we pass is to the component which needs it
//**  via the function applyData which WE GET FROM THE COMPONENT USING THE HOOK
function useHttp (requestConfig, applyData) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function sendRequest (taskText) {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        // 'https://tasks-af17a-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      )

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()

      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }

  //  at the end of custom hook component we must return the states and sendRequest
  //  so that the component using the custom hook can access these
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp

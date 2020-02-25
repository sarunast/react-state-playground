import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { getTasks } from '../data'

type ErrorType = Error | undefined

function useDataApi<T>(
  initialUrl: string,
  initialData: T,
): [{ data: T; isLoading: boolean; error: ErrorType }, Dispatch<SetStateAction<string>>] {
  const [url, setUrl] = useState(initialUrl)
  const [data, setData] = useState<T>(initialData)
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorType>(undefined)

  useEffect(() => {
    let didCancel = false

    async function fetchData() {
      setError(undefined)
      setLoading(true)

      try {
        const data = (await getTasks(url)) as any // Should be here real api request
        if (!didCancel) {
          setData(data)
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
  }, [url])

  return [{ data, isLoading, error }, setUrl]
}

export default useDataApi

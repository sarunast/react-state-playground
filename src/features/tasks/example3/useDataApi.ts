import { Dispatch, SetStateAction, useEffect, useReducer, useState } from 'react'
import { getTasks } from '../data'

const FETCH_INIT = 'FETCH_INIT'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

type reducerTypes = {
  isLoading: boolean
  error: Error | undefined
  data: any
}

const dataFetchReducer = (state: reducerTypes, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        data: action.payload,
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      throw new Error()
  }
}

type ErrorType = Error | undefined

function useDataApi<T>(
  initialUrl: string,
  initialData: T,
): [{ data: T; isLoading: boolean; error: ErrorType }, Dispatch<SetStateAction<string>>] {
  const [url, setUrl] = useState(initialUrl)
  const [{ data, isLoading, error }, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    error: false,
    data: initialData,
  })

  useEffect(() => {
    let didCancel = false

    async function fetchData() {
      dispatch({ type: FETCH_INIT })

      try {
        const data = (await getTasks(url)) as any // Should be here real api request
        if (!didCancel) {
          dispatch({ type: FETCH_SUCCESS, payload: data })
        }
      } catch (e) {
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE, payload: e })
        }
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

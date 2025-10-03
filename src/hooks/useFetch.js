import { useEffect, useState } from 'react'

/**
 * Custom hook for fetching data with loading and error states
 * @param {string} url - The API endpoint to fetch
 * @param {object} options - Additional fetch options (headers, method, etc.)
 */
export function useFetch(url, options = {}) {
  // States for loading, data, and errors
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    // Start loading when fetch begins
    setLoading(true)

    fetch(url, {
      ...options,
      headers: {
        'Accept': 'application/json; charset=UTF-8', 
        ...options.headers,
      },
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then(jsonData => {
        // Simulate a delay (2s) to see the loading spinner
        setTimeout(() => {
          setData(jsonData)
          setLoading(false)
        }, 2000)
      })
      .catch(err => {
        setErrors(err)
        setLoading(false)
      })

    // Re-run if url or options change
  }, [url, options])

  return {
    loading,
    data,
    errors,
  }
}


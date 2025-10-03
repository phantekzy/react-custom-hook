import { useFetch } from './hooks/useFetch.js'

function App() {
  // Use the custom hook to fetch posts
  const { loading, data, errors } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10'
  )

  return (
    <div className="container my-5">
      {/* Spinner (shows while loading) */}
      {loading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Error alert (if something goes wrong) */}
      {errors && (
        <div className="alert alert-danger">
          {errors.toString()}
        </div>
      )}

      {/* Render fetched posts */}
      {data && (
        <div>
          <ul className="list-group">
            {data.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default App


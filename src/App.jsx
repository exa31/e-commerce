import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/'
import { Provider } from 'react-redux'
import store from './redux/Store'

function App() {

  return (
    <div className='app'>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div >
  )
}

export default App

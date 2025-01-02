import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../pages/main'
import Confirmation from '../pages/confirmation'

export function Routes() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },

    {
      path: '/order-details',
      element: <Confirmation />,
    },
  ])

  return routes
}

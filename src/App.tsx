import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import FamilyPage from './pages/FamilyPage'
import HomePage from './pages/HomePage'
import HousePage from './pages/HousePage'
import ResourcesPage from './pages/ResourcesPage'
import TylerPage from './pages/TylerPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/family',
    element: <FamilyPage />,
  },
  {
    path: '/house',
    element: <HousePage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/tyler',
    element: <TylerPage />,
  },
  {
    path: '/services',
    element: <Navigate replace to="/resources" />,
  },
  {
    path: '/kingdom',
    element: <Navigate replace to="/house" />,
  },
  {
    path: '*',
    element: <Navigate replace to="/" />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App

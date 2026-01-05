import { useRoutes } from 'react-router'
import Routes from './Router/Router'
export default function App() {
  let router = useRoutes(Routes)
  return (
    <>
    {router}
    </>
  )
}

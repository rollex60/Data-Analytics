import { Route } from 'react-router-dom'

const Routes = () => {
 return (
  <Routes>
    {Routes.map(route => {
      <Route
        key={route.path}
        path={route.path}
        element={<route.component />} />
    })}
  </Routes>
 )
}

export default Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageRoutes } from './router.constant'

export const RouterC = () => {
  return (
    <Router>
      <Routes>
        {PageRoutes.map((route, index) => (
          <Route
            path={route.path}
            key={index}
            element={route.element}
          />
        )
        )}
      </Routes>
    </Router>
  )
}

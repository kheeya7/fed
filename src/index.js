import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//import App from './app'

const AppLazy = lazy(() => import('./app'));
const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppLazy />
    </Suspense>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app-react-root')
)
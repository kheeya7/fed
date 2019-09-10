import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app.js'
import './scss/app.scss'
import './style.less'

var loadingContainer = document.querySelector(".loading-container");

if (loadingContainer) {
  loadingContainer.parentNode.removeChild(loadingContainer);
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app-react-root')
)

// const createDelayPromise = (timeout) => {
//   var timeoutResolver = null;

//   window.setTimeout(function () {
//     timeoutResolver();
//   }, timeout);

//   return new Promise((resolve) => {
//     timeoutResolver = resolve;
//   });
// }


// const AppLazy = lazy(
//   () => {
//     const delayPromise = createDelayPromise(500);
//     const appLoadingPromise = import('./app');

//     // return appLoadingPromise
//     return Promise.all([appLoadingPromise, delayPromise]).then((promises) => {
//       return promises[0];
//     });
//   }
// );

// const App = () => {
//   return (
//     <Suspense fallback={
//       <div style={{ margin: "10px", width: "100%", fontSize: "1.5em" }}>
//         Loading...
//       </div>
//     }>
//       <AppLazy />
//     </Suspense>
//   )
// }


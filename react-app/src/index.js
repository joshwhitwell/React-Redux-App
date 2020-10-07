//React Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
//Redux Dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//Styles
import './index.css'

//Components
import App from './App'

//Reducers
import { reducer } from './store/reducers'

//Compose Enhancer --- Allows Use of React Dev Tools with Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//Create Store and Implement Middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

//Render App
ReactDOM.render(
  <React.StrictMode>
    {/* Wrap App in Provider and Pass Store as Props */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

//Service Worker from Create-React-App
serviceWorker.unregister()

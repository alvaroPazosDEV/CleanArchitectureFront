import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
import Routes from './routes'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<div>cargando ...</div>} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )

}

export default App
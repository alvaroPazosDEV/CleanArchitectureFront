import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './4. Frameworks/web/redux/store'
import projectDependencies from './4. Frameworks/web/dependencies'
import Routes from './4. Frameworks/web/routes'

const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<div>cargando ...</div>} persistor={persistor}>
        <Routes dependencies={projectDependencies} />
      </PersistGate>
    </Provider>
  )

}

export default App
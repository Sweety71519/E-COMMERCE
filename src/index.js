// used (json-server data.json --watch --port 8000) this command for run json-server
//"proxy":"http://localhost/8000",used this in package.json file
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider } from 'react-redux'
import Store from './store/Store'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Provider store={Store}>
        <App />
    </Provider>
)

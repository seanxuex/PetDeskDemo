import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import store from '../src/pages/App/store'
import App from '../src/pages/App/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

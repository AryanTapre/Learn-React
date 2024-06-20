
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {reduxStore} from './app/store.ts';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
)

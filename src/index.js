import react from "react";
import reactDom from "react-dom";
import 'lib-flexible';
import 'react-app-polyfill/ie11';
import App from "./App"
import store from './store'
import {Provider} from "react-redux"

reactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
)

import { BrowserRouter } from "react-router-dom";

// Redux store
import { Provider } from "react-redux";
import store from "./redux/store";

// Style
import 'antd/dist/antd.min.css';
import './style.css';

import Application from "./containers/Application"

const app = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </Provider>
  )
}

export default app

// import React from "react";
// import  ReactDOM  from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";
// import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const options={
//   timeout:5000,
//   position:positions.BOTTOM_CENTER,
//   transitions: transitions.SCALE,
  
// }
// root.render(
//   <>
//     <Provider store={store}>
//       <AlertProvider template={AlertTemplate} {...options}>
//         <App />
//       </AlertProvider>
//     </Provider>
//   </>
// );


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

export const BackendServer="https://ecommercebackend-y38s.onrender.com"

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);

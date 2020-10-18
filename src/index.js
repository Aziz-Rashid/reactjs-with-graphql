import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ApolloProvider } from "@apollo/client";
import apollo_client from "./apollo_client";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <ApolloProvider client={apollo_client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
serviceWorker.register();
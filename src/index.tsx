import React from "react";
import ReactDOM from "react-dom";
import App from "./Core";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import GraphQlClient from "GraphQL/Apollo.client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={GraphQlClient}>
      <CssBaseline />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

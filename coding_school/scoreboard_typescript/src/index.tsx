import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "normalize.css"
import "./index.css"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  color: #dcdcdd;
  font-family: 'Press Start 2P', cursive;
}

body {
  background-color: #bdd4e7;
}

ul {
  list-style-type: none;
  padding: 0;
}
`

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
)
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

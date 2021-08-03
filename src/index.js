import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { KardKings } from "./KardKings.js"
import { UserProvider } from "./Users/UserProvider.js"

ReactDOM.render (
  <React.StrictMode>
    <UserProvider>
    <Router>
      <KardKings />
    </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


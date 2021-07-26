import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { KardKings } from "./KardKings"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <KardKings />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


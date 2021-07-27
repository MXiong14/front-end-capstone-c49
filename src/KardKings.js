import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews.js"
import { NavBar } from "./Nav/NavBar.js"
import { Login } from "./Auth/Login.js"
import { Register } from "./Auth/Register.js"

export const KardKings = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("kard_king_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )
        } 
        else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)

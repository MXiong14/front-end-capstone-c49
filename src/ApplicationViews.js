import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { BaseballForm } from "./Baseball/BaseballForm"
import { BaseballList } from "./Baseball/BaseballList"
import { BaseballDetail } from "./Baseball/BaseballDetail"
import { BaseballProvider } from "./Baseball/BaseballProvider"
import { BasketballForm } from "./Basketball/BasketballForm"
import { BasketballList } from "./Basketball/BasketballList"
import { BasketballDetail } from "./Basketball/BasketballDetail"
import { BasketballProvider } from "./Basketball/BasketballProvider"
import { Login } from "./Auth/Login"
import { Register } from "./Auth/Register"



export const ApplicationViews = () => {
    return (
        <>
        
        <BaseballProvider>
        <BasketballProvider>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
      
      <Route exact path="/baseball">
        <BaseballList />
      </Route>
      <Route exact path="/baseballs/create">
        <BaseballForm />
      </Route>
      <Route path="/baseball/edit/:baseballId(\d+)">
        <BaseballForm />
      </Route>
      <Route exact path="/baseball/detail/:baseballId(\d+)">
        <BaseballDetail />
      </Route>

      <Route exact path="/basketball">
        <BasketballList />
      </Route>
      <Route exact path="/basketball/create">
        <BasketballForm />
      </Route>
      <Route path="/basketball/edit/:basketballId(\d+)">
        <BasketballForm />
      </Route>
      <Route exact path="/basketball/detail/:basketballId(\d+)">
        <BasketballDetail />
      </Route>
       
        </BasketballProvider>
        </BaseballProvider>
        </>
    )
}

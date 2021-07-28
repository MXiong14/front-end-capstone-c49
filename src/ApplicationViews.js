import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { BaseballForm } from "./Baseball/BaseballForm"
import { BaseballList } from "./Baseball/BaseballList"
import { BaseballDetail } from "./Baseball/BaseballDetail"

import { BaseballProvider } from "./Baseball/BaseballProvider"

export const ApplicationViews = () => {
    return (
        <>
        
        <BaseballProvider>
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
      <Route path="/baseballs/edit/:baseballId(\d+)">
        <BaseballForm />
      </Route>
      <Route exact path="/baseballs/detail/:baseballId(\d+)">
        <BaseballDetail />
      </Route>
       
        </BaseballProvider>
        </>
    )
}

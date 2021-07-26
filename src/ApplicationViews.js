import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { BaseballCard } from "./Baseball/BaseballCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/baseballs">
                <BaseballCard />
            </Route>
        </>
    )
}

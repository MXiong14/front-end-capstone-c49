import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { List } from "./Components/List"
import { Details } from "./Components/Details"
import { Form } from "./Components/Form"
import { Card } from "./Components/Card"
import { SportNameProvider } from "./Provider/SportNameProvider"
import { CardsProvider } from "./Provider/SportProvider"




export const ApplicationViews = () => {
    return (
        <>
        <SportNameProvider>
        <CardsProvider>
       
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>
      
      <Route exact path="/baseball">
        <h2>My Baseball Collection</h2>
        <List sportId = {1} />
      </Route>
      <Route exact path="/basketball">
        <h2>My Basketball Collection</h2>
        <List sportId = {3} />
      </Route>
      <Route exact path="/football">
        <h2>My Football Collection</h2>
        <List sportId = {4} />
      </Route>
      <Route exact path="/soccer">
        <h2>My Soccer Collection</h2>
        <List sportId = {2} />
      </Route>
      <Route exact path="/sports/detail/:cardId(\d+)">
        <Details />
      </Route>
      <Route exact path="/sports/edit/:cardId(\d+)">
        <Form />
      </Route>
      <Route exact path="/sports/create">
        <Form />
      </Route>

      </CardsProvider>
      </SportNameProvider>
      
        </>
    )
}

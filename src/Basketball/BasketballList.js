import React, { useContext, useEffect, useState } from "react"
import { BasketballContext } from "./BasketballProvider"
import { BasketballCard } from "./BasketballCard"
import { useHistory } from "react-router-dom"
import "./Basketball.css"

export const BasketballList = () => {
  const { basketballs, getBasketballs, searchTerms } = useContext(BasketballContext)


  // Since you are no longer ALWAYS displaying all of the cards
  const [ filteredBasketballs, setFiltered ] = useState([])
  const history = useHistory()
console.log(filteredBasketballs)
  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getBasketballs()
   }, [])


  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching cards
      const subset = basketballs.filter(basketball => basketball.playerName.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all cards
      setFiltered(basketballs)
    }
  }, [searchTerms, basketballs])

  return (
    <>
      <h1>Basketball Cards</h1>
      <div className="basketballs">
      <button onClick={() => history.push("/basketball/create")}>
          Click here to add a new card
      </button>
      </div>

      <div className="basketballs">
      {
        filteredBasketballs.map(basketball => {
          return <BasketballCard key={basketball.id} basketball={basketball} />
        })
      }
      </div>
    </>
  )
}
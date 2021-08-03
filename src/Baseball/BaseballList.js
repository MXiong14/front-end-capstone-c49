import React, { useContext, useEffect, useState } from "react"
import { BaseballContext } from "./BaseballProvider"
import { BaseballCard } from "./BaseballCard"
import { useHistory } from "react-router-dom"
import "./Baseball.css"

export const BaseballList = () => {
  const { baseballs, getBaseballs, searchTerms } = useContext(BaseballContext)


  // Since you are no longer ALWAYS displaying all of the cards
  const [ filteredBaseballs, setFiltered ] = useState([])
  const history = useHistory()
console.log(filteredBaseballs)
  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getBaseballs()
   }, [])


  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching cards
      const subset = baseballs.filter(baseball => baseball.playerName.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all cards
      setFiltered(baseballs)
    }
  }, [searchTerms, baseballs])

  return (
    <>
      <h2>Baseball Cards</h2>
      <div className="baseballs">
      <button onClick={() => history.push("/baseballs/create")}>
          Click here to add a new card
      </button>
      </div>

      <div className="baseballs">
      {
        filteredBaseballs.map(baseball => {
          return <BaseballCard key={baseball.id} baseball={baseball} />
        })
      }
      </div>
    </>
  )
}
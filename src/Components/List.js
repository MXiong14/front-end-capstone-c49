import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { CardsContext } from "../Provider/SportProvider"
import { Card } from "./Card"
import "./Styling.css"

export const List = (props) => {
  const { cards, getCards } = useContext(CardsContext)
  const history = useHistory()

  useEffect(() => {
    getCards()
  }, [])


  return (
    <>
    <button onClick={() => {history.push("/sports/create")}}>
    Add Card To Your Collection
    </button>
    <div className="cards">
      {
        cards.map(element => {
          if (element.sportNameId === props.sportId && element.userId == sessionStorage.getItem("kard_king_user"))
          {
            return <Card key={element.id} card={element} />
          }
      })
      }
    </div>
    </>
  )
}
// 
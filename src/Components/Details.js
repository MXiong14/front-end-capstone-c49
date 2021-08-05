import React, { useContext, useEffect, useState } from "react"
import { CardsContext } from "../Provider/SportProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Styling.css"
//this module has the necessary details to render the details of each card when you click on their titles on the main page. 
//then, you will be able to delete a card or edit an existing card.
export const Details = () => {

const { getCardById, deleteCard } = useContext(CardsContext)
const [cardObj, setCard] = useState({})
const {cardId} = useParams();
const history = useHistory();

var sportName = [
  {
    "id": 1,
    "title": "Baseball"
  },
  {
    "id": 2,
    "title": "Soccer"
  },
  {
    "id": 3,
    "title": "Basketball"
  },
  {
    "id": 4,
    "title": "Football"
  }
]

  const handleDelete = () => {
    deleteCard(cardObj.id)
      .then(() => {
        history.push("/baseball")
      })
  }

  useEffect(() => {
    console.log( CardsContext)
    getCardById(cardId)
    .then((response) => {
      setCard(response)
    })
    }, [])

  return (
    <section className="card">
      <h3 className="playerName">Player Name: {cardObj.playerName}</h3>
      <div className="teamName">Team Name: {cardObj.teamName}</div>
      <div className="year">Year: {cardObj.year}</div>
      <div className="brand">Brand: {cardObj.brand}</div>
      <div className="subBrand">Sub Brand: {cardObj.subBrand}</div>
      <div className="cardNumber">Card Number: {cardObj.cardNumber}</div>
      <div className="grade">Grade: {cardObj.grade}</div>
      <div className="quantity">Quantity: {cardObj.quantity}</div>
      <div className="dateEntered">Date Entered: {cardObj.dateEntered}</div>
      <img className="playerImage" src={`${cardObj.imageURL}`} alt={cardObj.playerName} />
      <button onClick={handleDelete}>Remove Card</button>
      <button onClick={() => {
        history.push(`/sports/edit/${cardObj.id}`)
        }}>Edit Info</button>
      <button onClick={() => { 
        history.push(`/`)
        }}>Back To Home</button>

    </section>
  )
}
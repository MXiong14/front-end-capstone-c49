import React, { useContext, useEffect, useState } from "react"
import { BasketballContext } from "./BasketballProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Basketball.css"
//this module has the necessary details to render the details of events when you click on their titles on the main page. then, you will be able to delete an event or edit an existing event.
export const BasketballDetail = () => {

const { getBasketballById, deleteBasketball } = useContext(BasketballContext)


	const [basketballObj, setBasketball] = useState({})

	const {basketballId} = useParams();
	const history = useHistory();

const handleDelete = () => {
    deleteBasketball(basketballObj.id)
      .then(() => {
        history.push("/basketball")
      })
  }

  useEffect(() => {
    console.log("useEffect", basketballId)
    getBasketballById(basketballId)
    .then((response) => {
      setBasketball(response)
    })
    }, [])

  return (
    <section className="basketball">
      <h3 className="playerName">Player Name: {basketballObj.playerName}</h3>
      <div className="teamName">Team Name: {basketballObj.teamName}</div>
      <div className="year">Year: {basketballObj.year}</div>
      <div className="brand">Brand: {basketballObj.brand}</div>
      <div className="subBrand">Sub Brand: {basketballObj.subBrand}</div>
      <div className="cardNumber">Card Number: {basketballObj.cardNumber}</div>
      <div className="grade">Grade: {basketballObj.grade}</div>
      <div className="quantity">Quantity: {basketballObj.quantity}</div>
      <div className="dateEntered">Date Entered: {basketballObj.dateEntered}</div>
      <div className="imageURL">ImageURL {basketballObj.imageURL}</div>
      <button onClick={handleDelete}>Remove card</button>
      <button onClick={() => {
        history.push(`/basketball/edit/${basketballObj.id}`)
        }}>Edit info</button>

    </section>
  )
}
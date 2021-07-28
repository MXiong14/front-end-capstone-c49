import React, { useContext, useEffect, useState } from "react"
import { BaseballContext } from "./BaseballProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Baseball.css"
//this module has the necessary details to render the details of events when you click on their titles on the main page. then, you will be able to delete an event or edit an existing event.
export const BaseballDetail = () => {

const { getBaseballById, deleteBaseball } = useContext(BaseballContext)


	const [baseballObj, setBaseball] = useState({})

	const {baseballId} = useParams();
	const history = useHistory();

const handleDelete = () => {
    deleteBaseball(baseballObj.id)
      .then(() => {
        history.push("/baseball")
      })
  }

  useEffect(() => {
    console.log("useEffect", baseballId)
    getBaseballById(baseballId)
    .then((response) => {
      setBaseball(response)
    })
    }, [])

  return (
    <section className="baseball">
      <h3 className="playerName">Player Name: {baseballObj.playerName}</h3>
      <div className="teamName">Team Name: {baseballObj.teamName}</div>
      <div className="year">Year: {baseballObj.year}</div>
      <div className="brand">Brand: {baseballObj.brand}</div>
      <div className="subBrand">Sub Brand: {baseballObj.subBrand}</div>
      <div className="cardNumber">Card Number: {baseballObj.cardNumber}</div>
      <div className="grade">Grade: {baseballObj.grade}</div>
      <div className="quantity">Quantity: {baseballObj.quantity}</div>
      <div className="dateEntered">Date Entered: {baseballObj.dateEntered}</div>
      <div className="imageURL">ImageURL {baseballObj.imageURL}</div>
      <button onClick={handleDelete}>Remove card</button>
      <button onClick={() => {
        history.push(`/baseball/edit/${baseballObj.id}`)
        }}>Edit info</button>

    </section>
  )
}
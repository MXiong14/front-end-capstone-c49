import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { BasketballContext } from "./BasketballProvider"
import "./Basketball.css"

export const BasketballForm = () => {
  const { addBasketball, getBasketballById, getBasketballs, updateBasketball } = useContext(BasketballContext)

  const [basketball, setBasketball] = useState({
    playerName: "",
    teamName: "",
    year: "",
    brand: "",
    subBrand: "",
    cardNumber: "",
    grade: "",
    quantity: "",
    dateEntered: "",
    imageURL: ""
  });

  useEffect(() => {
    getBasketballs()
}, [])

  const [isLoading, setIsLoading] = useState(true);
  const { basketballId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (controlBasketball) => {
    const newBasketball = { ...basketball }
    let selectedVal = controlBasketball.target.value
        
    if (controlBasketball.target.id.includes("Id")) {
     selectedVal = parseInt(selectedVal)
    }
     newBasketball[controlBasketball.target.id] = selectedVal
     setBasketball(newBasketball)
  }

  // const newArticle = { ...article }
  // newArticle[event.target.id] = event.target.value
  // setArticle(newArticle)

  const handleSaveBasketball = (controlBasketball) => {
    
  
    if (basketballId) {
      //PUT - update
      updateBasketball({
          id: basketball.id,
          playerName: basketball.playerName,
          teamName: basketball.teamName,
          year: basketball.year,
          brand: basketball.brand,
          subBrand: basketball.subBrand,
          cardNumber: basketball.cardNumber,
          grade: basketball.grade,
          quantity: basketball.quantity,
          dateEntered: basketball.dateEntered,
          imageURL: basketball.imageURL 
      }, basketballId)
      .then(() => history.push(`/basketball/detail/${basketballId}`))
    } else {
      //POST - add
      addBasketball({
        playerName: basketball.playerName,
          teamName: basketball.teamName,
          year: basketball.year,
          brand: basketball.brand,
          subBrand: basketball.subBrand,
          cardNumber: basketball.cardNumber,
          grade: basketball.grade,
          quantity: basketball.quantity,
          dateEntered: basketball.dateEntered,
          imageURL: basketball.imageURL 
      })
      .then(() => history.push("/basketball"))
    }
  }

  useEffect(() => {
    getBasketballs().then(() => {
      if (basketballId) {
        getBasketballById(basketballId)
        .then(basketball => {
            setBasketball(basketball)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])

    return (
      <form className="basketballForm">
        <h2 className="basketballForm__title">{basketballId ? "Edit Card" : "Add Card" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="playerNameLabel">Player Name: </label>
            <input type="text" id="playerName" name="playerNameBasketball" required autoFocus className="form-control"
            placeholder="Player Name"
            onChange={handleControlledInputChange}
            defaultValue={basketball.playerName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="teamNameLabel">Team Name: </label>
            <input type="text" id="teamName" name="teamNameBasketball" required autoFocus className="form-control"
            placeholder="Team Name"
            onChange={handleControlledInputChange}
            defaultValue={basketball.teamName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="yearLabel">Year: </label>
            <input type="text" id="year" name="yearBasketball" required autoFocus className="form-control"
            placeholder="Year"
            onChange={handleControlledInputChange}
            defaultValue={basketball.year}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="brandLabel">Brand: </label>
            <input type="text" id="brand" name="brandBasketball" required autoFocus className="form-control"
            placeholder="Brand"
            onChange={handleControlledInputChange}
            defaultValue={basketball.brand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="subBrandLabel">Sub Brand: </label>
            <input type="text" id="subBrand" name="subBrandBasketball" required autoFocus className="form-control"
            placeholder="Sub Brand"
            onChange={handleControlledInputChange}
            defaultValue={basketball.subBrand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="cardNumberLabel">Card Number: </label>
            <input type="text" id="cardNumber" name="cardNumberBasketball" required autoFocus className="form-control"
            placeholder="Card Number"
            onChange={handleControlledInputChange}
            defaultValue={basketball.cardNumber}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="gradeLabel">Grade: </label>
            <input type="text" id="grade" name="gradeBasketball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={basketball.grade}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="quantityLabel">Quantity: </label>
            <input type="text" id="quantity" name="quantityBasketball" required autoFocus className="form-control"
            placeholder="Quantity"
            onChange={handleControlledInputChange}
            defaultValue={basketball.quantity}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="dateEnteredLabel">Date Entered: </label>
            <input type="date" id="dateEntered" name="dateEnteredBasketball" required autoFocus className="form-control"
            placeholder="Date Entered"
            onChange={handleControlledInputChange}
            defaultValue={basketball.dateEntered}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="imageURLLabel">imageURL: </label>
            <input type="url" id="imageURL" name="imageURLBasketball" required autoFocus className="form-control"
            placeholder="imageURL"
            onChange={handleControlledInputChange}
            defaultValue={basketball.imageURL}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveBasketball(basketball)
          }}>
        {basketballId ? "Save Card" : "Add Card" }</button>
      </form>
    )
}
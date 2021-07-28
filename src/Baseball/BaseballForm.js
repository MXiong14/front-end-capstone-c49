import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { BaseballContext } from "../Baseball/BaseballProvider"

export const BaseballForm = () => {
    const { addBaseball, updateBaseball } = useContext(BaseballContext)

    //for edit, hold on to state of baseballObj in this view
    const [baseballObj, setBaseball] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(false);

    const {baseballId} = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (baseball) => {
      
      const newBaseball = { ...baseballObj }
      //event is an object with properties.
      //set the property to the new value
      newBaseball[baseball.target.id] = baseball.target.value
      //update state
      setBaseball(newBaseball)
    }

    const handleSaveBaseball = (baseballObj) => {
        setIsLoading(true);
        if (baseballId) {
          //PUT - update
          updateBaseball({
              id: baseballObj.id,
              playerName: baseballObj.playerName,
              teamName: baseballObj.teamName,
              year: baseballObj.year,
              brand: baseballObj.brand,
              subBrand: baseballObj.subBrand,
              cardNumber: baseballObj.cardNumber,
              grade: baseballObj.grade,
              quantity: baseballObj.quantity,
              dateEntered: baseballObj.dateEntered,
              imageURL: baseballObj.imageURL 
          }, baseballId)
          .then(() => history.push(`/baseballs/detail/${baseballId}`))
        } else {
          //POST - add
          addBaseball({
            playerName: baseballObj.playerName,
              teamName: baseballObj.teamName,
              year: baseballObj.year,
              brand: baseballObj.brand,
              subBrand: baseballObj.subBrand,
              cardNumber: baseballObj.cardNumber,
              grade: baseballObj.grade,
              quantity: baseballObj.quantity,
              dateEntered: baseballObj.dateEntered,
              imageURL: baseballObj.imageURL 
          })
          .then(() => history.push("/baseballs"))
        }
      }

    return (
      <form className="baseballForm">
        <h2 className="baseballForm__title">{baseballId ? "Edit Card" : "Add Card" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="playerNameLabel">Player Name: </label>
            <input type="text" id="playerName" name="playerNameBaseball" required autoFocus className="form-control"
            placeholder="Player Name"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.playerName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="teamNameLabel">Team Name: </label>
            <input type="text" id="teamName" name="teamNameBaseball" required autoFocus className="form-control"
            placeholder="Team Name"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.teamName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="yearLabel">Year: </label>
            <input type="text" id="year" name="yearBaseball" required autoFocus className="form-control"
            placeholder="Year"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.year}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="brandLabel">Brand: </label>
            <input type="text" id="brand" name="brandBaseball" required autoFocus className="form-control"
            placeholder="Brand"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.brand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="subBrandLabel">Sub Brand: </label>
            <input type="text" id="subBrand" name="subBrandBaseball" required autoFocus className="form-control"
            placeholder="Sub Brand"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.subBrand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="cardNumberLabel">Card Number: </label>
            <input type="text" id="cardNumber" name="cardNumberBaseball" required autoFocus className="form-control"
            placeholder="Card Number"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.cardNumber}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="gradeLabel">Grade: </label>
            <input type="text" id="grade" name="gradeBaseball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.grade}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="quantityLabel">Quantity: </label>
            <input type="text" id="quantity" name="quantityBaseball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.quantity}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="dateEnteredLabel">Date Entered: </label>
            <input type="text" id="dateEntered" name="dateEnteredBaseball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.dateEntered}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="imageURLLabel">imageURL: </label>
            <input type="text" id="imageURL" name="imageURLBaseball" required autoFocus className="form-control"
            placeholder="imageURL"
            onChange={handleControlledInputChange}
            defaultValue={baseballObj.imageURL}/>
          </div>
        </fieldset>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveBaseball(baseballObj)
          }}>
        {baseballId ? "Save Card" : "Add Card" }</button>
      </form>
    )
}
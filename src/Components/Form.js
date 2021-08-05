import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { CardsContext } from "../Provider/SportProvider"
import { SportNameContext } from "../Provider/SportNameProvider";
import "./Styling.css"

export const Form = () => {
  const { addCard, getCardById, getCards, updateCards } = useContext(CardsContext)

  const [card, setCard] = useState({
    playerName: "",
    sportNameId: "",
    teamName: "",
    year: "",
    brand: "",
    subBrand: "",
    cardNumber: "",
    grade: "",
    quantity: "",
    dateEntered: ""
    
  });
  
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

  useEffect(() => {
    getCards() 
    console.log(card)
}, [])

 // useState is an react hook that lets you add react state to function components. One holds the image to be uploaded 
 // and the other to hold the image url after it's been uploaded to cloudinary.

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  // uploadImage funciton will be called once the upload button is clicked. 
  // FormData provides a way to easily construct a set of key/value pairs representing form fields and
  // their values, which can then be easily sent to the server.  
  // file is pointing to image, upload_preset is pointing to upload preset name 
  // cloud_name is pointing to your cloudinary dashboard name. 
  // fetch post request to cloudinary endpoint. 
  // appened method of FormData appends a new value onto an an exisiting key inside of FormData object.

  const uploadImage = (event) => {
    event.preventDefault()
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "CapstoneCards");
    data.append("cloud_name", "kardkingsapi");
    fetch(" https://api.cloudinary.com/v1_1/kardkingsapi/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  
  const [isLoading, setIsLoading] = useState(true);
  const { cardId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (controlCard) => {
    const newCard = { ...card }
    let selectedVal = controlCard.target.value
        
    if (controlCard.target.id.includes("Id")) {
     selectedVal = parseInt(selectedVal)
    }
     newCard[controlCard.target.id] = selectedVal
     setCard(newCard)
  }

  // const newArticle = { ...article }
  // newArticle[event.target.id] = event.target.value
  // setArticle(newArticle)

  const handleSaveCard = (card) => {
    {console.log(document.getElementById("sportNameId").value)}
    if (cardId) {
  updateCards ({
          id: card.id,
          playerName: card.playerName,
          sportNameId: card.sportNameId,
          teamName: card.teamName,
          year: card.year,
          brand: card.brand,
          subBrand: card.subBrand,
          cardNumber: card.cardNumber,
          grade: card.grade,
          quantity: card.quantity,
          dateEntered: card.dateEntered,
          imageURL: url,
          userId: parseInt(sessionStorage.getItem("kard_king_user"))
      }, cardId)
      .then(() => history.push(`/sports/detail/${cardId}`))
    } else {

      addCard({
        playerName: card.playerName,
        sportNameId: card.sportNameId,
          teamName: card.teamName,
          year: card.year,
          brand: card.brand,
          subBrand: card.subBrand,
          cardNumber: card.cardNumber,
          grade: card.grade,
          quantity: card.quantity,
          dateEntered: card.dateEntered,
          imageURL: url,
          userId: parseInt(sessionStorage.getItem("kard_king_user"))
      })
      .then(() => {
      let e = document.getElementById("sportNameId")
      history.push(`/${e.options[e.selectedIndex].text}`)
    })
        
  }
  }
      

  useEffect(() => {
    getCards().then(() => {
      if (cardId) {
        getCardById(cardId)
        .then(card => {
            setCard(card)
            setUrl(card.imageURL)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])


    return (
      <form className="Form">
        <h2 className="Form__title">{cardId ? "Edit Card" : "Add A Card" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="playerNameLabel">Player Name: </label>
            <input type="text" id="playerName" name="playerNameBaseball" required autoFocus className="form-control"
            placeholder="Player Name"
            onChange={handleControlledInputChange}
            defaultValue={card.playerName}/>
          </div>
        </fieldset>
        <fieldset> 
          <div className="form-group">
            <label htmlFor="sportLabel">Select A Sport: </label>
            <select value={card.sportNameTitle} name="sportNameId" id="sportNameId" className="form-control" onChange={handleControlledInputChange}>
              <option value="0">Select A Sport</option>
              {sportName.map(element => (
                <option key={element.id} value={element.id}>
                {element.title} 
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="teamNameLabel">Team Name: </label>
            <input type="text" id="teamName" name="teamNameBaseball" required autoFocus className="form-control"
            placeholder="Team Name"
            onChange={handleControlledInputChange}
            defaultValue={card.teamName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="yearLabel">Year: </label>
            <input type="text" id="year" name="yearBaseball" required autoFocus className="form-control"
            placeholder="Year"
            onChange={handleControlledInputChange}
            defaultValue={card.year}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="brandLabel">Brand: </label>
            <input type="text" id="brand" name="brandBaseball" required autoFocus className="form-control"
            placeholder="Brand"
            onChange={handleControlledInputChange}
            defaultValue={card.brand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="subBrandLabel">Sub Brand: </label>
            <input type="text" id="subBrand" name="subBrandBaseball" required autoFocus className="form-control"
            placeholder="Sub Brand"
            onChange={handleControlledInputChange}
            defaultValue={card.subBrand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="cardNumberLabel">Card Number: </label>
            <input type="text" id="cardNumber" name="cardNumberBaseball" required autoFocus className="form-control"
            placeholder="Card Number"
            onChange={handleControlledInputChange}
            defaultValue={card.cardNumber}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="gradeLabel">Grade: </label>
            <input type="text" id="grade" name="gradeBaseball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={card.grade}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="quantityLabel">Quantity: </label>
            <input type="text" id="quantity" name="quantityBaseball" required autoFocus className="form-control"
            placeholder="Quantity"
            onChange={handleControlledInputChange}
            defaultValue={card.quantity}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="dateEnteredLabel">Date Entered: </label>
            <input type="date" id="dateEntered" name="dateEnteredBaseball" required autoFocus className="form-control"
            placeholder="Date Entered"
            onChange={handleControlledInputChange}
            defaultValue={card.dateEntered}/>
          </div>
        </fieldset>
         {/* <fieldset>
          <div className="form-group">
           <label htmlFor="imageURLLabel"> </label>
            <input type="url" id="imageURL" name="imageURLBaseball" required autoFocus className="form-control"
            placeholder="imageURL"
            onChange={handleControlledInputChange}
            defaultValue={baseball.imageURL}/>
          </div>
         </fieldset>  */}
        <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <img src={url} />
      </div>
    </div>
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveCard(card);
          }}>
        {cardId ? "Save Card" : "Add Card" }</button>
      </form>
    )
}
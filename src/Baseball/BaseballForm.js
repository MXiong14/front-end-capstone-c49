import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { BaseballContext } from "./BaseballProvider"
import "./Baseball.css"

export const BaseballForm = () => {
  const { addBaseball, getBaseballById, getBaseballs, updateBaseball } = useContext(BaseballContext)

  const [baseball, setBaseball] = useState({
    playerName: "",
    teamName: "",
    year: "",
    brand: "",
    subBrand: "",
    cardNumber: "",
    grade: "",
    quantity: "",
    dateEntered: ""
    
  });

  useEffect(() => {
    getBaseballs()
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
  const { baseballId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (controlBaseball) => {
    const newBaseball = { ...baseball }
    let selectedVal = controlBaseball.target.value
        
    if (controlBaseball.target.id.includes("Id")) {
     selectedVal = parseInt(selectedVal)
    }
     newBaseball[controlBaseball.target.id] = selectedVal
     setBaseball(newBaseball)
  }

  // const newArticle = { ...article }
  // newArticle[event.target.id] = event.target.value
  // setArticle(newArticle)

  const handleSaveBaseball = (controlBaseball) => {
    
  
    if (baseballId) {
      //PUT - update
      updateBaseball({
          id: baseball.id,
          playerName: baseball.playerName,
          teamName: baseball.teamName,
          year: baseball.year,
          brand: baseball.brand,
          subBrand: baseball.subBrand,
          cardNumber: baseball.cardNumber,
          grade: baseball.grade,
          quantity: baseball.quantity,
          dateEntered: baseball.dateEntered,
          imageURL: url
      }, baseballId)
      .then(() => history.push(`/baseball/detail/${baseballId}`))
    } else {
      //POST - add
      addBaseball({
        playerName: baseball.playerName,
          teamName: baseball.teamName,
          year: baseball.year,
          brand: baseball.brand,
          subBrand: baseball.subBrand,
          cardNumber: baseball.cardNumber,
          grade: baseball.grade,
          quantity: baseball.quantity,
          dateEntered: baseball.dateEntered,
          imageURL: url 
      })
      .then(() => history.push("/baseball"))
    }
  }

  useEffect(() => {
    getBaseballs().then(() => {
      if (baseballId) {
        getBaseballById(baseballId)
        .then(baseball => {
            setBaseball(baseball)
            setUrl(baseball.imageURL)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])


    return (
      <form className="baseballForm">
        <h2 className="baseballForm__title">{baseballId ? "Edit Card" : "Add Card" }</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="playerNameLabel">Player Name: </label>
            <input type="text" id="playerName" name="playerNameBaseball" required autoFocus className="form-control"
            placeholder="Player Name"
            onChange={handleControlledInputChange}
            defaultValue={baseball.playerName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="teamNameLabel">Team Name: </label>
            <input type="text" id="teamName" name="teamNameBaseball" required autoFocus className="form-control"
            placeholder="Team Name"
            onChange={handleControlledInputChange}
            defaultValue={baseball.teamName}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="yearLabel">Year: </label>
            <input type="text" id="year" name="yearBaseball" required autoFocus className="form-control"
            placeholder="Year"
            onChange={handleControlledInputChange}
            defaultValue={baseball.year}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="brandLabel">Brand: </label>
            <input type="text" id="brand" name="brandBaseball" required autoFocus className="form-control"
            placeholder="Brand"
            onChange={handleControlledInputChange}
            defaultValue={baseball.brand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="subBrandLabel">Sub Brand: </label>
            <input type="text" id="subBrand" name="subBrandBaseball" required autoFocus className="form-control"
            placeholder="Sub Brand"
            onChange={handleControlledInputChange}
            defaultValue={baseball.subBrand}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="cardNumberLabel">Card Number: </label>
            <input type="text" id="cardNumber" name="cardNumberBaseball" required autoFocus className="form-control"
            placeholder="Card Number"
            onChange={handleControlledInputChange}
            defaultValue={baseball.cardNumber}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="gradeLabel">Grade: </label>
            <input type="text" id="grade" name="gradeBaseball" required autoFocus className="form-control"
            placeholder="Grade"
            onChange={handleControlledInputChange}
            defaultValue={baseball.grade}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="quantityLabel">Quantity: </label>
            <input type="text" id="quantity" name="quantityBaseball" required autoFocus className="form-control"
            placeholder="Quantity"
            onChange={handleControlledInputChange}
            defaultValue={baseball.quantity}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="dateEnteredLabel">Date Entered: </label>
            <input type="date" id="dateEntered" name="dateEnteredBaseball" required autoFocus className="form-control"
            placeholder="Date Entered"
            onChange={handleControlledInputChange}
            defaultValue={baseball.dateEntered}/>
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
            handleSaveBaseball(baseball)
          }}>
        {baseballId ? "Save Card" : "Add Card" }</button>
      </form>
    )
}
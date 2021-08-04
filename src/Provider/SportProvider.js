import React, { useState, createContext } from "react"

export const CardsContext = createContext()

export const CardsProvider = (props) => {
    const [cards, setCards] = useState([])

    const getCards = () => {
        return fetch("http://localhost:8088/cards")
        .then(res => res.json())
        .then(setCards)
    }

    const getCardById = (id) => {
        return fetch(`http://localhost:8088/cards/${id}`)
        .then(res => res.json())
        }

    const addCard = cardObj => {
        return fetch("http://localhost:8088/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cardObj)
        })
        .then(getCards)
        }

        const deleteCard = cardId => {
            return fetch(`http://localhost:8088/cards/${cardId}`, {
              method: "DELETE"
            })
              .then(getCards)
        }

        const updateCards = cards => {
            return fetch(`http://localhost:8088/cards/${cards.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(cards)
            })
              .then(getCards)
          }

    return (
        <CardsContext.Provider value={{
            cards, getCards, setCards, getCardById, addCard, updateCards, deleteCard
        }}>
            {props.children}
        </CardsContext.Provider>
    )
}
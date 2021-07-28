import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const BasketballContext = createContext()

// This component establishes what data can be used.
export const BasketballProvider = (props) => {
    const [basketballs, setBasketballs] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getBasketballs = () => {
        return fetch("http://localhost:8088/basketballs")
        .then(res => res.json())
        .then(setBasketballs)
    }
    
    const addBasketball = basketballObj => {
        return fetch("http://localhost:8088/basketballs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(basketballObj)
        })
        .then(getBasketballs)
    }

    const deleteBasketball = basketballId => {
        return fetch(`http://localhost:8088/basketballs/${basketballId}`, {
          method: "DELETE"
        })
          .then(getBasketballs)
    }

    const updateBasketball = (basketballObj, basketballId) => {
        return fetch(`http://localhost:8088/basketballs/${basketballId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(basketballObj)
        })
          .then(getBasketballs)
      }
      
    const getBasketballById = (id) => {
        return fetch(`http://localhost:8088/basketballs/${id}`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `baseballs` state, `getBaseballs` function,
        and the `addBaseball` function as keys. This
        allows any child elements to access them.
    */
        return (
            <BasketballContext.Provider value={
              {
                basketballs, addBasketball, getBasketballs, getBasketballById, searchTerms, updateBasketball, deleteBasketball, setSearchTerms
              }
            }>
              {props.children}
            </BasketballContext.Provider>
          )
        
}

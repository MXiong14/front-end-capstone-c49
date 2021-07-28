import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const BaseballContext = createContext()

// This component establishes what data can be used.
export const BaseballProvider = (props) => {
    const [ baseballs, setBaseballs ] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getBaseballs = () => {
        return fetch("http://localhost:8088/baseballs")
        .then(res => res.json())
        .then(setBaseballs)
    }
    
    const addBaseball = baseballObj => {
        return fetch("http://localhost:8088/baseballs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(baseballObj)
        })
        .then(getBaseballs)
    }

    const deleteBaseball = baseballId => {
        return fetch(`http://localhost:8088/baseballs/${baseballId}`, {
          method: "DELETE"
        })
          .then(getBaseballs)
    }

    const updateBaseball = (baseballObj, baseballId) => {
        return fetch(`http://localhost:8088/baseballs/${baseballId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(baseballObj)
        })
          .then(getBaseballs)
      }
      
    const getBaseballById = (id) => {
        return fetch(`http://localhost:8088/baseballs/${id}`)
            .then(res => res.json())
    }

    /*
        You return a context provider which has the
        `baseballs` state, `getBaseballs` function,
        and the `addBaseball` function as keys. This
        allows any child elements to access them.
    */
        return (
            <BaseballContext.Provider value={
              {
                baseballs, addBaseball, getBaseballs, getBaseballById, searchTerms, updateBaseball, deleteBaseball, setSearchTerms
              }
            }>
              {props.children}
            </BaseballContext.Provider>
          )
        
}

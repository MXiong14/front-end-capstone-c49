import React, { useState, createContext } from "react"

export const SportNameContext = createContext()

export const SportNameProvider = (props) => {
    const [sportName, setSportName] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")

    const getSportName = () => {
        return fetch("http://localhost:8088/sportname")
        .then(res => res.json())
        .then(setSportName)
    }
    const getSportNameById = (id) => {
        return fetch(`http://localhost:8088/sportname/${id}`)
        .then(res => res.json())
        }
        const getSportNameByTitle = (title) => {
            return fetch(`http://localhost:8088/sportname/${title}`)
            .then(res => res.json())
            }    

    return (
        <SportNameContext.Provider value={{
            sportName, getSportName, getSportNameById, getSportNameByTitle, searchTerms, setSearchTerms
        }}>
            {props.children}
        </SportNameContext.Provider>
    )
}
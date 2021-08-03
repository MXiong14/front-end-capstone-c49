import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [searchTerms, setSearchTerms] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const addUser = userObj => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
    }

    const getUserById = (id) => {
        return fetch(`http://localhost:8088/users/${id}`)
          .then(res => res.json()) 
      }
    
    const updateUser = user => {
        return fetch(`http://localhost:8088/users/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
          .then(getUsers)
      }
    
      const setLoggedInState = (foo) => {
        setIsLoggedIn(foo)
      }
    
    
    return (
        <UserContext.Provider value ={{
            users, getUsers, addUser, searchTerms, setSearchTerms, updateUser, getUserById, setLoggedInState, isLoggedIn
        }}>
            {props.children}
        </UserContext.Provider>
    )
}
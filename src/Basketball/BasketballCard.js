import React from "react"
import { Link } from "react-router-dom"
import "./Basketball.css"
//this renders the cards one by one
export const BasketballCard = ({ basketball }) => (
    <section className="basketball">
        <h3 className="basketball_name">
          <Link to={ `/basketball/detail/${basketball.id}` }>
            { basketball.playerName }
          </Link>
        </h3>
        <div className="teamName"> {basketball.teamName}</div>
    </section>
)
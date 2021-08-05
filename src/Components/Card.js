import React from "react"
import { Link } from "react-router-dom"
import "./Styling.css"
//this renders the cards one by one
export const Card = ({ card }) => (
  <section className="card">
        <h3 className="sports_name">
          <Link to={ `/sports/detail/${card.id}` }>
            { card.playerName }
          </Link>
        </h3>
        <div className="teamName"> {card.teamName}</div>
    </section>
)
import React from "react"
import { Link } from "react-router-dom"
//this renders the cards one by one
export const BasketballCard = ({ basketball }) => (
    <section className="basketball">
        <h3 className="basketball_name">
          <Link to={ `/basketballs/detail/${basketball.id}` }>
            { basketball.playerName }
          </Link>
        </h3>
        <div className="teamName"> {basketball.teamName}</div>
    </section>
)
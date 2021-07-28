import React from "react"
import { Link } from "react-router-dom"
import "./Baseball.css"
//this renders the cards one by one
export const BaseballCard = ({ baseball }) => (
    <section className="baseball">
        <h3 className="baseball_name">
          <Link to={ `/baseball/detail/${baseball.id}` }>
            { baseball.playerName }
          </Link>
        </h3>
        <div className="teamName"> {baseball.teamName}</div>
    </section>
)
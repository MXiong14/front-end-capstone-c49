import React from "react"
import { Link } from "react-router-dom"
//this renders the cards one by one
export const BaseballCard = ({ baseball }) => (
    <section className="baseball">
        <h3 className="baseball_name">
          <Link to={ `/baseballs/detail/${baseball.id}` }>
            { baseball.playerName }
          </Link>
        </h3>
        <div className="teamName"> {baseball.teamName}</div>
    </section>
)
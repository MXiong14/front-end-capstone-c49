import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/baseball">Baseball</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/football">Football</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/basketball">Basketball</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/soccer">Soccer</Link>
            </li>
        </ul>
    )
}

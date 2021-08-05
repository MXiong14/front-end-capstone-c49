import React, {useContext, useEffect} from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import  { UserContext }  from "../Users/UserProvider"
import { UserCard } from "../Users/UserCard"

export const NavBar = (props) => {

    const { setLoggedInState, isLoggedIn } = useContext(UserContext);

    const history = useHistory();

    const Logout = () => {
      window.sessionStorage.clear();
      setLoggedInState(null);
      history.push("/");
    };

    return (
      <ul className="navbar">
        <li className="navbar__item active">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/baseball">
            Baseball
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/football">
            Football
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/basketball">
            Basketball
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/soccer">
            Soccer
          </Link>
        </li>
        <li className="navbar__item">
        </li>
        {!isLoggedIn ? (
          <li className="navbar__item">
            <Link className="navbar__link" to="/login">
              Login
            </Link>
          </li>
        ) : (
          <li className="navbar__item">
            <Link className="navbar__link" onClick={Logout} to="/">
              Logout
            </Link>
          </li>
        )}
      </ul>
    );
}

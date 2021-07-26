import React from "react"
import { Link } from "react-router-dom"

export const UserCard = ({ user }) => (
    <section>
        <Link to={`/users/detail/${user.id}`}>
            {user.name}
        </Link>
    </section>
)
import React from "react"
import { BaseballCard } from "./Baseball/BaseballCard"
import { BasketballCard } from "./Basketball/BasketballCard"
import { FootballCard } from "./Football/FootballCard"
import { SoccerCard } from "./Soccer/SoccerCard"
import "./Home.css"

export const Home = () => (
    <>
        <h2>Kard Kings</h2>
        <small>Bringing your collection to the web.</small>

        <h2>Sports</h2>
        <article className="baseballs">
            <BaseballCard />
        </article>    
        <article className="basketballs">
            <BasketballCard />
        </article>    
        <article className="footballs">
            <FootballCard />
        </article>
        <article className="soocers">
           <SoccerCard /> 
        </article>

        
    </>
)

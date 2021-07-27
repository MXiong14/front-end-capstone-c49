import React from "react"
import { BaseballCard } from "./Baseball/BaseballCard.js"
import { BasketballCard } from "./Basketball/BasketballCard.js"
import { FootballCard } from "./Football/FootballCard.js"
import { SoccerCard } from "./Soccer/SoccerCard.js"
import "./Home.css"

export const Home = () => (
    <>
        <h2>Kard Kings</h2>
        <p>Bringing your collection to the web.</p>

        <section className="sport_type">
            <article>
                <BaseballCard />
            </article>    
            <article>
                <BasketballCard />
            </article>    
            <article>
                <FootballCard />
            </article>
            <article>
                <SoccerCard /> 
            </article>
        </section>
    </>
);


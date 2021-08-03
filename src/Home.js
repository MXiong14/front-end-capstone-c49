import React from "react"
import "./Home.css"
import { PieChart } from 'react-minimal-pie-chart';

export const Home = () => (
  <>
    <h1>Kard Kings</h1>
    <p>Bringing your collection to the web.</p>

    <div className="pieChart">
      <PieChart
        data={[
          { title: "One", value: 20, color: "#E38627" },
          { title: "Two", value: 20, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
          { title: "Four", value: 20, color: "#7D3C98"}
        ]}
      />
      
    </div>
  </>
);


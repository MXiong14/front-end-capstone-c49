import React, { useContext, useEffect, useState } from "react";
import { CardsContext } from "./Provider/SportProvider";
import "./Home.css";
import { PieChart } from "react-minimal-pie-chart";
import { useParams } from "react-router-dom";
import { useTable } from "react-table";

export const Home = () => {
  const { getCards, getCardById } = useContext(CardsContext);
  const { cardId } = useParams();
  const [cardObj, setCard] = useState({});

  const data = React.useMemo(
    () => [
      {
        col1: "Purple",
        col2: "Basketball",
        col3: "5",
        col4: "27%",
      },
      {
        col1: "Red",
        col2: "Baseball",
        col3: "9",
        col4: "47%",
      },
      {
        col1: "Blue",
        col2: "Football",
        col3: "3",
        col4: "16%",
      },
      {
        col1: "Yellow",
        col2: "Soccer",
        col3: "2",
        col4: "10%",
      },
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Color",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Sport",
        accessor: "col2",
      },
      {
        Header: "Quantity",
        accessor: "col3",
      },
      {
        Header: "Percentage",
        accessor: "col4",
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    console.log(CardsContext);
    getCardById(cardId).then((response) => {
      setCard(response);
    });
  }, []);

  var sportName = [
    {
      id: 1,
      title: "Baseball",
    },
    {
      id: 2,
      title: "Soccer",
    },
    {
      id: 3,
      title: "Basketball",
    },
    {
      id: 4,
      title: "Football",
    },
  ];

  return (
    <>
      <html>
        <body className="bodyText">
          <h1>Kard Kings</h1>
          <h2>Welcome to your collection!</h2>

          <div className="graph">
            <section>
              <table
                {...getTableProps()}
                style={{ border: "solid 2px black" }}
                className="tableChart"
              >
                <h3></h3>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps()}
                          style={{
                            borderBottom: "solid 3px black",
                            background: "white",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              style={{
                                padding: "10px",
                                border: "solid 1px black",
                                background: "white",
                              }}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </section>

            <article className="pieChart">
              <h3 className="cardTitle">Total Cards </h3>
              <PieChart
                className=""
                data={[
                  { title: "Baseball", value: 20, color: "#CB4335" },
                  { title: "Football", value: 10, color: "#3498DB" },
                  { title: "Soccer", value: 5, color: "#F4D03F" },
                  { title: "Basketball", value: 15, color: "#7D3C98" },
                ]}
              />
            </article>

            <section className="x">
              <h3 className="addedTitle">Recently Added </h3>
              <img className="bryce" src="/bryceHarper.jpg" />
              <h4 className="playerName">Sport: Baseball </h4>
              <h4 className="sportName">Player Name: Bryce Harper </h4>
              <h4 className="teamName">Team Name: Washington Nationals </h4>
            </section>
          </div>
          <footer class="copyright">
            &copy; Kard Kings, All Rights Reserved
          </footer>
        </body>
      </html>
    </>
  );
};

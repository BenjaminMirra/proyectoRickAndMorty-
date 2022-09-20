import React, { useContext, useState } from "react";
import { LoggingContext } from "../../store/LoggingContext";
import CardList from "../CardList/CardList";
import "./main.css";

const Main = () => {
  const [data, setData] = useState();

  const { state } = useContext(LoggingContext)

  console.log(state)

  return (
    <div className="main">
      {state.isLoggedIn && state.isRegistered ? <CardList data={data} setData={setData} /> : <div>No estás logueado</div>}
    </div>
  );
};

export default Main;

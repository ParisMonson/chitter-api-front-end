/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import PeepView from "./components/PeepView";
const Api = require("./controllers/api");
// import "./App.css";
const api = new Api();

function App() {
  const [peeps, setPeeps] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getPeeps()
      .then((peeps) => {
        setPeeps(peeps);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });
  return <PeepView peeps={peeps} />;
}

export default App;

import './App.css';
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;

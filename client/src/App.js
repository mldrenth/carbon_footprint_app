import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import './App.css'

function App() {
  return (
    <div className="container" >
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

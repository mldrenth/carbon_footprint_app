import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";

function App() {

  return (
    <div className="container">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;

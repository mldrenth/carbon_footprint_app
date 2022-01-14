import { useEffect, useState } from "react";
import Header from "./components/Header";
import { getData } from "./components/ClimateService"


function App() {

  const [climateData, setClimateData] = useState([])
  useEffect(() => {
    getData().then((climateData) => {
      setClimateData(climateData);
    });
  }, []);

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;

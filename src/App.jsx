import { useState } from "react";
import "./App.css";
import { Sidebar, MainPage } from "./containers";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const changeStep = (newStep) => {
    setCurrentPage(newStep);
  }
  return (
    <div className="form__main">
      <Sidebar currentPage={currentPage} />
      <MainPage changeStep={changeStep} />
    </div>
  )
}

export default App

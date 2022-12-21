import { useState } from "react";
import "./App.css";
import { Sidebar, MainPage } from "./containers";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const changeStep = (newStep) => {
    setCurrentPage(newStep);
  }
  return (
    <div className="form__main">
      <Sidebar currentPage={currentPage} />
      <MainPage changeStep={changeStep} currentPage={currentPage} />
    </div>
  )
}

export default App

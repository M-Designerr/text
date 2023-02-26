import "./App.css"
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import Alert from "./components/Alert"
import React, { useState } from "react"

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#333"
      showAlert("Dark Mode has been Enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("light Mode has been Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TEXT" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  )
}

export default App

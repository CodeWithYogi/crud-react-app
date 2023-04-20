import Register from "./components/Register"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <main className="bg-light">
        <div className="inner-div">
          <Routes>
            <Route  path="/" element={<Register/>} />
            <Route path="/read" element={<SignIn/>} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App
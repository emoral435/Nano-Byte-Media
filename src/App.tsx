import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Home from "./components/Home/Home"


function App() {

  return (
    <BrowserRouter>
        <Routes>
          {/* SECTION these are the base screens the user will be presented with */}
          {/* NOTE this is where the user usually first lands when they click on the link. Shows the login and register screen, along with a continue as guest option */}
          <Route path='/' element={<div>this is startup screen</div>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          {/* SECTION this is the section where once the user traverses through the first section, they will have the home screen, and thus will be able to create chat logs
                        and other features that I will add later */}
          <Route path='/home' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

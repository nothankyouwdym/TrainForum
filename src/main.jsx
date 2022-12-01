import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from "./About"
import Rules from "./Rules"
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Rules" element={<Rules />}></Route>
        </Route>
      </Routes>
  </BrowserRouter>
)

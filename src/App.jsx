import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

class App extends Component{
  render(){
    return(
      <section>
        <Navbar />
        <Outlet />
      </section>
    )
  }
}

export default App
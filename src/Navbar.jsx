import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <span id="NavTitle">Train Forum</span>

        <span>Home</span>
        <span>About</span>
      </nav>
    )
  }
}

export default Navbar
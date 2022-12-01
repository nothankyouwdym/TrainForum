import React, { Component } from "react"
import {Link} from "react-router-dom"


class Navbar extends Component{
  render(){
    return(
      <nav>
        <span id="NavTitle">Train Forum</span>

        <span><Link to="/">Home</Link></span>
        <span><Link to="About">About</Link></span>
        <span><Link to="Rules">Rules</Link></span>
      </nav>
    )
  }
}

export default Navbar
import React, { Component } from "react"


class Mods extends Component{
  render(){
    return(
      <section>
        <h1 style={{textAlign: "center"}}></h1>

        <table>
          <tr>
            <th>Name</th>
            <th>Tier</th>
          </tr>
          <tr>
            <td>Mr.Patterson</td>
            <td>III</td>
          </tr>
          <tr>
            <td>Mr.Rodriguez</td>
            <td>III</td>
          </tr>
        </table>

        <p>
          <strong>
              The ranking system works like this: Teachers(Only accepted ones) get tier 1. O.P.S and people in the school who are higher up get tier 2 and finally principals, assistant principals and special people get tier 3.
          </strong>
        </p>
      </section>
    )
  }
}

export default Mods
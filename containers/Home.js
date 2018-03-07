import React, {Component} from "react";

import List from "./List"
import Filter from "./Filter";

export default class Home extends Component{
  render (){
    renturn(
      <div>
      <Filter/>
      <List/>
      </div>
    )
  }
}
import React, { Component } from "react";

export default class Item extends Component  ({content, complete}) {
  render(){
    return (<li>{content}</li>)
  }
}
import { ADD, DELETE, UNDO } from "../actions/ActionTypes";

const DEFAULT_LIST_STATE = {
  list: [
    {
      id: 1,
      content: "The first item",
      completed: false
    },
    {
      id: 2,
      content: "The second item",
      completed: true
    },
    {
      id: 3,
      content: "The third item",
      completed: false
    }
  ]
}

module.export = (state, action)=>{
  const state = state;
  switch(action.type){
    case ADD:
    case DELETE:
    case UNDO:
  }
}
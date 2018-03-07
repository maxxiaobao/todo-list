import { ADD, DELETE, UNDO } from './ActionTypes'

export function addItem (content) {
  return {
    type: ADD,
  content}
}

export function deleteItem (id) {
  return {
    type: DELETE,
  id}
}

export function undo (id) {
  return {
    type: UNDO,
  id}
}

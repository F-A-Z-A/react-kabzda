import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("collapsed should to be true", () => {
  // data
  const state: StateType = {
    collapsed: false
  }
  
  // action
  const newState = reducer(state, {type: TOGGLE_COLLAPSED})
  
  // expect
  expect(newState.collapsed).toBe(true)
})

test("collapsed should to be false", () => {
  const state: StateType = {
    collapsed: true
  }
  
  const newState = reducer(state, {type: TOGGLE_COLLAPSED})
  
  expect(newState.collapsed).toBe(false)
})

test("collapsed should to be faketype", () => {
  const state: StateType = {
    collapsed: true
  }
  
  expect(() => {
    reducer(state, {type: "FAKETYPE"})
  }).toThrowError()
})
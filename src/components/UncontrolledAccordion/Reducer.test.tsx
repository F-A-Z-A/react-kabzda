import { reducer, StateType, TOGGLE_COLLAPSED } from "./Reducer";

test("collapsed should to be true", () => {
  const state: StateType = {
    collapsed: false,
  };
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  expect(newState.collapsed).toBe(true);
});

test("collapsed should to be false", () => {
  const state: StateType = {
    collapsed: true,
  };
  const newState = reducer(state, { type: TOGGLE_COLLAPSED });
  expect(newState.collapsed).toBe(false);
});

test("throw Error", () => {
  const state: StateType = {
    collapsed: true,
  };

  expect(() => {
    reducer(state, { type: "FAKE-TYPE" });
  }).toThrowError();
});

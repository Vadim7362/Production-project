import { CounterSchema } from "../types/CounterSchema";
import { counterReducer, counterActions } from "./counterSlice";

describe('counterSlice.test', () => {
  test('decement', () => {
    const state: CounterSchema = {value: 10};

    expect(
      counterReducer(state, counterActions.decrement())
    ).toEqual({value: 9})
  });
  test('increment', () => {
    const state: CounterSchema = {value: 10};

    expect(
      counterReducer(state, counterActions.increment())
    ).toEqual({value: 11})
  });

  test('should work with empty state', () => {

    expect(
      counterReducer(undefined, counterActions.increment())
    ).toEqual({value: 1})
  });
});
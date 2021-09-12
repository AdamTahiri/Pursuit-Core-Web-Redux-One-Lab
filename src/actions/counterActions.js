import { DECREMENT, INCREMENT, INCREMENT_BY, INCREMENT_IF_EVEN, RESET } from "./actionTypes";

export const decrementCount = () => {
  return { type: DECREMENT };
};

export const incrementCount = () => {
  return { type: INCREMENT };
};

export const incrementCountBy = () => {
  return { amount: 0, type: INCREMENT_BY };
};

export const incrementOnlyIfEven = () => {
  return { type: INCREMENT_IF_EVEN };
};

export const resetCount = () => {
  return { type: RESET };
};
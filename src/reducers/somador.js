import { SOMAR } from "../actions/somador";

const initialState = {
  resultado: 0,
  valueA: 0,
  valueB: 0,
};

const somadorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SOMAR:
      return {
        valueA: payload.valueA,
        valueB: payload.valueB,
        resultado: Number(payload.valueA) + Number(payload.valueB),
      };
    default:
      return state;
  }
};

export default somadorReducer;

export const SOMAR = "SOMADOR::SOMAR";

export const somarSomador = (a, b) => ({
  payload: {
    valueA: a,
    valueB: b,
  },
  type: SOMAR,
});

// action pode receber params (a+b) ->

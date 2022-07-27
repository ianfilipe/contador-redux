import { useState } from "react";
import { connect } from "react-redux";
import { somarSomador } from "../../actions/somador";
import Resultado from "./resultado";

function Somador({ somar }) {
  const [numeroOne, setNumeroOne] = useState(0);
  const [numeroTwo, setNumeroTwo] = useState(0);
  return (
    <>
      <input
        type="number"
        onChange={(event) => {
          setNumeroOne(event.target.value);
        }}
      />
      <input
        type="number"
        onChange={(event) => {
          setNumeroTwo(event.target.value);
        }}
      />
      <button onClick={() => somar(numeroOne, numeroTwo)}>Somar</button>
      <Resultado />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  somar: (a, b) => dispatch(somarSomador(a, b)),
});

export default connect(null, mapDispatchToProps)(Somador);

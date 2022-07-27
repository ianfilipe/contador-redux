import { connect } from "react-redux";

function Resultado({ somador, valueA, valueB }) {
  return (
    <>
      {valueA} + {valueB} = {somador}
    </>
  );
}

const mapStateToProps = ({ somadorReducer }) => {
  return {
    somador: somadorReducer.resultado,
    valueA: somadorReducer.valueA,
    valueB: somadorReducer.valueB,
  };
};

export default connect(mapStateToProps)(Resultado);

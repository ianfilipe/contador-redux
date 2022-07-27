import { connect } from "react-redux";
import { decrementarContador, incrementarContador } from "./actions/contador";
import "./App.css";
import Somador from "./components/somador";

function App({ contador, incrementar, decrementar }) {
  return (
    <>
      <div className="App">Contador: {contador}</div>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>

      <div className="Somador">
        <Somador />
      </div>
    </>
  );
}

const mapStateToProps = ({ contadorReducer }) => {
  return {
    contador: contadorReducer.contador,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incrementar: () => dispatch(incrementarContador()),
  decrementar: () => dispatch(decrementarContador()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

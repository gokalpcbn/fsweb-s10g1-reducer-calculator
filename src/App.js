import React, { useState, useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { ADD_ONE, addOne, applyNumber, putOnScreen, changeOperation } from "./actions";

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);
  //dispatcher({type: 'topla', payload: 10 })

  // const onclickHandler = () => {
  //   dispatcher(addOne());
  // dispatcher({ type: ADD_ONE });
  // };

  const applyNumberHandler = (evt) => {
    let value = evt.target.value;
    //dispatcher({ type: "ekrana_bastir", payload: value });
    dispatcher(putOnScreen(value));
  };

  const changeOperationHandler = (evt) => {
    let value = evt.target.value;
    dispatcher(changeOperation(value));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={applyNumberHandler} />
              <CalcButton value={2} onClick={applyNumberHandler} />
              <CalcButton value={3} onClick={applyNumberHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyNumberHandler} />
              <CalcButton value={5} onClick={applyNumberHandler} />
              <CalcButton value={6} onClick={applyNumberHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyNumberHandler} />
              <CalcButton value={8} onClick={applyNumberHandler} />
              <CalcButton value={9} onClick={applyNumberHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={changeOperationHandler} />
              <CalcButton value={"*"} onClick={changeOperationHandler} />
              <CalcButton value={"-"} onClick={changeOperationHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

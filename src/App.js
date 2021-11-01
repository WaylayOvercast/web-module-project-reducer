import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/index'
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import  { applyNumber, changeOperation, clearDisplay, remember } from './actions/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState) 

  const handleMath =(int)=>{
   dispatch(applyNumber(int)) 
  }
  const handleOp =(op)=>{
    dispatch(changeOperation(op))
  }
  const handleClear =()=>{
    dispatch(clearDisplay())
  }
  const memorize =(opt)=>{
    dispatch(remember(opt))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}onClick={()=> memorize(1)}/>
              <CalcButton value={"MR"}onClick={()=> memorize(2)}/>
              <CalcButton value={"MC"}onClick={()=> memorize(3)}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> handleMath(1)}/>
              <CalcButton value={2} onClick={()=> handleMath(2)}/>
              <CalcButton value={3} onClick={()=> handleMath(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> handleMath(4)}/>
              <CalcButton value={5} onClick={()=> handleMath(5)}/>
              <CalcButton value={6} onClick={()=> handleMath(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> handleMath(7)}/>
              <CalcButton value={8} onClick={()=> handleMath(8)}/>
              <CalcButton value={9} onClick={()=> handleMath(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> handleOp('+')}/>
              <CalcButton value={"*"} onClick={()=> handleOp('*')}/>
              <CalcButton value={"-"} onClick={()=> handleOp('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> handleClear()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

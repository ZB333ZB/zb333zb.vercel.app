import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  setTo,
  reset,
  addSymbolAfter,
  addSymbolBefore,
  selectSymbolBefore,
  selectValue,
  selectSymbolAfter
} from './counterSlice';

const initialIncrementAmount = () => 1;
const initialSetToAmount = () => '';
const initialSymbolAfter = () => '';
const initialSymbolBefore = () => '';

export function Counter() {
  const result =
    (useSelector(selectSymbolBefore) ?? '')
    + String(useSelector(selectValue))
    + (useSelector(selectSymbolAfter) ?? '');
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(() => initialIncrementAmount());
  const [setToAmount, setSetToAmount] = useState(() => initialSetToAmount());
  const [symbolAfter, setSymbolAfter] = useState(() => initialSymbolAfter());
  const [symbolBefore, setSymbolBefore] = useState(() => initialSymbolBefore());

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{result}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <hr />
      <input
        type='text'
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>Add Amount</button>
      <hr />
      <input
        type="text"
        value={setToAmount}
        onChange={e => setSetToAmount(e.target.value)}
      />
      <button onClick={() => dispatch(setTo(Number(setToAmount) || 0))}>Set To</button>
      <hr />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <hr />
      <input
        type="text"
        value={symbolBefore}
        onChange={e => setSymbolBefore(e.target.value)}
      />
      <button onClick={() => dispatch(addSymbolBefore(String(symbolBefore)))}>Add Symbol Before</button>
      <hr />
      <input
        type="text"
        value={symbolAfter}
        onChange={e => setSymbolAfter(e.target.value)}
      />
      <button onClick={() => dispatch(addSymbolAfter(String(symbolAfter)))}>Add Symbol After</button>
    </div>
  )
}
import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  setTo,
  reset,
  addSymbolAfter,
  addSymbolBefore
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle'
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle increment by amount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });

  it('should handle setting to value', () => {
    const actual = counterReducer(initialState, setTo(10));
    expect(actual.value).toEqual(10);
  });

  it('should handle setting to 0', () => {
    const actual = counterReducer(initialState, reset());
    expect(actual.value).toEqual(0);
  });

  it('should add symbol after value', () => {
    const actual = counterReducer(initialState, addSymbolAfter('$'));
    expect(actual.value).toEqual('3$');
  });

  it('should add symbol before value', () => {
    const actual = counterReducer(initialState, addSymbolBefore('$'));
    expect(actual.value).toEqual('$3');
  });
});
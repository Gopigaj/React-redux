const initialState = {
  age: 21
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "clickInc") {
    newState.age++;
  }

  if (action.type === "clickDec") {
    newState.age--;
  }

  return newState;
};

export default reducer;

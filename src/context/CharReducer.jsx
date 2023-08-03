const CharReducer = (state, action) => {
  switch (action.type) {
    case "SET_CHAR":
        console.log("runn");
      return { characters: action.payload };
    default:
      return state;
  }
};

export default CharReducer;

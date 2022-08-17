const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numofIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofIcecreams--;
    },
    restocked: (state, actions) => {
      state.numofIcecreams += actions.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;

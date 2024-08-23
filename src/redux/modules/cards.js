import MOCK_DATA from "../../mock.js";

// Action Value
const ADD_POKEMON = "ADD_POKEMON";
const DELETE_POKEMON = "DELETE_POKEMON";

// Action Creator
export const addPokemon = (payload) => {
  return {
    type: "ADD_POKEMON",
    payload: payload,
  };
};

export const deletePokemon = (payload) => {
  return {
    type: "DELETE_POKEMON",
    payload: payload,
  };
};

// State Init
const initialState = MOCK_DATA;

// Reducer
const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return state.map((card) =>
        card.id === action.payload.id
          ? { ...card, isSelected: !card.isSelected }
          : card
      );
    case DELETE_POKEMON:
      return state.filter((card) => card.id !== action.payload.id);
    default:
      return state;
  }
};

export default cards;

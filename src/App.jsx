import React, { useState } from "react";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <>
      <GlobalStyle />
      <Router
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  );
};

export default App;

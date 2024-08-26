import React, { createContext,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PokeDex from "../pages/PokeDex";
import CardDetails from "../pages/CardDetails";

export const PokemonContext = createContext();

const Router = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/dex'
            element={
              <PokeDex/>
            }
          />
          <Route
            path='/details/:id'
            element={
              <CardDetails/>
            }
          />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  );
};

export default Router;

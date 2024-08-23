import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PokeDex from "../pages/PokeDex";
import CardDetails from "../pages/CardDetails";

const Router = ({ selectedPokemon, setSelectedPokemon }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/dex'
          element={
            <PokeDex
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
        <Route
          path='/details/:id'
          element={
            <CardDetails
              selectedPokemon={selectedPokemon}
              setSelectedPokemon={setSelectedPokemon}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

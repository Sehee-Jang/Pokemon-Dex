import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;

// 포켓몬 리스트를 보여주고, 각 포켓몬 카드를 클릭하면 대시보드에 추가할 수 있음
const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {
            onAddPokemon(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

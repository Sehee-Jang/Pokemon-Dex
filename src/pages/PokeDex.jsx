import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../mock.js";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// 포켓몬 도감 페이지
const PokeDex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    // {* 포켓몬을 선택하는 로직을 완성해봅시다 *}

    // 포켓몬을 선택할 때 이미 선택된 포켓몬이라면 alert 메시지를 띄우고, 최대 6개의 포켓몬만 선택할 수 있도록 alert로 사용자에게 알립니다.

    // 배열.find/ 배열.some
    if (selectedPokemon.id === pokemon.id) {
      return;
    }
    if (selectedPokemon.length >= 6) {
      return alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
    }

    // set을 완료되고 나서 리턴중....  검증을 먼저..!
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  const removePokemon = (pokemon) => {
    // {* 제거는 필터를 이용해 봅시다 *}
    setSelectedPokemon((prev) => prev.filter((p) => p.id !== pokemon.id));
  };

  return (
    <div>
      <DexContainer>
        <Dashboard
          selectedPokemon={selectedPokemon}
          onRemovePokemon={removePokemon}
        />
        <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
      </DexContainer>
    </div>
  );
};

export default PokeDex;

import React, { useContext } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../mock.js";
import { PokemonContext } from "../shared/Router.jsx";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

// 포켓몬 도감 페이지
const PokeDex = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  // 선택한 포켓몬을 대시보드에 추가
  const addPokemon = (pokemon) => {
    // 포켓몬을 선택할 때 이미 선택된 포켓몬이라면 alert 메시지를 띄우고, 최대 6개의 포켓몬만 선택할 수 있도록 alert로 사용자에게 알립니다.

    // 1. selectedPokemon에 새로 선택한 포켓몬이 이미 있는지 find()와 id를 이용해 확인
    const selectedCards = selectedPokemon.find((p) => p.id === pokemon.id);

    // 2. 이미 선택된 포켓몬인지 확인
    if (selectedCards) {
      alert("이미 선택된 카드입니다.");
      return;
    }

    // 3. 최대 6개 제한
    if (selectedPokemon.length >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return;
    }

    // 4. 포켓몬 추가
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  // 선택된 카드 제거
  const removePokemon = (pokemon) => {
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

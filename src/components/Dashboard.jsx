import React, { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../shared/Router.jsx";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const DashboardTitle = styled.h2`
  margin: 20px 0;
  color: #ff0000;
`;

const SelectedPokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const BeforeSelectContainer = styled.ul`
  display: grid;
  /* grid-template-columns: repeat(6, 1fr); */
  /* gap: 10px; */
  /* width: 100%; */
  /* justify-items: center; */
`;

const BeforeSelect = styled.li`
  width: 100px;
  height: 218px;
  background-color: #fff;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

// 선택한 6개의 포켓몬을 표시하고, 포켓몬을 선택 해제
const Dashboard = ({ onRemovePokemon }) => {
  const { selectedPokemon } = useContext(PokemonContext);

  const remainingCards = () => {
    const emptySlots = 6 - selectedPokemon.length;
    let emptyCardArray = [];
    for (let i = 0; i < emptySlots; i++) {
      emptyCardArray.push(
        <BeforeSelect key={i}>
          <img
            style={{ width: "50px", height: "50px" }}
            src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'
            alt='Poketball Image'
          />
        </BeforeSelect>
      );
    }
    return emptyCardArray;
  };
  // function repeatCard() {
  //   let emptyCardArray = [];
  //   for (let i = 0; i < 6; i++) {
  //     emptyCardArray.push(
  //       <BeforeSelect key={i}>
  //         <img
  //           style={{ width: "50px", height: "50px" }}
  //           src='https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'
  //           alt='Poketball Image'
  //         />
  //       </BeforeSelect>
  //     );
  //   }
  //   return emptyCardArray;
  // }
  return (
    <DashboardContainer>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>

      {/* <SelectedPokemons>
        {selectedPokemon.length === 0
          ? repeatCard()
          : selectedPokemon.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                onRemove={() => {
                  onRemovePokemon(pokemon);
                }}
                isSelected={true}
              />
            ))}
      </SelectedPokemons> */}
      <SelectedPokemons>
        {selectedPokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onRemove={() => {
            onRemovePokemon(pokemon);
          }}
          isSelected={true}
        />
        ))}
        {remainingCards()}
      </SelectedPokemons>
    </DashboardContainer>
  );
};

export default Dashboard;

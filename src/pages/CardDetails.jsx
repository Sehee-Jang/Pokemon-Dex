import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../mock.js";
import Button from "../components/Button.jsx";
import { useParams, useNavigate } from "react-router-dom";

const CustomButton = styled(Button)`
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #1a1a1a;
  transition: border-color 0.25s;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PokemonName = styled.h2`
  margin: 20px 0px;
  color: #ff0000;
`;

const PokemonInfo = styled.p`
  color: #000;
  margin: 16px 0;
`;

// 포켓몬 디테일 페이지
const CardDetails = () => {
  const navigate = useNavigate();

  const pokemonId = 1; // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.
  const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);

  const params = useParams();

  const targetPokemon = MOCK_DATA.find(function (pokemon) {
    return pokemon.id === Number(params.id);
  });

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <CardContainer>
      <img
        style={{ width: "200px", height: "200px" }}
        src={targetPokemon.img_url}
        alt={targetPokemon.korean_name}
      />
      <PokemonName>{targetPokemon.korean_name}</PokemonName>
      <PokemonInfo>타입: {targetPokemon.types.join(", ")}</PokemonInfo>
      <PokemonInfo>{targetPokemon.description}</PokemonInfo>
      <CustomButton
        style={{ marginTop: "20px" }}
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </CustomButton>
    </CardContainer>
  );
};

export default CardDetails;

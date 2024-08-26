import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/modules/cards";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s;
  }
`;

const PokemonInfo = styled.div`
  margin-top: 10px;
`;

const PokemonName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0px;
  color: black;
`;

const PokemonId = styled.p`
  font-size: 12px;
  color: #666;
  margin: 12px 0;
`;

// 각 포켓몬의 이미지, 이름, 타입을 표시하고 '추가' 또는 '삭제' 버튼을 제공
const PokemonCard = ({ pokemon, onAdd, onRemove, isSelected }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/details/${pokemon.id}`);
  };

  // handlers;
  const handleAdd = (e) => {
    e.stopPropagation(); //  이벤트 버블링 방지 : 하위요소에서 상위요소로의 이벤트 전파 방식 으로, 말그대로 HTML 구조상 자식요소에 발생한 이벤트가 상위의 부모요소에까지 영향을 미치는 것
    dispatch(addPokemon({ id: pokemon.id }));
    if (onAdd) onAdd();
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(deletePokemon({ id: pokemon.id }));
    if (onRemove) onRemove();
  };

  return (
    <Card onClick={goToDetail}>
      <img
        style={{ width: "100px", height: "100px" }}
        src={pokemon.img_url}
        alt={pokemon.korean_name}
      />
      <PokemonInfo>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonId>No. {pokemon.id}</PokemonId>
      </PokemonInfo>

      {isSelected ? (
        <Button
          $primary
          style={{ marginTop: "10px", padding: "5px 10px", fontSize: "12px" }}
          onClick={handleRemove}
        >
          삭제
        </Button>
      ) : (
        <Button
          type='button'
          $primary
          style={{ marginTop: "10px", padding: "5px 10px", fontSize: "12px" }}
          onClick={handleAdd}
        >
          추가
        </Button>
      )}
    </Card>
  );
};

export default PokemonCard;

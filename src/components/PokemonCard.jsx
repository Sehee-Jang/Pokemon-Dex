import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/modules/cards";
import { Link, useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
`;

const PokemonInfo = styled.p`
  margin-top: 10px;
`;

const PokemonName = styled.h2`
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
    // console.log("Adding:", pokemon); // 확인용 로그
    e.stopPropagation(); //  이벤트 버블링 : 부모컴포넌트에 이벤트가 걸리면 자식한테도
    dispatch(addPokemon({ id: pokemon.id }));
    if (onAdd) onAdd();
  };

  const handleRemove = () => {
    dispatch(deletePokemon({ id: pokemon.id }));
    if (onRemove) onRemove();
  };

  return (
    // <Link
    //   to={`/details/${pokemon.id}`}
    //   onClick={function (e) {
    //   }}
    // >
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
          onClick={() => {
            handleRemove(pokemon.id);
          }}
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
    // </Link>
  );
};

export default PokemonCard;

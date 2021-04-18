import React from "react";
import styled from "styled-components";

const Icontab = ({ Icon, Title }) => {
  return Icon ? (
    <Icon />
  ) : (
    <TextIcon>
      <h2>{Title}</h2>
    </TextIcon>
  );
};

export default Icontab;

const TextIcon = styled.a`
  font-size: 14px;
  cursor: pointer;
  font-weight: 300;
`;

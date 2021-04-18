import React from "react";
import Card from "./Card";
import api from "../../axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

const CardBody = ({ sportName }) => {
  const [dataState, setDataState] = useState([]);
  const [dateState, setDateState] = useState("");

  useEffect(() => {
    const importData = async () => {
      const request = await api.get(sportName);
      setDataState(request.data.list);
      setDateState(request.data.today);
    };
    importData();
  }, [sportName]);

  let cardBody = <CircularProgress color="secondary" />;

  if (dataState != null) {
    cardBody = dataState.map((res) => {
      // console.log(res);
      return (
        <Card
          key={res.id}
          MatchTitle={res.Matchtitle}
          Images={res.teamsImage}
          Country={res.Country}
          Competition={res.Competition}
          Time={`${res.Date} ( ${res.Matchtime} )`}
          Img={res.Img}
          Link={res.MatchLink}
          Date={dateState}
        />
      );
    });
  }
  return (
    <>
      <CardsBodyContainer>{cardBody}</CardsBodyContainer>
    </>
  );
};

export default CardBody;

//styles

const CardsBodyContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 50px;
  > div {
    margin: 20px;
  }
`;

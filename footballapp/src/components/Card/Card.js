import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const onButtonClickHandler = (link) => {
    // console.log(link);
  };
  // console.log(props.Images);
  const teamImage = props.Images.slice(0, 2).map((img) => <img src={img} />);
  return (
    <>
      <CardContainer>
        <img src={props.Img} />
        {teamImage}
        <h4> {props.MatchTitle}</h4>
        <h4> {props.Competition} </h4>
        <h4> {props.Country} </h4>
        <p> {props.Time} </p>
        <a href={props.Link}>
          <WatchNowButton onClick={() => onButtonClickHandler(props.MatchLink)}>
            <h3>WATCH NOW</h3>
          </WatchNowButton>
        </a>
      </CardContainer>
    </>
  );
};

export default Card;

const CardContainer = styled.div`
  padding: 15px;
  color: white;
  width: 350px;
  max-height: 320px;
  background-color: #151518;
  border-radius: 20px;
  box-shadow: rgb(4, 4, 4) 2px 4px 4px 2px;
  display: inline;
  opacity: 80%;
  box-sizing: border-box;

  > div:hover {
    opacity: 0.5;
  }

  > img {
    height: 40px;
    width: 40px;
    opacity: 100%;
    border-radius: 50%;
    margin: 10px;
  }

  > h3 {
    font-size: 25px;
    font-weight: 400;
    padding: 10px 10px;
    background-color: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > h4 {
    font-size: 16px;
    padding: 5px 10px;
    background-color: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > P {
    font-size: 16px;
    padding: 5px 10px;
    background-color: transparent;
  }

  :hover {
    opacity: 0.7;
  }
`;

const WatchNowButton = styled.button`
  margin: 20px;
  height: 60px;
  width: 80%;
  color: white;
  background-color: #151515;
  border-radius: 10px 60px;
  outline: none;
  box-shadow: rgb(4, 4, 4) 2px 4px 4px 2px;
  cursor: pointer;
  > h3 {
    font-size: 15px;
    padding: 10px 10px;
    background-color: transparent;
  }

  :hover {
    opacity: 0.7;
  }
`;

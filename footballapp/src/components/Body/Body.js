import React from "react";
import CardBody from "../Card/CardBody";
import Nav from "../Nav/Nav";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Body = () => {
  return (
    <>
      <BodyContainer>
        <HozLineArea>
          <Hozline />
          <GitHubIcon
            style={{
              height: "60px",
              width: "60px",
              color: "rgba(255, 255, 255, 0.7)",
              cursor: "pointer",
            }}
          />
          <Hozline />
        </HozLineArea>
        <SidebarOpener>
          <ArrowForwardIosIcon />
        </SidebarOpener>
        <Nav />
        <CardBody sportName="/livestreams" />
      </BodyContainer>
    </>
  );
};

export default Body;

const Hozline = styled.hr`
  width: 47%;
  margin: 0;
  opacity: 0.2;
`;

const BodyContainer = styled.div`
  position: relative;
  top: -20px;
  margin: 0px;
`;

const HozLineArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .MuiSvgIcon-root:hover {
    opacity: 0.7;
  }
`;

const SidebarOpener = styled.div`
  color: white;
  margin: 0px;
  padding: 0px;
  background-color: #151515;
  border-radius: 0 10px 10px 0;
  box-shadow: rgb(4, 4, 4) 2px 2px 2px 2px;
  height: 60px;
  width: 70px;
  position: fixed;
  top: 95px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  > .MuiSvgIcon-root:hover {
    opacity: 0.2;
  }
`;

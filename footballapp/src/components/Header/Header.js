import React from "react";
import styled from "styled-components";

import logo from "../../Images/white.png";
import avt from "../../Images/joe.jpg";

import IconTab from "./Icontab";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import EventNoteIcon from "@material-ui/icons/EventNote";

const Header = (props) => {
  return (
    <>
      {/* Header-container */}
      <HeaderContainer>
        <img src={logo} alt="joerush" />
        <LeftContainer>
          <LeftContainerFirst>
            <h3> BUY ME COFFEE</h3>
            <LocalCafeIcon />
          </LeftContainerFirst>
          <LeftContainerMid>
            <IconTab Icon={BookmarkIcon} />
            <IconTab Icon={AvTimerIcon} />
            <IconTab Icon={EventNoteIcon} />
          </LeftContainerMid>
          <LoginPoint>
            <LoginPointInside>
              <h3>1</h3>
              <img src={avt} alt="avt" />
            </LoginPointInside>
          </LoginPoint>
        </LeftContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
  margin: 5px 0;

  > img {
    width: 120px;
    height: 40px;
    margin: 0 20px;
    cursor: pointer;
  }

  > img:hover {
    opacity: 0.5;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
`;

const LeftContainerFirst = styled.div`
  color: #47ffa0;
  display: flex;
  align-items: center;
  margin: 0 30px;
  > .MuiSvgIcon-root {
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover {
    opacity: 0.5;
  }
`;

const LeftContainerMid = styled.div`
  display: flex;
  > .MuiSvgIcon-root {
    padding: 8px;
    cursor: pointer;
  }

  > .MuiSvgIcon-root:hover {
    opacity: 0.5;
  }
`;

const LoginPoint = styled.div`
  margin: 0 15px;
`;

const LoginPointInside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    height: 20px;
    width: 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  > img:hover {
    opacity: 0.5;
  }
`;

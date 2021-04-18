import React from "react";
import styled from "styled-components";
import IconTab from "../Header/Icontab";
import SearchIcon from "@material-ui/icons/Search";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import LinkTab from "./LinkTab";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <IconTab Icon={SearchIcon} />
        <IconTab Icon={OfflineBoltIcon} />
        <LinkTab link="/" title="Live" />
        <LinkTab link="/football" title="Football" />
        <LinkTab link="/cricket" title="Cricket" />
        <LinkTab link="/basketball" title="Basketball" />
        <LinkTab link="/hockey" title="Hockey" />
        <LinkTab link="/baseball" title="Baseball" />
      </NavContainer>
    </>
  );
};

export default Nav;

const NavContainer = styled.nav`
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  margin: 10px 15px 20px 70px;
  align-items: center;

  > a {
    margin: 0px 20px;
    cursor: pointer;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.5;
  }

  > a:hover {
    opacity: 0.8;
  }

  > a:active {
    opacity: 0.8;
  }

  > .MuiSvgIcon-root {
    margin: 0px 15px;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover {
    opacity: 0.8;
  }
`;

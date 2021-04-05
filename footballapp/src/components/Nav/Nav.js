import React from "react";
import styled from "styled-components";
import IconTab from "../Header/Icontab";
import SearchIcon from "@material-ui/icons/Search";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <IconTab Icon={SearchIcon} />
        <IconTab Icon={OfflineBoltIcon} />
        <IconTab Title="Football" />
        <IconTab Title="Cricket" />
        <IconTab Title="Basketball" />
        <IconTab Title="Hockey" />
        <IconTab Title="Baseball" />
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
  }

  > a:hover {
    opacity: 0.7;
  }

  > .MuiSvgIcon-root {
    margin: 0px 15px;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover {
    opacity: 0.7;
  }
`;

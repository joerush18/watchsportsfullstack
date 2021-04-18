import React from "react";
import IconTab from "../Header/Icontab";
import { NavLink } from "react-router-dom";

const LinkTab = ({ link, title }) => {
  return (
    <NavLink
      to={link}
      activeStyle={{
        opacity: "0.9",
      }}
    >
      <IconTab Title={title} />
    </NavLink>
  );
};

export default LinkTab;

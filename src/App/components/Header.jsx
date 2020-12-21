import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../styles/Header.scss";
import { ReactComponent as Notification } from "../icons/Notification.svg";

export const Header = (props) => {
  return (
    <div className="header">
      <div className="title">Money Matters</div>
      <div className="user-matters">
        <Button className="notification">
          <Notification />
        </Button>
        <Dropdown className="settings">
          <Dropdown.Toggle> Welcome Tyler</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "react-bootstrap";

import "../styles/Navigation.scss";
import { ReactComponent as Budget } from "../icons/Budget.svg";
import { ReactComponent as Goals } from "../icons/Goals.svg";
import { ReactComponent as Transactions } from "../icons/Transactions.svg";
export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="controls">
                <Button className="icon budget">
                    <Budget />
                </Button>

                <Button className="icon goals">
                    <Goals />
                </Button>

                <Button className="icon transactions">
                    <Transactions />
                </Button>
            </div>
        </div>
    );
};

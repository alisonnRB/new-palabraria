import React from "react";

import logo from '../../../drawble/abacaxiWhite.png';
export default function Header() {
    return (
        <header className="view-header">
            <img src={logo} className="content-logo" />
        </header>
    );
}
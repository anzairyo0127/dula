import * as React from "react";
import * as ReactDom from "react-dom";

import SideCards from "./side_cards/sideCards"
import Main from "./main/Main"

const columns = document.getElementById("columns");

ReactDom.hydrate([<SideCards />, <Main />], columns);

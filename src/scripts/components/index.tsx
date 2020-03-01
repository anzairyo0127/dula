import * as React from "react";
import * as ReactDom from "react-dom";

import Menu from "./menu/Menu";

ReactDom.hydrate(<Menu />, document.getElementById("menu"));

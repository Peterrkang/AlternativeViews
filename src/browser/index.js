import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "../shared/ContextProvider";

const cssContext = {
  insertCss: (...styles) => {
    const removeCss = styles.map(x => x._insertCss());
    return () => {
      removeCss.forEach(f => f());
    };
  }
};

hydrate(
  <BrowserRouter>
    <ContextProvider cssContext={cssContext} />
  </BrowserRouter>,
  document.getElementById("app")
);

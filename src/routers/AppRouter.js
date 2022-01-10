import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import { NasaProvider } from "../contexts/NasaProvider";

import Gallery from "../components/Gallery";
import NotFound from "../components/NotFound";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <BrowserRouter history={history}>
      {/* <NasaProvider> */}
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </NasaProvider> */}
    </BrowserRouter>
  );
};

export default AppRouter;

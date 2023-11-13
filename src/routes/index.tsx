import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Authentication from "../pages/authentication";
import Home from "../pages/home";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Authentication />} />
      <Route path="home" element={<Home />} />
    </ReactRouterRoutes>
  );
};

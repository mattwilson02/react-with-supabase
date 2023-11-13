import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Authentication from "../pages/authentication";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <>
            <Authentication />
          </>
        }
      />
    </ReactRouterRoutes>
  );
};

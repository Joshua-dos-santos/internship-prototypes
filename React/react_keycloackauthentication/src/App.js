import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import WelcomePage from "./Pages/Homepage";
import SecuredPage from "./Pages/Securedpage";
import PrivateRoute from "./Helpers/PrivateRoute";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;

import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "react-keycloak",
 clientId: "react-authentication",
});

export default keycloak;
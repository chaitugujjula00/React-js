import { createContext } from "react";

const UserContext = createContext({
        loggedInUser:"DUMMY USER",
});

export default UserContext;
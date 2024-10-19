import { createContext } from "react";

const UserContext=createContext();
const UserProvider=({children})=>{
    const user={name:"praneeth"};
    return (<UserContext.Provider value={user}>
        {children}

    </UserContext.Provider>)
}
export { UserContext, UserProvider };

import { useContext } from "react";
import { UserContext } from "./Usercontext";

export const UserProfile = () => {
    const user = useContext(UserContext);

    if (!user) {
        return <div>Loading...</div>; 
    }

    return (
        <div>User Name: {user.name}</div>
    );
};

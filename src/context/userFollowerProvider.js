import { UserFollowerContex } from "./context";
import { getCollection} from '../services/getData';
import { useState } from 'react';
import { useEffect } from 'react';


function UserFollowerProvider({children}) {
    const [userFollower, setUserFollower] = useState([]);
    console.log(userFollower);
    useEffect(() => {
        getCollection(setUserFollower, 'userFollower');
    }, []);
    return (
        <UserFollowerContex.Provider value={userFollower}>
            {children}
        </UserFollowerContex.Provider>
    )
}

export default UserFollowerProvider;
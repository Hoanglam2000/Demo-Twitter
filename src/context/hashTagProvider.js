import { HashTagContex } from "./context";
import { getCollection} from '../services/getData';
import { useState } from 'react';
import { useEffect } from 'react';


function HashTagProvider({children}) {
    const [hashTags, setHashTags] = useState([]);
    console.log(hashTags);
    useEffect(() => {
        getCollection(setHashTags, 'trending');
    }, []);
    return (
        <HashTagContex.Provider value={hashTags}>
            {children}
        </HashTagContex.Provider>
    )
}

export default HashTagProvider;
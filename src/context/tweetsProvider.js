import { TweetsContex } from "./context";
import { getCollection} from '../services/getData';
import { useState } from 'react';
import { useEffect } from 'react';


function TweetsProvider({children}) {
    const [dataTweets, setdataTweets] = useState([]);
    useEffect(() => {
        getCollection(setdataTweets, 'tweets');
    }, []);
    return (
        <TweetsContex.Provider value={dataTweets}>
            {children}
        </TweetsContex.Provider>
    )
}

export default TweetsProvider;
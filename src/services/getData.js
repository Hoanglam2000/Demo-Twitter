import { db } from '../config/firebase.config';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

export const getCollection = async (setData, collectionName) => {
    const getData = await getDocs(collection(db, collectionName));
    getData.forEach((doc) => {
        setData( prev => [...prev, doc.data()]);
    });

};
export const addTweet = async (collection, tweet, docID) => {
    await setDoc(doc(db, collection, docID), tweet);
    // await db.collection(collection).doc(doc).set(tweets);
};

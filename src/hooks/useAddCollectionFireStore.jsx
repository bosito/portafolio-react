import { useEffect, useState } from "react";
import { collection, doc, setDoc } from 'firebase/firestore';
import db from '../core/fireBase.js';

export default function useAddCollectionFireStore() {
    const [colectionDate, setColectionDate] = useState({});

    useEffect(() => {

        (async () => {
            if (Object.keys(colectionDate).length > 0) {
                const citiesRef = collection(db, "message_contactos");
                setDoc(doc(citiesRef), {
                    ...colectionDate
                })
            };
        })();

    }, [colectionDate]);

    const addCollection = (collection) => setColectionDate(collection);

    return {
        addCollection: addCollection
    };
};
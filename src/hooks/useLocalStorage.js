import { useEffect, useState } from 'react';

/**
 * Hook personalizado para gestionar localstorage
 * @param {*} key
 * @param {*} defaultValue
 * @returns Estado de lo que vayamos a meter en localstorage
 */
const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            if (item !== null) {
                return JSON.parse(item);
            }
            return defaultValue;
        } catch (error) {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;

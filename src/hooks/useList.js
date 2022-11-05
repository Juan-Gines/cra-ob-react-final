import { useState } from 'react';

/**
 * Hook personalizado para gestionar listas
 * @param {array} initialValue
 * @returns funcionalidades: value, item, editItem, remove, push, isEmpty
 */

const useList = (
    initialValue = [],
    ) => {
    const [value, setValue] = useState(initialValue);
    const [item, setItem] = useState('');    

    /**
     * Editamos el nuevo elemento en el array
     * @param {string} item
     */
    const editItem = (itemEdit) => {
        setItem(itemEdit);
    };

    /**
     * Guardamos el nuevo elemento en la lista
     */
    const push = () => {
        setValue((oldValue) => [...oldValue, { texto: item, completed: false }]);
        setItem('');
    };

    /**
     * Borramos un elemento de la lista
     * @param {number} index
     */
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    /**
     * Comprobamos si hay elementos en la lista
     * @returns {boolean}
     */
    const isEmpty = () => value.length === 0;

    /**
     * Cambia el valor de completed de una tarea entre true y false
     * @param {number} index
     */
    const toggleCompleted = (index) => {
        const newValue = value;
        newValue[index].completed = !newValue[index].completed;
        setValue([...newValue]);
    };

    // TODO: Develop more functions for lists

    return {
        value,
        item,
        push,
        remove,
        isEmpty,
        editItem,
        toggleCompleted,
    };
};

export default useList;

import { useState } from 'react';
import { addTask, completeTask, getTasks } from '../firebase/taskController';

/**
 * Hook personalizado para gestionar listas
 * @param {array} initialValue
 * @returns funcionalidades: value, item, editItem, remove, push, isEmpty
 */

const useList = (initialValue = []) => {
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
		if (item === '') return;
		// Vamos a añadir una nueva tarea a la base de datos
		addTask({ task: item, completed: false })
			.then(() => {
				getAll();
			})
			.catch((e) => console.error(e))
			.finally(() => setItem(''));
		// Cuando se haya añadido -> Mostraremos todas dentro del estado

		//setValue((oldValue) => [...oldValue, { texto: item, completed: false }]);
		//setItem('');
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
        const task = value.find(t=>t.id === index);
        completeTask(task)
            .then(()=>getAll());
        
		/* const newValue = value;
		newValue[index].completed = !newValue[index].completed;
		setValue([...newValue]); */
	};

	const getAll = () => {
		getTasks()
			.then((values) => {
				setValue(values);
			})
			.catch((e) => console.error(e));
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
		getAll,
	};
};

export default useList;

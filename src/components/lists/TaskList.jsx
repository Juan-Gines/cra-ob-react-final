import React from 'react';
import useList from '../../hooks/useList';
import { motion } from 'framer-motion';


/**
 * Componente que gestiona la lista de tareas
 * @returns {React.Component}
 */

const TaskList = ({ showSettings, setShowSettings}) => {
    const {
      value, item, editItem, isEmpty, push, toggleCompleted,
    } = useList([
    ]);    

    return (
			<>
				<header className='flex justify-between'>
					<h1 className='text-3xl text-sky-700 font-semibold dark:text-sky-300'>Task List - Hosted on: Firebase</h1>
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='btn'
						onClick={() => setShowSettings(!showSettings)}
					>
						{showSettings ? 'Show Settings' : 'Hide Settings'}
					</motion.button>
				</header>
				<div className='my-4'>
					<input
						value={item}
						className='shadow py-1 px-2 rounded-lg outline-none hover:bg-sky-200 transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-700'
						onChange={(e) => editItem(e.target.value)}
						placeholder='New Task'
						type='text'
						onKeyDown={(e) => e.key === 'Enter' && push()}
					/>
					<button
						type='button'
						onClick={push}
						className='btn'
					>
						Create Task
					</button>
				</div>
				{isEmpty() ? (
					<p>Task List is Empty</p>
				) : (
					<ul>
						{value.map((task, index) => (
							<motion.li 
								initial={{ x: '100vw'}} 
								animate={{ x: '0' }}
								transition={{ duration: '.3'}}
								key={index}>
								<label>
									<input
										type='checkbox'
										onClick={() => toggleCompleted(index)}
										checked={task.completed}
									/>
									<span
										className={`ml-2 text-gray-800 dark:text-gray-100 text-sm italic ${
											task.completed && 'line-through'
										}`}
									>
										{task.texto}
									</span>
								</label>
							</motion.li>
						))}
					</ul>
				)}
			</>
		);
  };

export default TaskList;

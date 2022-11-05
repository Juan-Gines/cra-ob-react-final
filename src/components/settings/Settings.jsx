import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

const Settings = ({ toggleDark }) => {
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    /**
     * Función para cambiar light <- -> dark
     */
    const toggleSettings = () => {
        setConfig((oldConfig) => (
            {
                ...oldConfig,
                theme: oldConfig.theme === 'light' ? 'dark' : 'light',
            }
        ));
        toggleDark();
    };

    return (
			<div className='text-right'>
				<hr className='my-5' />
				<h1 className='text-3xl text-cyan-800 font-semibold dark:text-cyan-400 mb-4'>
					APP SETTINGS
				</h1>
				<p className='text-sm mb-2'>
					{' '}
					Actual Config: <span className='italic'>{config.theme}</span>
				</p>
				<button
					className='btn'
					type='button'
					onClick={toggleSettings}
				>
					Toggle DarkMode
				</button>
			</div>
		);
};

export default Settings;

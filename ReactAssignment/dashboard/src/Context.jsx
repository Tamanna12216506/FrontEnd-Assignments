import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [theme, setTheme] = useState('light');
	const [userName, setUserName] = useState('');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const savedLogin = localStorage.getItem('isLoggedIn');
		const savedName = localStorage.getItem('userName');

		if (savedTheme) {
			setTheme(savedTheme);
		}

		if (savedLogin === 'true') {
			setIsLoggedIn(true);
		}

		if (savedName) {
			setUserName(savedName);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const login = (name) => {
		setIsLoggedIn(true);
		setUserName(name);
		localStorage.setItem('isLoggedIn', 'true');
		localStorage.setItem('userName', name);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUserName('');
		localStorage.removeItem('isLoggedIn');
		localStorage.removeItem('userName');
	};

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<AppContext.Provider
			value={{
				isLoggedIn,
				login,
				logout,
				theme,
				toggleTheme,
				userName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error('useAppContext must be used inside AppProvider');
	}
	return context;
}

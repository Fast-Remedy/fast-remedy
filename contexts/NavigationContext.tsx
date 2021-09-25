import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { isIOS } from 'react-device-detect';

interface INavigation {
	home: boolean;
	search: boolean;
	orders: boolean;
	profile: boolean;
}

interface IStoreNavigation {
	home: boolean;
	orders: boolean;
	catalog: boolean;
	profile: boolean;
}

interface INavigationContextData {
	installMessage: boolean;
	setInstallMessageState: (state: boolean) => void;
	navigation: INavigation;
	setNavigationState: (state: object) => void;
	storeNavigation: IStoreNavigation;
	setStoreNavigationState: (state: object) => void;
}

export const NavigationContext = createContext({} as INavigationContextData);

interface INavigationProps {
	children: ReactNode;
}

export function NavigationContextProvider({ children }: INavigationProps) {
	const [installMessage, setInstallMessage] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (isIOS) {
				setInstallMessage(true);
			}
		}, 400);
	}, []);

	function setInstallMessageState(state: boolean) {
		if (isIOS) {
			setInstallMessage(state);
		}
	}

	const [navigation, setNavigation] = useState<INavigation>({
		home: true,
		search: false,
		orders: false,
		profile: false,
	});

	function setNavigationState(state: INavigation) {
		setNavigation(state);
	}

	const [storeNavigation, setStoreNavigation] = useState<IStoreNavigation>({
		home: true,
		orders: false,
		catalog: false,
		profile: false,
	});

	function setStoreNavigationState(state: IStoreNavigation) {
		setStoreNavigation(state);
	}

	return (
		<NavigationContext.Provider
			value={{
				setInstallMessageState,
				installMessage,
				navigation,
				setNavigationState,
				storeNavigation,
				setStoreNavigationState,
			}}
		>
			{children}
		</NavigationContext.Provider>
	);
}

export const useNavigation = () => {
	return useContext(NavigationContext);
};

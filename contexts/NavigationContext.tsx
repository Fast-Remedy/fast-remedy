import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from 'react';
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
	setInstallMessageState: () => void;
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
	const [isInStandaloneMode, setIsInStandaloneMode] = useState(false);

	function isPwa() {
		return ['fullscreen', 'standalone', 'minimal-ui'].some(
			displayMode =>
				window.matchMedia('(display-mode: ' + displayMode + ')').matches
		);
	}

	useEffect(() => {
		if (isPwa()) {
			setIsInStandaloneMode(true);
		}
		if (isIOS && !isInStandaloneMode) {
			setInstallMessage(true);
		}
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if ('standalone' in window.navigator && window.navigator.standalone) {
				setIsInStandaloneMode(true);
			}
			if (isIOS && !isInStandaloneMode) {
				setInstallMessage(true);
			}
		}, 60000);
		return () => clearInterval(interval);
	}, [installMessage]);

	function setInstallMessageState() {
		setInstallMessage(false);
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

import React from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./global";
import Theme from "./theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={Theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};

export default App;

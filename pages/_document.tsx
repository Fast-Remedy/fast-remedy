import React from 'react';
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentInitialProps,
	DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang='pt-br'>
				<Head>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/manifest.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#00c2b2' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-title' content='FastRemedy' />
					<meta name='application-name' content='FastRemedy' />
					<meta name='msapplication-TileColor' content='#00c2b2' />
					<meta name='theme-color' content='#00c2b2' />
					<link
						href='/splashscreens/iphone5_se1_splash.png'
						media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphone6_6s_7_8_se2_splash.png'
						media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphone6plus_6splus_7plus_8plus_splash.png'
						media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphonex_xs_11pro_12mini_splash.png'
						media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphonexr_11_splash.png'
						media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphonexsmax_11promax_splash.png'
						media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphone12_12pro_splash.png'
						media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/iphone12promax_splash.png'
						media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/ipad_splash.png'
						media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/ipadpro1_splash.png'
						media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/ipadpro3_splash.png'
						media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link
						href='/splashscreens/ipadpro2_splash.png'
						media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
						rel='apple-touch-startup-image'
					/>
					<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
					<link rel='icon' href='/favicon.ico' type='image/x-icon' />
					<link
						href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css'
						rel='stylesheet'
						integrity='sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

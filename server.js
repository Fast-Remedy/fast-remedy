import next from 'next';
import express from 'express';
import sslRedirect from 'heroku-ssl-redirect'; // to make it work with 'require' keyword.

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Express's middleware to automatically redirect to 'https'.
	server.use(sslRedirect());

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(port, err => {
		if (err) throw err;

		console.log(`Server starts on ${PORT}.`);
	});
});

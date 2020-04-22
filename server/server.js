const path = require('path');
const express = require('express');
const fs = require('fs');
const util = require('util');
const app = express();
const PORT = 3000;

/*
* @ Request Body Parsing Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/*
* @ Handling static files
* */
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


console.log('I go the message')

if(process.env.NODE_ENV === 'production') {
	app.use('/build', express.static(path.join(__dirname, '../build')));
} else {
	app.use('/assets', express.static('./client/assets'));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/index.html'))
	});
}

app.post('/send_report', async (req, res) => {
	const post = req.body;
	const dataLocation = `${ __dirname }/data/posts.json`;
	const data = await readFile(`${ __dirname }/data/posts.json`, 'utf-8');
	await writeFile( dataLocation, [...data, post]);
	await res.status(200).send(JSON.stringify(post));
})


app.use((err, req, res, next) => {
	const defaultError = {
		log: 'Express middleware error',
		status: 400,
		message: {err: 'An error occurred'}
	};
	const generalError = Object.assign({}, defaultError, err);
	console.log(generalError);
	return res.status(defaultError.status).json(defaultError.message);
})

app.listen(PORT, () => console.log(`Listening to ${PORT}`));

module.exports = app;

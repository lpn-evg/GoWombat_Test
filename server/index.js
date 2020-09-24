const jsonServer = require('json-server')
const fs = require('fs')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3001

server.use(jsonServer.bodyParser)
server.use(middlewares)

const data = require('./users/db.json')

server.get('/users', (request, response) => {
	let text = fs.readFileSync(__dirname + '/users/db.json', 'utf8')

	response.status(200).jsonp(JSON.parse(text))
});

server.post('/change', (request, response) => {
	const { users } = data;
	const { obj } = request.body;

	const newData = users.map((item) => {
		if (item.id === obj.id) {
			item = obj
		}
		return item;
	});

	fs.writeFile(__dirname + '/users/db.json', JSON.stringify({ users: newData }), (e) => console.log(e))
	response.status(200).jsonp({ users: newData });

});




server.listen(port, () => {
	console.log('JSON Server is running')
})
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
// server.use(router)

server.get('/login.json', (req, res) => {
    res.jsonp({
        status: 200
    });
});

server.listen(3001, () => {
    console.log('JSON Server is running')
})
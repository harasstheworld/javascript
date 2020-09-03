## Getting Started Express Javascript

$ mkdir myapp
$ cd myapp

*Init command to create a package.json*
$ npm init
*then*
> npm install express --save
> npm install express --no-save

### Hello World Express Framework
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello, World!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
```
*then*
$ node app.js

### Hello World Node Javascript
```javascript
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/plain')
    res.end('Hello, World!\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})
```
*then*
node hello-world.js


### Use Express Generator

$ npm install -g express-generator
$ express --ejs --view=ejs myapp
$ cd myapp
$ npm install

### Basic Routing

> app.METHOD(PATH, HANDLER)

```javascript
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => res.send('Got a POST request'))
app.put('/user', (req, res) => res.send('Got a PUT request at /user'))
app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'))
app.use(function(req, res, next) {
    res.status(404).send("Sorry can't find that!")
})
app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
```

### Serving Static Files

> express.static(root, [option])
app.use(express.static('public'))

*Now, you can load the files that are in the public directory:*
* http://localhost:3000/images/kitten.jpg
* http://localhost:3000/css/style.css
* http://localhost:3000/js/app.js
* http://localhost:3000/images/bg.png
* http://localhost:3000/index.html

app.use(express.static('public'))
app.use(express.static('files'))
app.use('/static', express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))


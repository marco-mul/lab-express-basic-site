const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.use(express.static('public'))



app.get('/home', (request, response, next) =>
  response.render('index.hbs')
)

app.get('/about', (request, response, next) =>
  response.render('about.hbs')
)

app.get('/works', (request, response, next) =>
  response.render('works.hbs')
)

app.listen(3002, () => console.log('My first app listening on port 3002!'))


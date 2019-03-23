const express = require('express')
const path = require('path')

const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const bodyParser = require('body-parser')
const errorController = require('./controllers/error')

const app = express()
app.set('view engine', 'ejs')

app.use(express.static(path.resolve('public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin', adminRoute)
app.use(shopRoute)

app.use(errorController.show)

app.listen(3000)
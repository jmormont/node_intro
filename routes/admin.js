
const productsController = require('../controllers/products')

const router = exports = module.exports = require('express').Router()

router.get('/add-product', productsController.create)

router.post('/add-product', productsController.store)
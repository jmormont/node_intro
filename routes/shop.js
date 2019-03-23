const router = exports = module.exports = require('express').Router()
const path = require('path')
const url = require('url')
const productsController = require('../controllers/products')

router.get('/', productsController.show)
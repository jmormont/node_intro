//const products = []
const Product = require('../models/product')

const url = require('url')

module.exports.show = exports.show = (req, res) => {
  //console.log('shop.js', products)
  Product.fetchAll((products => {
    res.render('shop',
    {
      prods: products,
      title: 'Shop',
      path: url.parse(req.originalUrl).pathname
    })
  }))
}

module.exports.create = exports.create = (req, res) => {
  res.render('add-product', {
    title: 'Add Product',
    path: url.parse(req.originalUrl).pathname
  })
}
module.exports.create = exports.create = (req, res) => {
  res.render('add-product', {
    title: 'Add Product',
    path: url.parse(req.originalUrl).pathname
  })
}

module.exports.store = exports.store = (req, res) => {
  let product = new Product(req.body.title)
  product.save(() => {
    res.redirect('/')
  })
}
const fs = require('fs')
const path = require('path')
const productPath = path.resolve('products.json')

var readProducts = (callback) => {
  fs.readFile(productPath, (error, data) => {
    if (!error) {
      callback(JSON.parse(data))
    }
    else {
      callback([])
    }
  }) 
}

module.exports = exports = class Product {
  constructor (title) {
    this.title = title
  }

  save (callback) {
    readProducts((products) => {
      products.push(this)
      fs.writeFile(productPath, JSON.stringify(products), callback)
    })
  }

  static fetchAll(callback) {
    readProducts(callback)
  }
}
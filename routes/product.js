var express = require('express');
var ProductsController = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');
var _ = require('lodash');

/* GET home page. */
ProductsController.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

ProductsController.get('/products', function(req, res, next){
  Product.find({}).populate('category').exec(function (err, products) {
     if (err) return res.json(err);
     return res.json(products);
  })
});

ProductsController.post('/products', function(req, res, next){
  Product.create(req.body, function(err, product){
    if (err) return res.json(err);
    return res.json(product);
  });
})

ProductsController.get('/products/:id', function(req, res, next){
  Product.findOne({_id: req.params.id}).populate('category').exec(function (err, product) {
    if (err) return res.json(err);
    return res.json(product);
  });
})

ProductsController.put('/products/:id', function(req, res, next){
  Product.findById(req.params.id, function(err, product){
    if (req.body.name) product.name = req.body.name;
    if (req.body.description) product.description = req.body.description;
    if(req.body.category) product.categories = req.body.category;
    product.save(function(err, product){
      if(err) return res.sendStatus(400);
      return res.json(product);
    });
  })
})

ProductsController.post('/products/:id/attributes', function(req, res, next){
  Product.findById(req.params.id, function(err, product){
    product.attrs.push({name: req.body.name, value: req.body.value})
    product.save(function(err, product){
      if(err) return res.json(err);
      return res.json(product);
    });
  })
})

ProductsController.put('/products/:id/attributes/:idAttr', function(req, res, next){
  Product.findById(req.params.id, function(err, product){
    var attr = product.attrs.id(req.params.idAttr);
    attr.value = req.body.value;

    product.save(function(err, product){
      if(err) return res.json(err);
      return res.json(product);
    });
  })
})
module.exports = ProductsController;

var express = require('express');
var CategoriesController = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');
var Category = require('../models/category');
var _ = require('lodash');

CategoriesController.get('/', function(req, res, next) {
  Category.find(function(err, categories){
    if (err) return res.json(err);
    return res.json(categories);
  })
});

CategoriesController.post('/', function (req, res, next) {
  Category.create(req.body, function (err, category) {
    if (err) return res.json(err);
    return res.json(category);
  })
});

CategoriesController.put('/:id', function (req, res, next) {
  Category.findById(req.params.id, function(err, category){
    category.name = req.body.name;
    category.save(function (err, category) {
      if (err) return res.sendStatus(400);
      return res.json(category);
    })
  })
});



module.exports = CategoriesController;

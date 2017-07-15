'use strict'

//dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create instances
const app = express()
const router = express.Router()

//set port to env var or default
const port = process.env.API_PORT || 3001

//use bodyParser to look for json data in request
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Acess-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  //clear cache so most recent entries appear
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

//set route path and initialize API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized' })
})

//use router config when calling /api
app.use('/api', router)

//starts server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
})

const { Customer, validate } = require('../models/customer');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
  });
  
  router.post('/', async (req, res) => {
      const result = validate(req.body);
      if (result.error) {
          res.status(400).send(result.error.details[0].message);
          return;
      }
  
    let customer = new Customer({
      name: req.body.name,
      phone: req.body.phone,
      isGold: req.body.isGold
    });
    customer = await customer.save();
    res.send(customer);
  });

  router.get('/:id', async (req, res) => {
    const customer = await Customer.findById();

    if(!customer) {
      res.status(404).send('The customer was not fount');
      return;
      }
    res.send(customer);
  });
  
  router.put('/:id', async (req, res) => {
    const result = validate(req.body);
      if (result.error) {
          res.status(400).send(result.error.details[0].message);
          return;
      }
        
    const customer = await Customer.findByIdAndUpdate(req.params.id, 
        { 
            name: req.body.name, 
            phone: req.body.phone, 
            isGold: req.body.isGold
        }, 
            { new: true }
        );

      if(!customer) { 
          res.status(404).send('The customer was not fount')
          return;
      }

      res.send(customer);
  });
  
  
  router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if(!customer) {
          res.status(404).send('The customer was not fount');
          return;
      }
      res.send(customer);
  });
  
  module.exports = router;
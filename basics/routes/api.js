
const routes = require('express').Router();

// REDIS
const redis = require('redis');
let client = redis.createClient(6379, '192.168.44.81', {});
  
// Task 1 ===========================================

// Task 2 ============================================

module.exports = routes;

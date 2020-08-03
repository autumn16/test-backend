const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { 
  res.status(200).json({
    message: 'Handling GET from health'
  })
})

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Handling POST from health'
  })
})

module.exports = router
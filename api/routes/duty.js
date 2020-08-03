const express = require('express')
const router = express.Router()
const cors = require('cors')
const admin = require('../../firebase')

router.use(cors())

// FIREBASE DATABASE HANDLING

let database = admin.database().ref('/')

router.get('/', (req, res) => {
  database.once('value').then(snapshot => {
    res.json({
      duty: snapshot.val()
    })
  })  
})

router.post('/', async (req, res) => {
  const duty = {
    dutyName: req.body.dutyName,
    dutyDetail: req.body.dutyDetail,
  }
  res.status(201).json({
    //product: 'Handling POST method request to /duty',
    duty: duty,
  })
  await database.set({
    dutyName: req.body.dutyName,
    dutyDetail: req.body.dutyDetail,
  })
})

router.get('/:dutyId', (req, res) => {
  const id = req.params.dutyId
  if(id === '16092000'){
    res.status(202).json({
      message: 'This is special id',
      id: id,
    }) 
  } else {
    res.status(203).json({
      message: 'This is a normal id',
      id: id,
    })  
  }
})

module.exports = router
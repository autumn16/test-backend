const express = require('express')
const router = express.Router()
const cors = require('cors')
const admin = require('../../firebase')

router.use(cors())

const duty = {
  //msg: 'Handling GET method request to /duty',
  dutyName: 'SSS',
  dutyDetail: 'SS',
}

// FIREBASE DATABASE HANDLING

let database = admin.database().ref('/')
const snapshot = database.once('value').then(snapshot => {
  duty.dutyName = snapshot.child('dutyName').val()
  duty.dutyDetail = snapshot.child('dutyDetail').val()
})

router.get('/', (req, res) => {
  res.status(200).json({
    duty: duty,
  })
})

router.post('/', async (req, res) => {
  const duty = {
    dutyName: req.body.dutyName,
    dutyDetail: req.body.dutyDetail,
  }
  res.status(200).json({
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
    res.status(200).json({
      message: 'This is special id',
      id: id,
    }) 
  } else {
    res.status(200).json({
      message: 'This is a normal id',
      id: id,
    })  
  }
})

module.exports = router
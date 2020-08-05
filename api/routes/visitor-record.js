// Router
const router = require('express').Router()
    // Database 
const database = require('../../database')

let visitorRecordDatabase = database.child('visitorRecord')

class VisitorRecord {
    /**
     * @param {string} name 
     * @param {string} detail 
     */
    constructor(name, detail) {
        this.name = name
        this.detail = detail
    }
}

// GET = lay du lieu
// POST = them du lieu moi
// PUT = chinh sua du lieu
// DELETE = xoa du lieu

router.get('/getAll', async(req, res) => {
    let snapshot = await visitorRecordDatabase.once('value')
    var result = []
    snapshot.forEach((child) => {
        let { name, detail } = child.val()
        let visitorRecord = new VisitorRecord(name, detail)
        result.push(visitorRecord)
    })
    res.json(result)
})

router.post('/addNewVisitorRecord', async(req, res) => {
    let name = req.body.name
    let detail = req.body.detail
    let visitorRecord = new VisitorRecord(name, detail)
    let snapshot = await visitorRecordDatabase.once('value')
    var count = 0
    snapshot.forEach((child) => {
        count += 1
    })
    visitorRecordDatabase.child(count).set(visitorRecord)
    res.json({
        status: true
    })
})

// Export module
module.exports = router
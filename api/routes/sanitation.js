// Router
const router = require('express').Router()
    // Database 
const database = require('../../database')

let sanitationDatabase = database.child('sanitation')

class Sanitation {
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
    let snapshot = await sanitationDatabase.once('value')
    var result = []
    snapshot.forEach((child) => {
        let { name, detail } = child.val()
        let sanitation = new Sanitation(name, detail)
        result.push(sanitation)
    })
    res.json(result)
})

router.post('/addNewSanitation/:name/:detail', async(req, res) => {
    let name = req.body.name
    let detail = req.body.detail
    let sanitation = new Sanitation(name, detail)
    let snapshot = await sanitationDatabase.once('value')
    var count = 0
    snapshot.forEach((child) => {
        count += 1
    })
    sanitationDatabase.child(count).set(sanitation)
    res.json({
        status: true
    })
})

// Export module
module.exports = router
// Router
const router = require('express').Router()
    // Database 
const database = require('../../database')

let healthDatabase = database.child('health')

class Health {
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
    let snapshot = await healthDatabase.once('value')
    var result = []
    snapshot.forEach((child) => {
        let { name, detail } = child.val()
        let health = new Health(name, detail)
        result.push(health)
    })
    res.json(result)
})

router.post('/addNewHealth/:name/:detail', async(req, res) => {
    let name = req.body.name
    let detail = req.body.detail
    let health = new Health(name, detail)
    let snapshot = await healthDatabase.once('value')
    var count = 0
    snapshot.forEach((child) => {
        count += 1
    })
    healthDatabase.child(count).set(health)
    res.json({
        status: true
    })
})

// Export module
module.exports = router
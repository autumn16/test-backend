// Router
const router = require('express').Router()
    // Database 
const database = require('../../database')

let securityDatabase = database.child('security')

class Security {
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
    let snapshot = await securityDatabase.once('value')
    var result = []
    snapshot.forEach((child) => {
        let { name, detail } = child.val()
        let security = new Security(name, detail)
        result.push(security)
    })
    res.json(result)
})

router.post('/addNewSecurity/:name/:detail', async(req, res) => {
    let name = req.body.name
    let detail = req.body.detail
    let security = new Security(name, detail)
    let snapshot = await securityDatabase.once('value')
    var count = 0
    snapshot.forEach((child) => {
        count += 1
    })
    securityDatabase.child(count).set(security)
    res.json({
        status: true
    })
})

// Export module
module.exports = router
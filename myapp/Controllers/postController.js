const posts = require('../Data/posts.js')

function index(req, res) {
    res.json({
        data: posts,
        count: posts.length
    })
}

module.exports = {
    index
}
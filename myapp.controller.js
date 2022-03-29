const myapp = require("./myapp.service")

async function list(req, res, next) {
    const result = myapp.quehacer.list()
    return res.json(result)
}

async function add(req, res, next) {
    const result = await myapp.quehacer.add(req.body.title)
    return res.status(result.status).json(result)
}

module.exports={
    add,
    list,
}
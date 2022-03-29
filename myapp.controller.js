const myapp = require("./myapp.service")

async function list(req, res, next) {
    const result = myapp.quehacer.list()
    return res.json(result)
}

async function add(req, res, next) {
    const result = await myapp.quehacer.add(req.body.title)
    return res.status(result.status).json(result)
}
async function del(req, res, next) {
    const result = await myapp.quehacer.del(req.body.completed)
    return res.status(result.status).json(result)
}
async function comp(req, res, next) {
    const result = await myapp.quehacer.comp(req.body.tittle)
    return res.status(result.status).json(result)
}

module.exports={
    add,
    list,
}
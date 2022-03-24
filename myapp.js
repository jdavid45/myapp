const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const fs = require("fs").promises
//const methodOverride = require("method-override")
//const mongoose =require("mongoose")

class Todos {
    constructor() {
        this.todos = [
            {
                title: "Terminar todo",
                completed: false,
            }
        ];
    }
    list(){
       return [...this.todos]
    }
    add(title){
        if (title.length<=15){
           let todo={
                title: title,
                completed: false,
           }
        this.todos.push(todo);
        }else{throw new Error("El nombre es muy largo");}
    }
    complete(title){
       if (this.todos.length === 0) {
            throw new Error("no TODOs stored, add one");
       }
       let todoFound = false
       this.todos.forEach((todo) => {
            if (todo.title == title){
                todo.completed = true
                todoFound= true
                return
            }
       })
       if(!todoFound){
            throw new Error ("No TODO was found in: ", {title});
       }
    }
}
// module.exports = Todos;

let quehacer =new Todos()
//quehacer.add("lee el manual")
// quehacer.add("leer manual bascula")
// quehacer.add("leer manual bascula")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(methodOverride())

const router=express.Router()

router.get('/todo/list',function (req, res) {
    res.json(quehacer.list())
})

// router.pos('/todo/add',function (req, res) {
//     res.json([JSON.stringify(todo.list())])
// })
app.use(router)

// todo = 'titulo'

app.listen(port, function(){ console.log(quehacer)})

module.exports = Todos;
module.exports = app;
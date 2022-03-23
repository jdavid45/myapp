const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const fs = require("fs").promises
//const methodOverride = require("method-override")
//const mongoose =require("mongoose")



class Todos {
    constructor() {
        this.todos = [];
    }
    list(x){
       return [...this.todos]
            }

    add(title){
        
        let todo={
            title: title,
            completed: false,
        }
        this.todos.push(todo);
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
    
    saveToFile() {
        let fileContents = 'Title,Completed\n'
        this.todos.forEach((todo) => {
            fileContents += `${todo.title},${todo.completed}\n`
        });

        return fs.writeFile('todos.csv', fileContents)
    }
}


module.exports = Todos;

let quehacer =new Todos()

quehacer.add("leer manual bascula")
quehacer.add("leer manual bascula")
quehacer.add("leer manual bascula")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(methodOverride())

const router=express.Router()

todo=quehacer.list(quehacer)

router.get('/',function (req, res) {
    res.json([JSON.stringify(todo)])
})

app.use(router)

app.listen(port, function(){ console.log(todo)})

const conection = require('/config/db')
const Connection = require('mysql2/typings/mysql/lib/Connection')
const bodyParser = require("body-parser")
const fs = require("fs").promises
//const methodOverride = require("method-override")
const mysql= require('mysql2/promise')

async function add(body) {
    try{
        if(object.keys(body).length===0) { 
            return{
                message:'cuerpo de formulario invalido',
                status:400,
                }
        }  
        let sqlquery = "INSERT INTO todo (tittle, completed) values (?, 0)"
            let query = mysql.format(sql_query[body.tittle, body.completed])
            await Connection.query(query)

    }catch(error){
        return{message:'algo salio mal',
        status:500,}
    }
}
async function list() {
    
    try {
        let sql_query = `SELECT * FROM todo`;
        let query = mysql.format(sql_query);
        let [rows, fields] = await connection.query(query);

        return {
            data: rows,
            status: 200,
        }

    } catch (error) {
        return {
            message: 'Algo salió mal',
            status: 500,
        }
    }
}

async function del(){
    try{
        let sql_query ="DELETE FROM todo WHERE title=1"
        let query = mysql.format(sql_query);
        let [rows, fields] = await connection.query(query);

        return {
            data: rows,
            status: 200,
        }

    } catch (error) {
        return {
            message: 'Algo salió mal',
            status: 500,
        }
    }
}

async function comp(){
    try {
        if (object.keys(body).length===0){
            return{
                message: 'Agrega un ToDo primero',
                status: 400
            }
        }

        let sqlquery= "UPDATE todo SET (completed) = 1 where title = (?)"
        let query =mysql.format(sql_query[body.title])
        await Connection.query(query)
    }
    catch(error){
        return{message:'algo salio mal',
        status:500,}
    }
}

 //   'complete(title){
 //      if (this.todos.length === 0) {
//            throw new Error("no TODOs stored, add one");
  //     }
    //   let todoFound = false
      // this.todos.forEach((todo) => {
        //    if (todo.title == title){
          //      todo.completed = true
            //    todoFound= true
              //  return
 //           }
   //    })
     //  if(!todoFound){
//            throw new Error ("No TODO was found in: ", {title});
//       }
//}'
// module.exports = Todos;

let quehacer =new Todos()
//quehacer.add("lee el manual")
// quehacer.add("leer manual bascula")
// quehacer.add("leer manual bascula")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(methodOverride())





// router.pos('/todo/add',function (req, res) {
//     res.json([JSON.stringify(todo.list())])
// })
app.use(router)

// todo = 'titulo'

app.listen(port, function(){ console.log(quehacer)})

module.exports = Todos;
module.exports = app;
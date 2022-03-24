const Todos = require('./myapp')
const assert = require('assert').strict
const request = require('supertest')
const app = require('./myapp')
const fs = require ("fs")
const { exit } = require('process')
const { describe } = require('mocha')

// describe("integration test",function(){
//     it("should be able to ad an complete TODOS",function(){
//         let todos =new Todos()
//         assert.strictEqual(todos.list().length,0)

//         todos.add("run code")
//         assert.strictEqual(todos.list().length,1)
//         assert.deepStrictEqual(todos.list(),[{title:"run code", completed: false}])
//         todos.add("test everything");
//         assert.strictEqual(todos.list().length, 2);
//         assert.deepStrictEqual(todos.list(),
//             [
//                 { title: "run code", completed: false },
//                 { title: "test everything", completed: false }
//             ]
//         );

//         todos.complete("run code");
//         assert.deepStrictEqual(todos.list(),
//             [
//                 { title: "run code", completed: true },
//                 { title: "test everything", completed: false }
//             ]
//     );
//     })
// })

describe ("complete()",function(){
    it ("should fail if no TODOS",function(){
        request(app).get('')
        let todos = new Todos()
        const expectedError =new Error("no TODOs stored, add one")

        assert.throws(()=>{
            todos.complete("No hay tareas")
        },expectedError)
    })
})
describe("nombres no muy largos", function() {
    it("error si la tarea es mas larga de 15", function() {
        request(app).get('')
        let todos = new Todos()
        todos.add("leer manual bascula")
        // el largo es de 19 
        const expectedError =new Error("El nombre es muy largo")

        assert.throws(()=>{
            todos.add("Nombre de tarea largo")
        },expectedError)
    })
})
--exit
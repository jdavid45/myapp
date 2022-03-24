const Todos = require('./myapp')
const assert = require('assert').strict
const request = require('supertest')
const app = require('./myapp')
const fs = require ("fs")
const { exit } = require('process')

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
            todos.complete("no hay:/")
        },expectedError)
    })
})

// describe("saveToFile()", function() {
//     it("should save a single TODO", function() {
//         let todos = new Todos();
//         todos.add("save a CSV");
//         return todos.saveToFile().then(() => {
//             assert.strictEqual(fs.existsSync('todos.csv'), true)
//             let expectedFileContents = "Title,Completed\nsave a CSV,false\n"
//             let content = fs.readFileSync("todos.csv").toString()
//             assert.strictEqual(content, expectedFileContents)
//         });
//     });
// });
--exit
const controller = require("./controller");
var path = require("path");


module.exports = function(app){ //from component functions, test express routes with postman after replacing smthing with model name
    app.get('/api/pet', controller.index)
    app.post('/api/pet', controller.add_pet)
    app.delete('/api/pet/:id', controller.remove_pet)
    app.get('/api/pet/:id', controller.get_one)
    app.put('/api/pet/:id', controller.update_pet)
    app.put('/api/pet/like/:id', controller.like_pet)

    // children
    // app.post('/api/Child/:id', controller.add_child)
    // app.get('/api/Child/:id/:idx', controller.get_one_child)
    // app.put('/api/Child/:id', controller.edit_child)
    // app.delete("/api/Child/:id", controller.delete_child)
    // app.put("/api/Child/voteup/:id/:idx", controller.voteUp)
    // app.put("/api/Child/votedown/:id/:idx", controller.voteDown)
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}

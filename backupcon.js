const Author = require("./models");



module.exports = {

    // retrieve all quotes
    index: (req, res) => {
        console.log("in controller index");

        Author.find({}).sort({name: 1}) // alphabetical sort
            .then( data => res.json(data))
            .catch( err => res.json(err))

        // Author.find({}, function (err, authors) {
        //     if (err) {
        //         res.json(err);
        //     }
        //     else {
        //         // console.log("in controller index");
        //         // console.log(cakes);
        //         res.json(authors);
        //     }
        // })
        
    },

    add_author: (req, res) => {

        Author.create({ name: req.body.name })
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
        // Author.create({ name: req.body.name }, function (err, data) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json({ message: "Success", data: data });
        //         // res.redirect("");
        //     }
        // })
    },

    remove_author: (req, res) => {
        Author.findByIdAndDelete({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))

        // Author.findByIdAndDelete({ _id: req.params._id }, function (err, data) {
        //     if (err) {
        //         console.log(err);
        //         res.json(err);
        //     } else {
        //         res.json({ message: "Success", data: data });
        //     }
        // })
    },

    //retreive author by id
    view: (req, res) => {
        console.log(req.params.id);

        Author.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
        // Author.findById(req.params._id, function (err, author) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json(author);
        //     }
        // })
    },
    // find one quote
    oneQuote: (req, res) => {
        console.log("one quote controller ", req.params.id)

        Author.find({quotes: {$elemMatch: { _id : req.params.id }}})
            .then(data=>res.json({ message: "Success", data: data }))
            .catch(err=>res.json(err))
        // Author.find({quotes: {$elemMatch: { _id : req.params.id }}}, function(err, data) {
        //     if(err) {
        //         console.log("error finding quote")
        //         res.json(err)
        //     } else {
        //         res.json({ message: "Success", data: data })
        //     }
        // })
    },


    add_quote: (req, res) => {
        console.log("in controller add_quote");
        console.log(req.body);
        console.log(req.params.id);
        
        Author.findByIdAndUpdate(req.params.id, { $push: {quotes: req.body}}, {runValidators: true})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))

        // Author.findByIdAndUpdate(req.params._id, { $push: {quotes: req.body}}, {runValidators: true}, function (err, data) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json(data);
        //     }
        // })

    },

    edit_quote: (req, res) => {
        console.log("In edit_quote controller");
        console.log("Id: ", req.params.id) //quote id
        console.log("edit content ", req.body.content);

        Author.update({quotes: {$elemMatch: { _id : req.params.id }}}, {$set : {"quotes.$.content": req.body.content}}, {runValidators: true})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))

        // Author.update({quotes: {$elemMatch: { _id : req.params._id }}}, req.body.content, function(err, data) {
        //     if(err) {
        //         res.json(err);
        //     } else {
        //         console.log("Data: ", data);
        //         // data.save();
        //         res.json({ message: "Success", data: data });
        //     }
        // })
    },

    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))

        // Author.findByIdAndUpdate(req.params._id, req.body, function (err, data) {
        //     if (err) {
        //         res.json(err);
        //     } else {
        //         res.json({ message: "Success", data: data });
        //     }
        // })
    },
    
    deleteQuote: (req, res) => {

        console.log("In deleteQuote controller ",req.params.id);

        Author.update({ quotes: {$elemMatch: { _id : req.params.id }}}, {$pull: { quotes: { _id: req.params.id}}})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))

        // Author.update({ quotes: {$elemMatch: { _id : req.params.id }}}, {$pull: { quotes: { _id: req.params.id}}}, (err, data) => {
        //         if(err) {
        //             res.json(err)
        //         } else {
        //             res.json({ message: "Success", data: data })
        //         }
        //     })
    },

    voteUp: (req, res) => {
        var idx = req.params.idx;
        console.log("in vote up service");
        console.log("id ", req.params.id);

        Author.findById(req.params.id)
        .then(data=>{ //inc the votes and save the author with updated information
            data.quotes[req.params.idx].votes++;
            data.save();
        })
        .then(data=>res.json(data)) //save succsess, only happens if first then is successful
        .catch(err=>{
            res.json(err) // any error 
        })
    },
    voteDown: (req, res) => {
        var idx = req.params.idx;
        console.log("in vote up service");
        console.log("id ", req.params.id);

        Author.findById(req.params.id)
        .then(data=>{ //inc the votes and save the author with updated information
            data.quotes[req.params.idx].votes--;
            data.save();
        })
        .then(data=>res.json(data)) //save succsess, only happens if first then is successful
        .catch(err=>{
            res.json(err) // any error 
        })
    }


}






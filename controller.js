const Pet = require("./models");



module.exports = {

    // retrieve all quotes
    index: (req, res) => {
        console.log("in controller index");

        Pet.find({}).sort({ type: 1 })
            .then(data => res.json(data))
            .catch(err => res.json(err))


    },

    add_pet: (req, res) => {

        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.send(err))
    },

    remove_pet: (req, res) => {
        Pet.findByIdAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))

    },

    //retreive Pet by id
    get_one: (req, res) => {
        console.log(req.params.id);

        Pet.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_pet: (req, res) => {
        console.log("In update controller ",req.body)
        Pet.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    like_pet: (req, res) => {
        console.log("In like pet controller")
        console.log("like pet id: ", req.params.id);
        Pet.findByIdAndUpdate(req.params.id, { runValidators: true })
            .then(data => {
                console.log(data.likes);
                data.likes++;
                data.save();
                console.log(data.likes)
            })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }

    // Something.findById(req.params.id)
    //     .then(data=>{ //inc the votes and save the Something with updated information
    //         data.quotes[req.params.idx].votes++;
    //         data.save();
    //     })
    //     .then(data=>res.json(data)) //save succsess, only happens if first then is successful
    //     .catch(err=>{
    //         res.json(err) // any error 
    //     })

    // find one quote
    // get_one_child: (req, res) => {
    //     console.log("one quote controller ", req.params.id)

    //     Something.find({quotes: {$elemMatch: { _id : req.params.id }}})
    //         .then(data=>res.json({ message: "Success", data: data }))
    //         .catch(err=>res.json(err))

    // },


    // add_child: (req, res) => {
    //     console.log("in controller add_quote");
    //     console.log(req.body);
    //     console.log(req.params.id);

    //     Something.findByIdAndUpdate(req.params.id, { $push: {quotes: req.body}}, {runValidators: true})
    //         .then(data=>res.json(data))
    //         .catch(err=>res.json(err))

    // },

    // edit_child: (req, res) => {
    //     console.log("In edit_quote controller");
    //     console.log("Id: ", req.params.id) //quote id

    //     Something.update({quotes: {$elemMatch: { _id : req.params.id }}}, {$set : {"quotes.$.content": req.body.content}}, {runValidators: true})
    //         .then(data=>res.json(data))
    //         .catch(err=>res.json(err))


    // },


    // delete_child: (req, res) => {

    //     console.log("In deleteQuote controller ",req.params.id);

    //     Something.update({ quotes: {$elemMatch: { _id : req.params.id }}}, {$pull: { quotes: { _id: req.params.id}}})
    //         .then(data=>res.json(data))
    //         .catch(err=>res.json(err))

    // },

    // voteUp: (req, res) => {
    //     var idx = req.params.idx;
    //     console.log("in vote up service");
    //     console.log("id ", req.params.id);

    //     Something.findById(req.params.id)
    //     .then(data=>{ //inc the votes and save the Something with updated information
    //         data.quotes[req.params.idx].votes++;
    //         data.save();
    //     })
    //     .then(data=>res.json(data)) //save succsess, only happens if first then is successful
    //     .catch(err=>{
    //         res.json(err) // any error 
    //     })
    // },
    // voteDown: (req, res) => {
    //     var idx = req.params.idx;
    //     console.log("in vote up service");
    //     console.log("id ", req.params.id);

    //     Something.findById(req.params.id)
    //     .then(data=>{ //inc the votes and save the Something with updated information
    //         data.quotes[req.params.idx].votes--;
    //         data.save();
    //     })
    //     .then(data=>res.json(data)) //save succsess, only happens if first then is successful
    //     .catch(err=>{
    //         res.json(err) // any error 
    //     })
    // }


}






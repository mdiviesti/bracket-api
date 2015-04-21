exports.findAll = function(req, res) {
    res.send([{name:'Battle Wolves'}, {name:'Rough Riders'}, {name:'Polar Bears'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
};
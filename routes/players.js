exports.findAll = function(req, res) {
    res.send([{name:'John Smith'}, {name:'Joe Smith'}, {name:'Jesse Smith'}]);
};

exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "John Smith", description: "Totally Cool Dude"});
};
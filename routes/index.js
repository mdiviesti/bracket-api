exports.index = function(req, res) {
    res.send({response:
                {
                    status: 'fail',
                    message: 'you are attempting to use a route that has not been defined'
                }
    });
};
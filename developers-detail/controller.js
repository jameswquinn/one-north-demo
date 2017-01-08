var developersHelper = require('../helpers/developers');
var model = require('./model');

module.exports = function(req, res) {

    var developerId = req.params.developerId;

    developersHelper.getDeveloperById(developerId).then(function(developer) {

        var staticContent = {
            developer: developer,
            app: {
                title: 'One North | ' + (developer.firstName +
                    ' ' + developer.lastName)
            }
        };

        var data = {};

        res.render('developers-detail/view',
            model(staticContent, data));

    });

};

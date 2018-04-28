//A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require('path');

module.exports = function(app) {

    app.get('/', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/home.html'));
    });
    app.get('/survey', function(request, response) {
        response.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};


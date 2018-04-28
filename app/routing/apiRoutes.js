var uuid = require('uuid/v4');
var friends = require('../data/friends'); //.js

module.exports = function (app) {
    //get all info from 
    app.get('/api/friends', function (request, response) {
        response.json(friends);
        // return response.json(friends);
        //may not need the return?
    });

    //post the new results?  this may need to change.  post it to mysql/heroku and then use in the back for computing. not actually appearing on the screen.  test in postman.
    app.post('/api/friends', function (request, response) {

        newFriend = request.body;
        newFriend.id = uuid();
        console.log(newFriend);
        friends.push(newFriend);

        // Compare Friends

        var bestFriend;
        var bestFriendScore;

        for (var f = 0; f < friends.length; f++) {
            var otherFriend = friends[f];
            if (newFriend.id === otherFriend.id) {
                // being friends with yourself is a lonely life
                continue;
            }
            var totalScore = 0;
            for (i = 0; i < 10; i++) {
                //index of score
                totalScore += Math.abs(newFriend.scores[i] - otherFriend.scores[i]);
            }
            if (totalScore < bestFriendScore || !bestFriendScore) {
                bestFriendScore = totalScore;
                bestFriend = otherFriend;
            }
        };

        console.log(bestFriendScore);
        console.log(bestFriend);

        response.json(bestFriend);

        //then send back the match. jquery has a method for modal to open. bootstrap? 

    });

};

//for loop with a 4 in so you can match up the scours.
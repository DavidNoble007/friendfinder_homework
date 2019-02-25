
var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

    app.post("/newfriend", function (req, res) {
        //    console.log(req.body);
        //    console.log(friends);
        var newfriendtotal = 0;
        var smallestdiff= 10000;
        var bestmatch = {};
        for (i = 0; i < req.body.scores.length; i++) {
            newfriendtotal += parseInt(req.body.scores[i]);
        };
        console.log(newfriendtotal, "new friend total")
        for (var k = 0; k < friends.length; k++) {
            // friends[k];
            var oldfriendtotal = 0;
            for (var g = 0; g < friends[k].scores.length; g++) {
                oldfriendtotal += parseInt(friends[k].scores[g])
            };
            console.log(oldfriendtotal, "old friend total");
            var comparediff = newfriendtotal - oldfriendtotal;
            console.log(comparediff,"difference");
            if (smallestdiff > comparediff){
                smallestdiff = comparediff;
                bestmatch = friends[k]
            }
        }
        console.log(bestmatch);
        res.json(bestmatch)
    });
};



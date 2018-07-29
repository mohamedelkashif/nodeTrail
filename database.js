var mongoose = require('mongoose');


//mongodb://<dbuser>:<dbpassword>@ds133084.mlab.com:33084/users
var url = 'mongodb://mohamedkashif:kashif123@ds133084.mlab.com:33084/users';

module.exports = {
connect: function (){
  
    var url = 'mongodb://kashif:kashif1@ds133084.mlab.com:33084/users';
    mongoose.connect(url,{ useNewUrlParser: true })
    mongoose.connection.on("open", function(ref) {
        console.log("Connected to mongo server.");
    });
    
    mongoose.connection.on("error", function(err) {
        console.log("Could not connect to mongo server!");
    });
}
};

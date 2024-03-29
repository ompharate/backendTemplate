const mongoose = require("mongoose")
function connectionToDb(url) {
    return mongoose.connect(url);
}
module.exports = connectionToDb;
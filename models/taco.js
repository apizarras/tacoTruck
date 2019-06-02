const orm = require("../config/orm");

const taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
        });
    }
};

module.exports = taco;
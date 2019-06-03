const orm = require("../config/orm");

const taco = {
    all: function(cb) {
        orm.all("tacos", function(res) {
            cb(res);
        });
    },
    create: function(cb) {
        orm.create("tacos", cols, vals, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("tacos", function(res) {
            cb(res);
        });
    }
};

module.exports = taco;
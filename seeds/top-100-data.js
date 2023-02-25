const top100 = require("../data/top100-data")
exports.seed = function(knex) {
  return knex("top100")
    .del()
    .then(() => {
      return knex.raw("ALTER SEQUENCE top100_id_seq RESTART WITH 1")
    })
    .then(() => {
      return knex("top100").insert(top100)
      
    })
}
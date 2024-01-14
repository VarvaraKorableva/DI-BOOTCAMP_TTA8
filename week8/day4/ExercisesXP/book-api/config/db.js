const knex = require('knex')

const db = knex ({
  client: 'pg',
  connection: {
    host: 'flora.db.elephantsql.com',
    port: 5432,
    user: 'yvepsghh',
    password: 'IKmSqBNDoPrCPOI9MFnKNF72cZmr30WB',
    database: 'yvepsghh'
  }
})

module.exports = {
  db
};

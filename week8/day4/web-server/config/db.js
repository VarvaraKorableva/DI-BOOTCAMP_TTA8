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
const users = [
  { id: 1, name: "John", email: "jjj@gamail.com" },
  { id: 2, name: "Marry", email: "mmm@gamail.com" },
  { id: 3, name: "Anney", email: "aaa@gamail.com" },
];

const products = [
  { id: 1, name: "item1", desc: "bla bla bla 1" },
  { id: 2, name: "item2", desc: "bla bla bla 2" },
  { id: 3, name: "item3", desc: "bla bla bla 3" },
];

module.exports = {
  db,
  users,
  products,
};

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

//INSERT 
/*
  db('users')
  .insert({name:'ddd', email:'ddd@mail.com', password: '123456'})
  .then((data) => {
    console.log(data)

  })
  .catch((err) => {
    console.log(err)
  })
*/
/*
db('users')
  .insert([
    {name:'Max', email:'max@mail.com', password: '123456'},
    {name:'Oleg', email:'oleg@mail.com', password: '123456'},
    {name:'Natasha', email:'natasha@mail.com', password: '123456'}
  ])
  //.returning(['Varvara'])
  .then((data) => {
    console.log(data)

  })
  .catch((err) => {
    console.log(err)
  })


//UPDATE
db('users')
  .update({name:'Dan'})
  .returning("*")
  .where({id:4})
  .then(data => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
*/

//DELETE
/*
db('users')
  .where({id : 4})
  .del()
  .returning('*')
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
*/

db.select('id', 'name', 'email', 'password')
  .from('users')
  .then((rows) => {
    console.log(rows)
  })


//  console.log('db =>', db )
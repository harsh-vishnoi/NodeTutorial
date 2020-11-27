const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if(error){
      return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //   name : "Harsh Vishnoi",
    //   age : 22
    // }, (error, result) => {
    //   if(error){
    //     return console.log('Unable to insert User')
    //   }
    //   console.log(result.ops)
    // })

    db.collection('users').insertMany([
      {
        name : 'Yukti',
        age : 28
      },{
        name : 'Naima',
        age : 22
      }
    ], (error, result) => {
      if(error){
        console.log(error)
      }
      console.log(result.ops)
    })

    // .find()
    // This is used for multiple documents

    db.collection('users').findOne({name : 'Naima'}, (error, user) => {
      if(error){
        return console.log('Unable to fetch')
      }
      console.log(user)
    })

    db.collection('users').deleteMany({
      age : 27
    }).then(() => {
      console.log("Deleted");
    }).catch(() => {
      console.log("Error!");
    })
})

const mongoose = require('mongoose')



const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://englau:${password}@cluster0.fgcm3.mongodb.net/puhelinluettelo-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length<4) {
  Person.find({}).then(persons => {
    persons.forEach(p => {
      console.log(p)
    })
    mongoose.connection.close()
  })
} else {

const person = new Person({
    name: name,
    number: number
})


person.save().then(response => {
  console.log('person saved!')
  mongoose.connection.close()
})
}

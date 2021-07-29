const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


app.use(cors())
app.use(express.static('build'))

let persons = [
  {
    id: 1,
    name: "Hilla Engblom",
    number: "040333221"
  },
  {
    id: 2,
    name: "Laura Engblom",
    number: "0400811111"
  },
  {
    id: 3,
    name: "Esa Engblom",
    number: "040701333"
  },
  {
    id: 4,
    name: "Muunis Engblom",
    number: "040701222"
  },
  {
  id: 5,
  name: "Pekka Pouta",
  number: "050666777"
  }
]

app.use(express.json())

morgan.token('info', (request) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :info'))



app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.get('/info', (req, res) => {
  const datetime = new Date()
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
            <p> ${datetime}</p>`) 
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

function getRandomId (min, max) {
  min = Math.ceil(0);
  max = Math.floor(400);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

app.post('/api/persons', (request, response) => {
  
  
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const person = {
    id: getRandomId(),
    name: body.name,
    number: body.number,
  }

  if (persons.find(p => p.name === body.name)) {
   return response.status(400).json({ 
    error: 'name already exists'})
  
}

  persons = persons.concat(person)

  response.json(person)
  
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
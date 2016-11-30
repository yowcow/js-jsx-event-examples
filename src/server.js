import express from 'express'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static(__dirname + '/../public'))

console.log("Booting up to listen on " + PORT)

export default app.listen(PORT)

import express from "express";

// Integer that marks your program. Any message that comes in with that message attached gets sent to this program
const PORT = 3000

const SERVER = "localhost"

// this app is our pipeline
const app = express()

// Listen to incoming messages from the client
app.listen(PORT, () => {
  console.log(`Server listening on http://${SERVER}:${PORT}`)
});

// an endpoint in the pipeline. If a message has / at the end, it lands here
app.get("/", (req,res)=>{
    res.send('Hello')
})

// an endpoint in the pipeline. If a message has /lol at the end, it lands here
app.get("/lol", (req,res)=>{
  res.send("lol")
})
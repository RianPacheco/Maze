function Users(name, email, password, CPF, CEP){
    const { Module } = require('module');
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://gupesouza0:87654321@maze.8zndh.mongodb.net/?retryWrites=true&w=majority&appName=Maze";
  
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  
  async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }  
    }
    const db = client.db("Maze"); // banco de dados
    const usuarios = db.collection("usuarios");

    usuarios
    .insertOne({
        title: (name) ,
        email: (email),
        pass: (password),
        cpf: (CPF),
        cep: (CEP)
    }).then(
        res => console.log("update"),
        err => console.log("error"),
    );
    run().catch(console.dir);
  }
  module.exports = Users;
  Users("admin","admin@gmail.com","12345","11111111-11","111111");
  
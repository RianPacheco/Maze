function view(esc){
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
        const db = client.db("Maze"); // banco de dados

        const usuarios = db.collection("usuarios");
        const denuncias = db.collection("denuncias");

        if(esc == 'denuns'){
        const teste = await denuncias.find({lat:1111.111},{projection:{ _id:0}}).toArray();
        console.log(teste);
        }else{
          const teste = await usuarios.find({},{projection:{ _id:0}}).toArray();
          console.log(teste);
        }
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }  
    }
    run().catch(console.dir);
  }
  
  module.exports = view;
  
  view('denuns');
  view('users');
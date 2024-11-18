function Denun(lat, log, title, descricao, categ){
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
    const denuncias = db.collection("denuncias");
    denuncias
    .insertOne({
        lat: (lat) ,
        log: (log),
        title: (title),
        descri: (descricao),
        categoria: (categ),
        estado: "Não verificado"
    }).then(
        res => console.log("update"),
        err => console.log("error"),
    );

    run().catch(console.dir);
  }
Denun(1111.111,111.11111,"vitu","gusgakgdkasjgdkas",["VITU DODIDO","VITY LNDO"])
  module.exports = Denun;
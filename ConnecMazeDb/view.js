function connect(){
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
    const denuncias = db.collection("denuncias");
  
    denuncias
    .find({})
    .then(
        res => console.log(),
        err => console.log(),
    )
    run().catch(console.dir);
  }
  
  module.exports = connect;
  
  //criar: tabela.insertOne(-1-) or inserteMany(-1- * n elementos a atribuir)
  //consultar: tabela.find(-1-)
  //Update:tabela.update(-1-, -2-)
  //deletar: tabela.deleteOne(-1-) or deleteMany(-1-)
  //-1-(Pesquisa): {atributo: conteudo}
  //-2-(pesquisa):Oque atualizar
  
  //exemplo
  // table
  // .deleteOne({ title:"post1"} )
  // .then(
  //   res => console.log(`Updated documents`),
  //   err => console.error(`Something went wrong`),
  // );
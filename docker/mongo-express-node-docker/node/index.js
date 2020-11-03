const express = require('express');
const { MongoClient } = require('mongodb');

const url = "mongodb://root:example@mongo:27017";
const dbName = "mydb";
const collectionName = "user";
const client = new MongoClient(url, { useUnifiedTopology: true });
const connection = client.connect();
const getUserCollection = () => connection.then(() => client.db(dbName).collection(collectionName));

const app = express();

app.get("/", async (req, res) => {
  console.log("hi");
  const collection = await getUserCollection();
  await collection.insertOne({ username: "ant" });
  res.json(await collection.find({}).toArray());
});

app.listen(3000, () => console.log("App listening at 3000"));

import express from "express";
import http from "http";
const app = express();

const port = process.env.port || 3000;
app.set("port", port);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
  });

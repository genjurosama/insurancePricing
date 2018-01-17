"use strict";

import express from "express";
import modulesContainer from "./modules.json";
import bodyParser from "body-parser";

const app = express();

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT,POST,DELETE");
  next();
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

/**
 * GET /modules
 *
 * Return the list of modules with status code 200.
 */
app.get("/modules", (req, res) => {
  return res.status(200).json(modulesContainer);
});

/**
 * Get /module/:id
 *
 * id: Number
 *
 * Return the module for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get("/module/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    const module = modulesContainer.modules.find(item => item.id === id);

    if (module !== null) {
      return res.status(200).json({
        module
      });
    } else {
      return res.status(404).json({
        message: "Not found."
      });
    }
  } else {
    return res.status(400).json({
      message: "Bad request."
    });
  }
});

app.post("/calculatePrice", (req, res) => {
  const coverage = Number(req.body.coverage);
  const risk = Number(req.body.risk);
  const price = coverage * risk;
  return res.status(201).json({
    price: price
  });
});

app.listen(9001, () => {
  process.stdout.write("the server is available on http://localhost:9001/\n");
});

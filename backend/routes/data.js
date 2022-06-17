const { Router } = require("express");
const Products = require("../model/data");
const dataRouter = Router();

dataRouter.post("/new", async (req, res) => {
  const news = new Products(req.body);
  console.log(req.body);
  news.save((err, succ) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Error occurred due wrong validation " });
    } else {
      return res.status(201).send({ message: "News data send successfully" });
    }
  });
});

dataRouter.get("/search/:query", async (req, res) => {
  var query = req.params.query;
  Products.find({
    name : {
      $regex: query,
    },
  })
    .limit(10)
    .exec((err, succ) => {
      if (err) {
        return res.status.apply(500).send(err);
      } else {
        return res.status(201).send(succ);
      }
    });
});

dataRouter.get("/get/?", async (req, res) => {
  Products.find(req.query).exec((err, succ) => {
    if (err) {
      return res.status.apply(500).send(err);
    } else {
      return res.status(201).send(succ);
    }
  });
});

dataRouter.get("/get/inc/?", async (req, res) => {
  Products.find(req.query)
    .sort({ price: 1 })
    .exec((err, succ) => {
      if (err) {
        return res.status.apply(500).send(err);
      } else {
        return res.status(201).send(succ);
      }
    });
});

dataRouter.get("/get/dec/?", async (req, res) => {
  Products.find(req.query)
    .sort({ price: -1 })
    .exec((err, succ) => {
      if (err) {
        return res.status.apply(500).send(err);
      } else {
        return res.status(201).send(succ);
      }
    });
});
module.exports = dataRouter;

// ?author=John

const { Author, validate } = require(".models/author");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const authors = await Author.find()
    .select("-__v")
    .sort("name");
  res.send(authors);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let author = new Author({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone
  });
  author = await author.save();

  res.send(author);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const author = await Author.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone
    },
    { new: true }
  );

  if (!author)
    return res
      .status(404)
      .send("The author with the given ID was not found.");

  res.send(author);
});

router.delete("/:id", auth, async (req, res) => {
  const author = await Author.findByIdAndRemove(req.params.id);

  if (!author)
    return res
      .status(404)
      .send("The author with the given ID was not found.");

  res.send(author);
});

router.get("/:id", auth, async (req, res) => {
  const author = await Author.findById(req.params.id).select("-__v");

  if (!author)
    return res
      .status(404)
      .send("The author with the given ID was not found.");

  res.send(author);
});

module.exports = router;
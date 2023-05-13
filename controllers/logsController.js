const express = require("express");
const router = express.Router();
const log = require("../models/logs");

// Seed Route
router.get("/seed", async (req, res) => {
  try {
    await log.create([
      { Title: "Log 1", Entry: "Log 1 Entry", shipIsBroken: true },
      { Title: "Log 2", Entry: "Log 2 Entry", shipIsBroken: false },
      { Title: "Log 3", Entry: "Log 3 Entry", shipIsBroken: true },
      { Title: "Log 4", Entry: "Log 4 Entry", shipIsBroken: false },
    ]);
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// I.N.D.U.C.E.S
// ==============
// Index
router.get("/", async (req, res) => {
  console.log("Index Controller Func. running...");
  try {
    const foundlog = await log.find({});
    res.status(200).render("logs/Index", { logs: foundlog });
  } catch (err) {
    res.status(400).send(err);
  }
});

// New // renders a form to create a new log
router.get("/new", (req, res) => {
  res.render("logs/New");
});

// Create // recieves info from new route to then create a new log w/ it
router.post("/", async (req, res) => {
  try {
    const newLog = await log.create(req.body);
    // redirect is making a GET request to whatever path you specify
    res.redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show
router.get("/:id", async (req, res) => {
  try {
    // We are using the id given to us in the URL params to query our database.
    const foundLog = await log.findById(req.params.id);
    res.render("logs/Show", {
      //second param must be an object
      log: foundLog,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

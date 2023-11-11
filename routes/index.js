const express = require("express");

const router = express.Router();

const fundController = require("../controllers/index");

router.route("/").get((_req, res) => {
  return res.status(200).json({
    status: "success",
    data: new Date(),
  });
});

router.route("/getFunds").post(fundController.getFunds);

module.exports = router;

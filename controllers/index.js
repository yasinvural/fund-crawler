const fundService = require("../services/index");

const getFunds = async (req, res) => {
  try {
    const params = req.body.funds;
    const data = await fundService.getFunds(params);
    res.json({ success: true, data });
  } catch (err) {
    res.status(400).json({
      status: "error",
      data: err.stack,
    });
  }
};

exports.getFunds = getFunds;

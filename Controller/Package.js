const Package = require("../Model/Package");
exports.postPackage = async (req, res, next) => {
  const { title, TripDuration, Things, Price } = req.body;
  const newPackage = new Package({
    title: title,
    Duration: TripDuration,
    Things: Things,
    Price: Price,
    // Image: Image,
  });
  try {
    const savedPackage = await newPackage.save();
    res.status(201).json(savedPackage);
    console.log(savedPackage);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.getPackage = async (req, res, next) => {
  try {
    const pack = await Package.find();
    res.status(201).json(pack);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

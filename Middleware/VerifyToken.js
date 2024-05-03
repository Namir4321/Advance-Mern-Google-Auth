const jwt = require("jsonwebtoken");
const VerifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    console.log("you are not authorize")
    return res.status(500).json({ message: "You are not authenticated" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodeToken.userId;
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports=VerifyToken;
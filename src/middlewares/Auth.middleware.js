const JwtService = require("../modules/auth/jwt.service");
const UnauthorizedError = require("../errors/UnauthorizedError");

function authJwt(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("token tidak di temukan");
  }

  //memotong kalimat bearer dan mengambil huruf huruf setelah bearer yaitu index ke 1
  const token = authHeader.split(" ")[1];

  try {
    const decode = JwtService.verify(token);
    (req.user = decode), (req.userId = decode.id), (req.role = decode.role);
    next();
  } catch (error) {
    throw new UnauthorizedError(
      "token ini sudah tidak valid atau sudah kadaluarsa"
    );
  }
}
module.exports = authJwt;

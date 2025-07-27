const { User } = require("../../../models");
const JwtService = require("./jwt.service");
const bcrypt = require("bcrypt");
const BadRequestError = require("../../errors/BadRequestError");
const NotFound = require("../../errors/NotFoundError");

class AuthService {
  constructor() {
    this.SALT_ROUNDS = 10;
  }

  async register({ name, email, password, number, role }) {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      throw new BadRequestError("Email User Sudah Terdaftar");
    }

    const hash = await bcrypt.hash(password, this.SALT_ROUNDS);
    const newUser = await User.create({
      name,
      email,
      password: hash,
      number,
      role,
    });
    const token = JwtService.sign({
      id: newUser.id,
      email: newUser.email,
      role: newUser.role,
    });

    const userJson = newUser.toJSON();
    delete userJson.password;
    return { user: userJson, token };
  }

  async login({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new NotFound("Email Tidak Ditemukan");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new BadRequestError("Password nya salah boy");

    const token = JwtService.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    const userJson = user.toJSON();
    delete userJson.password;
    return { user: userJson, token };
  }

  async profile(userId) {
    const user = await User.findByPk(userId);
    const plainUser = user.toJSON();
    delete plainUser.password;

    return plainUser;
  }
}

module.exports = new AuthService();

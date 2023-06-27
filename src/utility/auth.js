const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    let salt = await bcrypt.genSalt(12);
    let hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

exports.comparePassword = async (password, hashedPassword) => {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw error;
  }
};

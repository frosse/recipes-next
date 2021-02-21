const bcrypt = require("bcryptjs");

const hashPassword = (password: string): string => {
  const saltRounds = 10;
  //kimjongpuh

  return bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      throw saltError;
    } else {
      bcrypt.hash(password, salt, function (hashError, hash) {
        if (hashError) {
          throw hashError;
        } else {
          console.log(hash);
          return hash;
        }
      });
    }
  });
};
export default {
  hashPassword
};

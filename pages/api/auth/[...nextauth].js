import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import DatabaseService from "../../../services/database";
import User from "../../../models/Users";
import config from "../../../utils/config";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // that is false/null if the credentials are invalid.
        DatabaseService.connect();
        let user = null;
        const userFromDB = await User.findOne({
          username: credentials.username
        });

        if (userFromDB) {
          user = await bcrypt.compare(
            credentials.password,
            userFromDB.password
          );
        }
        if (user) {
          return { name: userFromDB.username };
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  jwt: {
    secret: config.JWT_SECRET,
    encryption: true
  },
  debug: true
});

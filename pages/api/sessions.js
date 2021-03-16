import { withIronSession } from "next-iron-session";
import data from "../../data";

const bcrypt = require('bcryptjs');

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const users = await data.readTable("Users")
      const { email, password } = req.body;

      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          var match = bcrypt.compareSync(password, users[i].passHash);
          if (match) {
            const fName = users[i].fName
            req.session.set("user", { email, fName });
            await req.session.save();
            return res.status(201).send("");
          } else {
            return res.status(403).send("");
          }
        }
      }
      return res.status(403).send("");
    }
    return res.status(404).send("");
  },
  {
    cookieName: "LOGIN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

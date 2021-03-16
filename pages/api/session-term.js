import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      req.session.destroy();
      return res.status(201).send("");
    }
    return res.status(404).send("");
  },
  {
    cookieName: "LOGIN",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
      cacheControl: "no-store",
      maxAge: -1,
    },
    password: process.env.APPLICATION_SECRET
  }
);

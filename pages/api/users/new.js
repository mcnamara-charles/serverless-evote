import data from "../../../data";

export default async (req, res) => {
  console.log("/api/voters/new HIT!");
  const email = JSON.parse(req.body).email;
  const passHash = JSON.parse(req.body).passHash;
  const fName = JSON.parse(req.body).fName;
  const lName = JSON.parse(req.body).lName;
  await data.createuser(email, passHash, fName, lName);
  /*res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');*/
  res.status(200).end("OK");
};

import data from "../../../data";

/*module.exports.read = async (event, context, callback) => {
  console.log("/api/voters HIT!");
  callback(null, {statusCode: 200}).json(await data.readTable("Users"));
}*/

export default async (req, res) => {
  console.log("/api/voters HIT!");
  res.status(200).json(await data.readTable("Users"));
};

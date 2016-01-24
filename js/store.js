// Database Setup
var db = new PouchDB('transactions');
PouchDB.debug.enable('*'); // enables debugging
// PouchDB.debug.disable(); // Disables debugging
// Document "Schema" (Get it? NoSQL doesn't have a schema)
// {
//   "_id": _id,
//   "date": mm/dd/yyyy,
//   "flow": (-)##.##,
//   "target": account/payee,
//   "category": category,
//   "memo": memo,
//   "cleared": boolean,
//   "account": account
// }

var sourceOfTruth = [];

db.allDocs({ include_docs: true }).then(function(result) {
  console.log("Got data!");
  sourceOfTruth = result.rows;
}.catch(function(err) {
  console.log(err);
});

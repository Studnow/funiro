// const JSONdb = require("simple-json-db");
// const db = new JSONdb("../db/database.json");

const DB = "/db/db.json";

export function getGalleryImages(img) {
  const getDB = fetch(DB);
  getDB
    .then((r) => r.json())
    .then((json) => JSON.parse(JSON.stringify(json)))
    .then((obj) => Object.assign(img, obj));
}
// getDB.then(r => r.json()).then(d => Object.assign(d, data))

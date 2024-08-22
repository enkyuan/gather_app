/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qmd07vshjxj10ks",
    "created": "2024-08-22 01:45:32.090Z",
    "updated": "2024-08-22 01:45:32.090Z",
    "name": "tickets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jgundegn",
        "name": "event_day",
        "type": "date",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "fcdemeez",
        "name": "price",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qmd07vshjxj10ks");

  return dao.deleteCollection(collection);
})

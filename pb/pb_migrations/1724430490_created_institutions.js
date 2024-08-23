/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v3n9sp91a231xoi",
    "created": "2024-08-23 16:28:10.766Z",
    "updated": "2024-08-23 16:28:10.766Z",
    "name": "institutions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vaudn6uu",
        "name": "attendees",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("v3n9sp91a231xoi");

  return dao.deleteCollection(collection);
})

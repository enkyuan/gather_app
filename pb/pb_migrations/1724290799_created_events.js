/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3zxe94ugb8kma8r",
    "created": "2024-08-22 01:39:59.943Z",
    "updated": "2024-08-22 01:39:59.943Z",
    "name": "events",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yczn5mei",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gcf6uap3",
        "name": "poster",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "raluhnk1",
        "name": "socials",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r");

  return dao.deleteCollection(collection);
})

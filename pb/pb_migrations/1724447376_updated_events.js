/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwsvrn98",
    "name": "author",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwsvrn98",
    "name": "creator",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

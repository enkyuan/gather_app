/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v3n9sp91a231xoi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xnh2lh7z",
    "name": "ticket_ids",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qmd07vshjxj10ks",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v3n9sp91a231xoi")

  // remove
  collection.schema.removeField("xnh2lh7z")

  return dao.saveCollection(collection)
})

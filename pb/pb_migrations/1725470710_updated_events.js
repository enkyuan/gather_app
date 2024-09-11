/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnhjlrks",
    "name": "affliation",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "v3n9sp91a231xoi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jnhjlrks",
    "name": "institution",
    "type": "relation",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "v3n9sp91a231xoi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})

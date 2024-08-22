/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rf8mmdox",
    "name": "duration",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3zxe94ugb8kma8r")

  // remove
  collection.schema.removeField("rf8mmdox")

  return dao.saveCollection(collection)
})

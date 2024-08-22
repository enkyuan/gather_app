/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qmd07vshjxj10ks")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jb5bcsnl",
    "name": "stock",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qmd07vshjxj10ks")

  // remove
  collection.schema.removeField("jb5bcsnl")

  return dao.saveCollection(collection)
})

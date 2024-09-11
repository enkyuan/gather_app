/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qmd07vshjxj10ks")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qmd07vshjxj10ks")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgundegn",
    "name": "event_day",
    "type": "date",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})

var recipes = [stew beef: "beef"]

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]= value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return
}

var recipes = [stew beef: "beef"]

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {key:value})
}
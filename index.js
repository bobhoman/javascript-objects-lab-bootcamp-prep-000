var recipes = { eggs: 3, flour: "2 cups", milk: "1 cup" };

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

// function updateObjectWithKeyAndValue(object, key, value) {
//   Object.assign( {}, object, {[key]: value} )
// 
//   return object
// }

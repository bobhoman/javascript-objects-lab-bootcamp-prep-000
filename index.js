var recipes = { eggs: 3, flour: "2 cups", milk: "1 cup" };

// function updateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value
//
//   return object
// }

function updateObjectWithKeyAndValue(object, key, value) {
  console.log(Object.assign( {}, object, {[key]: value} )) 

  // console.log(object)
}

updateObjectWithKeyAndValue(recipes, "water", "1 cup")

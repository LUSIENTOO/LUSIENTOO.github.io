// JSON string 
const jsonString = '{"name": "John", "age": 30, "hobbies": ["reading", "traveling", "swimming"]}'; 
// Parse JSON string into a JavaScript object 
const jsonObject = JSON.parse(jsonString); 
console.log(jsonObject.name);  // Output: John 
console.log(jsonObject.age);   // Output: 30 
console.log(jsonObject.hobbies);  // Output: ["reading", "traveling", "swimming"]
// Convert JavaScript object back to JSON string 
const newJsonString = JSON.stringify(jsonObject); 
console.log(newJsonString);  // Output: {"name":"John","age":30,"hobbies":["reading","traveling","swimming"]} 
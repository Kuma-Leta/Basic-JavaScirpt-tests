const jsonString = "{'name': 'John', 'age': 30}";

try {
  const parsedObject = JSON.parse(jsonString);
  console.log(parsedObject);
} catch (error) {
  console.error("Error: Invalid JSON string!");
}

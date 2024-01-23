// Define the URL and the data to be sent in the request body
const url = "https://jsonplaceholder.typicode.com/users";
const data = {
  key1: "value1",
  key2: "value2",
};

// Make a POST request using the fetch API
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Specify the content type if sending JSON data
    // Add any other headers if needed
  },
  body: JSON.stringify(data), // Convert the data to JSON format
})
  .then((response) => response.json())
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Error:", error));

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

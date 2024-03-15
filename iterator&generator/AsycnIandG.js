const axios = require("axios").default;

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);
  return users;
}

// getUsers()
//   .then(async (users) => {
//     console.log(users);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//only need to  user  post and show limited post

// async function* getPostsByUser(users) {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   for (let i = 0; i < users.length; i++) {
//     const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
//     yield posts;
//   }
// }

// getUsers()
//   .then(async (users) => {
//     const userIterator = getPostsByUser(users);
//     await userIterator.next();
//     await userIterator.next();
//     console.log((await userIterator.next()).value);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// look all users post use for of loop

// getUsers()
//   .then(async (users) => {
//     for await (const v of getPostsByUser(users)) {
//       console.log("All user :" + v);
//     }
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//Different way

async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data: users } = await axios.get(url);
  return users.map((user) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  );
}

(async () => {
  const users = await getUsers();
  for await (let v of users) {
    console.log(v.data);
  }
})();

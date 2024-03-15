function get(path, cb) {
  const data = {}; // somehow process it
  cb(data);
}

function getUserNameFromComment(username) {
  get(`users?username=${username}`, (user) => {
    get(`posts?user_id=${user.id}`, (posts) => {
      get(`comments?post_id=${posts[0].id}`, (comments) => {
        get(`users?username=${comments[0].username}`, (user) => {
          console.log(user);
        });
      });
    });
  });
}

getUserNameFromComment("arif");

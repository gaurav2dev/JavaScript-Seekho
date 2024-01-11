let getUsername = function (username) {
  this.username = username;
  console.log("called");
};

let setUsername = function (username, email, password) {
  getUsername.call(this, username);
  this.email = email;
  this.password = password;
};

const me = new setUsername("chai", "chai@fb.com", "123");
console.log(me);

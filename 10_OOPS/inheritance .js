class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
}

class DBA extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  add_new_Course() {
    console.log(`Course was added by ${this.username} bhai`);
  }
}

const chai = new DBA("Garo", "Garo@Garo", 123345);
const user = new User("Masala Chai");
console.log(chai);
console.log(user);
chai.add_new_Course();
user.logMe();
chai.logMe();
// user.add_new_Course();(As this line has error because child can access parent's properties but parent cannot access child's  properties)

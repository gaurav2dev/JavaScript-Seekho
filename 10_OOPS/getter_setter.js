class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}garo`;
  }

  set password(value) {
    this._password = value;
  }
}

const userOne = new User("g@generate.com", "ABCDEFG");
console.log(`EMAIL : ${userOne.email}   PASSWORD : ${userOne.password}`);

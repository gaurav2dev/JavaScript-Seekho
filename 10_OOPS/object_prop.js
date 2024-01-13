const user = {
  _email: "g@gac.com",
  _password: "abc@123",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(user);
console.log({ email: tea._email, pswd: tea._password });

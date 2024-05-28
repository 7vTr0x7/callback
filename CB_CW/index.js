const greetUser = (user, cb) => {
  const message = `Hello ${user}`;
  cb(message);
};

const logMsg = (msg) => {
  console.log(msg);
};

greetUser("Alice", logMsg);

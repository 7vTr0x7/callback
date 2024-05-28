const getUserName = (name, cb) => {
  const msg = `Hello, ${name}`;
  cb(msg);
};

const greetUser = (msg) => {
  console.log(`${msg} Doe!`);
};

getUserName("John", greetUser);

const calculateAge = (year, cb) => {
  const age = new Date().getFullYear() - year;
  cb(age);
};

const displayAge = (age) => {
  console.log(`You are [${age}] years old!`);
};

calculateAge(1992, displayAge);

const generateUsername = (name, cb) => {
  const userName = name + "_user";
  cb(userName);
};

const displayUsername = (userName) => {
  console.log(`Your user name is: [${userName}]!`);
};

generateUsername("Alice", displayUsername);

const checkTemperature = (celsius, cb) => {
  const temp = celsius * (9 / 5) + 32;

  cb(temp);
};

const displayTemperatureMessage = (temp) => {
  if (temp > 86) {
    console.log(`The temperature is: Hot`);
  } else if (temp >= 50 && temp < 86) {
    console.log(`The temperature is: Moderate`);
  } else if (temp < 50) {
    console.log(`The temperature is: Cold`);
  }
};

checkTemperature(25, displayTemperatureMessage);

const processArray = (numbers, callback) => {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  console.log(result);
};
const squareNumber = (num) => {
  return num * num;
};
const numbersArray1 = [1, 2, 3, 4, 5];
processArray(numbersArray1, squareNumber);

const processArraySum = (arr, cb) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  console.log(result);
};

const doubleNumber = (num) => {
  return num * 2;
};

const numbersArray = [2, 4, 6, 8, 10];
processArraySum(numbersArray, doubleNumber);

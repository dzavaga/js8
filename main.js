// 1
function upperCase(str) {
    let text = prompt("enter text:");
  if (str.charAt(0) === str.charAt(0).toUpperCase()) {
    return "String's starts with uppercase character";
  } else {
    return "String's not starts with uppercase character";
  }
}
console.log(upperCase('regexp')); // "String's not starts with uppercase character"
console.log(upperCase('RegExp')); // "String's starts with uppercase character"
//2
/*
function checkEmail(email) {
  // Використовуємо регулярний вираз для перевірки відповідності рядка шаблону email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//3
const inputString = "Java Script";
const regex = /(\b\w+\b) (\b\w+\b)/;
const outputString = inputString.replace(regex, "$2, $1");

console.log(outputString); // "Script, Java"
//4
function validateCreditCardNumber(cardNumber) {
  const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

  return regex.test(cardNumber);
}
//5
function checkEmail(email) {
  const regex = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  if (regex.test(email)) {
    const hyphenCount = (email.match(/-/g) || []).length;
    if (hyphenCount > 1) {
      return "Email is not correct!";
    }
    return "Email is correct!";
  }
  return "Email is not correct!";
}
//6
function checkLogin(str) {
  const regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
  const matches = str.match(/\d+(\.\d+)?/g);
  return regex.test(str) && matches !== null;
}
*/
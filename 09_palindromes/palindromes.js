const palindromes = function (string) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

  const stringClean = string
    .toLowerCase()
    .split("")
    .filter((char) => chars.includes(char))
    .join("");

  const reverse = stringClean.split("").reverse().join("");

  return stringClean === reverse;
};

// Do not edit below this line
module.exports = palindromes;

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const $el = document.querySelector("#excuse > h1");
const excuseParts = [who, action, what, when];

const randomNumGen = max => {
  return Math.floor(Math.random() * (max + 1));
};

const generateExcuse = () => {
  return excuseParts.map(part => part[randomNumGen(part.length - 1)]);
};

window.addEventListener("click", () => {
  $el.innerHTML = generateExcuse().join(" ");
});

window.onload = function() {
  //write your code here
  $el.innerHTML = generateExcuse().join(" ");
};

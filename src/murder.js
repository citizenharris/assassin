const WEAPONS = [
  "another assassin's mobile phone (not yours)",
  "some butter (in or out of wrapper)",
  "a teapot or cafetierre (If one not available, jug of water)",
  "a loo roll",
  "a bar of soap",
  "a phone charger",
  "a book",
  "an eggcup",
  "a pillow",
  "a jug of water",
  "a bottle of wine",
  "a pair of boxers",
  "a pot/pan",
  "a lightbulb",
  "a paper chicken",
  "peppercorn",
  "pair of knickers",
  "a credit/debit card",
  "a mug",
  "a bracelet",
  "a multicoloured sock",
  "a pair of spectables/sunglasses",
  "a piece of fruit",
  "a chair or stool",
  "a notebook",
];

const ROOMS = [
  "the sitting room",
  "the sitting room",
  "the sitting room",
  "the dining room",
  "the dining room",
  "the grand foyer",
  "the hall",
  "the hall",
  "a corridor",
  "a corridor",
  "on the stairs",
  "the games room",
  "the games room",
  "any bathroom",
  "any bathroom",
  "any bedroom",
  "any bedroom",
  "the kitchen",
  "the kitchen",
  "any outside area",
  "any outside area",
  "the patio",
  "the hot tub",
  "next to a fireplace (outside included)",
];

const KILLERS = [
  "Kish H",
  "Maulik",
  "Dhiraj",
  "Jayna",
  "Bhavni",
  "Breijesh",
  "Hemali",
  "Ravneet",
  "Param",
  "Harry",
  "Kish M",
  "Amrit",
  "Rohit",
  "Vicky",
  "Arti",
  "Becky",
  "Himal",
  "Mukesh",
  "Jigna",
  "Priya",
  "Pav",
  "Pavan",
  "Aarti",
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function titleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function setup(killers, weapons, rooms) {
  const shuffledKillers = shuffle(killers);
  const shuffledWeapons = shuffle(weapons);
  const shuffledRooms = shuffle(rooms);

  const victims = [
    shuffledKillers[shuffledKillers.length - 1],
    ...shuffledKillers.slice(0, -1),
  ];

  const plots = {};
  for (let i = 0; i < shuffledKillers.length; i++) {
    plots[shuffledKillers[i]] = {
      victim: victims[i],
      weapon: shuffledWeapons[i],
      room: shuffledRooms[i],
    };
  }

  return plots;
}

let plots = setup(KILLERS, WEAPONS, ROOMS);

function chooseVictim() {
  const nameInput = document.getElementById("name");
  const errorDiv = document.getElementById("error");
  const resultDiv = document.getElementById("result");
  const assignmentDiv = document.getElementById("assignment");

  const playerName = titleCase(nameInput.value.trim());

  errorDiv.textContent = "";

  if (!playerName) {
    errorDiv.textContent = "Please enter your name!";
    return;
  }

  const plot = plots[playerName];

  if (plot) {
    assignmentDiv.innerHTML = `
You are killing <b>${plot.victim}</b> with <b>${plot.weapon}</b> in <b>${plot.room}</b>.

Write this down and do not tell anyone!
        `;
    resultDiv.classList.add("show");
    nameInput.value = "";
  } else {
    errorDiv.textContent =
      "This name is not in the list! Remember to use your full first name, no nicknames.";
    resultDiv.classList.remove("show");
  }
}

function clearResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.classList.remove("show");
}

if (typeof document !== "undefined") {
  document.getElementById("name").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      chooseVictim();
    }
  });
}

// export { shuffle, titleCase, setup, WEAPONS, ROOMS, KILLERS };

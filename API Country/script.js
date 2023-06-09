const uri = "https://restcountries.com/v3.1/all";
const countriesContainer = document.getElementById("countries-container");
const searchInput = document.getElementById("search");
let countries = [];

function handleSearch(target) {
  const search = target.value.toLowerCase();      //<input id="search" onkeyup="handleSearch(this);" />
  const searchMatch = countries.filter((element) => {
    const name = element.name.common.toLowerCase();
    return name.includes(search);
  });
  renderCards(searchMatch);
}

async function fetchData() {
  const response = await fetch(uri);
  const data = await response.json();
  if (data.length > 0) {
    countries = [...data];
    renderCards(countries);
  }
}
fetchData();

function renderCards(data = []) {
  // TRAVERSE THROUGH DATA AND CREATE CARDS
  // NODES OF CARDS
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  // EXISTING VALUE ARE KICKED-OUT
  countriesContainer.innerHTML = "";
  // NEW CARDS ARE ALLOWED IN AND UI RE-RENDERED
  countriesContainer.append(...cards);
}

function createCard(data = {}) {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let title = document.createElement("h2");
  let subHeading = document.createElement("p");

  // OBJECT DESTRCUTING ES6
  const { name = "", population = "" } = data;
  title.innerText = name["common"];
  subHeading.innerText = population;
  card.append(title, subHeading);

  return card;
}






  //   Carbs.innerText = nutritions.carbohydrates;
  //   Suger.innerText = nutritions.sugar;
  //   Fat.innerText = nutritions.fat;
  //   Calories.innerText = nutritions.calories;
  //   Protein.innerText = nutritions.protein;
 
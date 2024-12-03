// GLOBAL VARIABLES
const baseUrl = `http://localhost:3000/ramens`;

// FOR POTENTIAL CLOSURES
let selectedRamen;

// DOM SELECTORS
const menu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("#ramen-detail .detail-image");
const detailName = document.querySelector("#ramen-detail .name");
const detailRestaurant = document.querySelector("#ramen-detail .restaurant");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");

//FETCH FUNCTIONS
function getAllRamens() {
  return fetch(baseUrl).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// RENDER FUNCTIONS
const displayRamens = () => {
  getAllRamens().then((rArr) => rArr.forEach(renderRamen));
};

function renderRamen(ramenObj) {
  const image = document.createElement("img");
  image.src = ramenObj.image;
  image.alt = `${ramenObj.name} thumbnail`;
  image.addEventListener("click", () => handleClick(ramenObj));
  menu.append(image);
}

// EVENT LISTENERS/HANDLERS
function renderDetails(ramenObj) {
  selectedRamen = ramenObj;
  detailImage.src = ramenObj.image;
  detailRestaurant.textContent = ramenObj.detailRestaurant;
  detailName.textContent = ramenObj.name;
  ratingDisplay.textContent = ramenObj.rating;
  commentDisplay.textContent = ramenObj.comment;
}

const handleClick = (ramen) => {
  renderDetails(ramen);
};

const handleSubmit = (e) => {
  e.preventDefault();
};

// INITIALIZERS
const addSubmitListener = () => {
  // add code
};

const main = () => {
  displayRamens();
  addSubmitListener();
  handleClick();
};
main();

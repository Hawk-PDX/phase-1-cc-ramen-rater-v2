// GLOBAL VARIABLES
const baseUrl = `http://localhost:3000/ramens`;

// just in case
let selectedRamen;

// DOM SELECTORS
const menu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector("#ramen-detail .detail-image");
const detailName = document.querySelector("#ramen-detail .name");
const detailRestaurant = document.querySelector("#ramen-detail .restaurant");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");

//FETCH FUNCTIONS
async function getAllRamens() {
  try {
    const resp = await fetch(baseUrl);
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return await resp.json();
  } catch (error) {
    console.error("Error fetching ramens:", error);
    throw error;
  }
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
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  renderRamen(newRamen);
};

// INITIALIZERS
const addSubmitListener = () => {
  document.querySelector("#new-ramen").addEventListener("submit", handleSubmit);
};

const main = () => {
  displayRamens();
  addSubmitListener();
  handleClick();
};
main();

export { addSubmitListener, displayRamens, handleClick, main };

// ran out of time but sounded fun XD... this part would involve saving data to a database and retrieving it when the page is refreshed
const ramenList = [];
ramenList.push(selectedRamen);

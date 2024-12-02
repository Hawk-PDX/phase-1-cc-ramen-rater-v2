// GLOBAL VARIABLES
const baseUrl = `http://localhost:3000/ramens`;

// FOR POTENTIAL CLOSURES
let selectedRamen;

// DOM SELECTORS
const menu = document.querySelector("#ramen-menu");

//FETCH FUNCTIONS
function fetchRamens() {
  return fetch(baseUrl).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// RENDER FUNCTIONS
const displayRamens = () => {
  fetchRamens().then((rArr) => rArr.forEach(renderRamen));
};

function renderRamen(ramenObj) {
  console.log("🚀 ~ renderRamen ~ ramenObj:", ramenObj);
  const img = document.createElement("img");
  img.src = ramenObj.image;
  img.alt = `${ramenObj.name} thumbnail`;
  menu.append(img);
}
// EVENT LISTENERS/HANDLERS

const handleSubmit = (e) => {
  e.preventDefault();
};
//

const handleClick = (ramen) => {};

// INITIALIZERS
const addSubmitListener = () => {};

const main = () => {
  displayRamens();
  addSubmitListener();
  handleClick();
};
main();

// // index.js
// const BASE_URL = "http://localhost:3000/ramens";

// // DOM Selectors
// const ramenMenu = document.querySelectorAll("#ramen-menu");
// //const ramenDetail = document.querySelector("#ramen-detail");
// const ramenForm = document.querySelector("#ramen-form");

// // Fetch data from the API and display it
// const fetchRamens = async () => {
//   const response = await fetch(BASE_URL);
//   const ramens = await response.json();
//   displayRamens(ramens);
// };

// const displayRamens = (ramens) => {
//   ramens.map((ramen) => {
//     document.createElement("img");
//     ramens.src = ramen.image;
//     ramenMenu.append(ramen.image);
//     ramen.append("img");
//   });
// };
// function renderRamen(ramen) {
//   const detailElement = document.querySelector("#ramen-detail");
//   detailElement.innerHTML = `
//     <img src="${ramen.image}" alt="${ramen.name}">
//     <p>${ramen.description}</p>
//     <p>Restaurant: ${ramen.restaurant}</p>
//   `;
// }

// function handleRamenClick(ramen) {
//   renderRamen(ramen);
// }

// // Event listener for ramen menu click
// ramenMenu.forEach((ramen) => {
//   ramen.addEventListener("click", () => {
//     renderRamen(ramen);
//   });
// });
// function main() {
//   DOMContentLoaded(() => {
//     fetchRamens();
//     displayRamens();
//   });
// }
// Event listener for rating and comment input
// ratingInput.addEventListener("input", () => {
//   const rating = ratingInput.value;
//   const comment = commentInput.value;
//   const newRamen = {
//     rating,
//     comment,
//   };
//   fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newRamen),
//   })
//     .then((response) => response.json())
//     .then((updatedRamen) => {
//       renderRamen(updatedRamen);
//     })
//     .catch((error) => console.error(error));
// });

// Event listener for delete button
// deleteButton.addEventListener("click", () => {
//   const ramenId = ramenIdInput.value;
//   fetch(`${BASE_URL}/${ramenId}`, {
//     method: "DELETE",
//   })
//     .then((response) => response.json())
//     .then((deletedRamen) => {
//       renderRamen(deletedRamen);
//     });
// });

// // Event listener for edit button
// editButton.addEventListener("click", () => {
//   const ramenId = ramenIdInput.value;
//   const updatedRamen = {
//     name: updatedNameInput.value,
//     restaurant: updatedRestaurantInput.value,
//     image: updatedImageInput.value,
//     description: updatedDescriptionInput.value,
//     rating: updatedRatingInput.value,
//     comment: updatedCommentInput.value,
//   };
//   fetch(`${BASE_URL}/${ramenId}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedRamen),
//   })
//     .then((response) => response.json())
//     .then((updatedRamen) => {
//       renderRamen(updatedRamen);
//     })
//     .catch((error) => console.error(error));
// });

// Event listener for pagination
// previousButton.addEventListener("click", () => {
//   currentPage--;
//   fetchRamens();
// });
// nextButton.addEventListener("click", () => {
//   currentPage++;
//   fetchRamens();
// });

// // Event listener for sorting
// sortButton.addEventListener("click", () => {
//   fetchRamens();
// });
// $(selector).append(content);
// $(selector).addClass(className);
// $(selector).attr(attributeName, attributeValue);
// $(selector).text(text);
// $(selector).val(value);
// Fetch data from the API and display it

/*
// Event listener for form submission
ramenForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(ramenForm);
  const response = await fetch(BASE_URL, {
  method: "POST",
  headers: {
  "Content-Type": "application/json",
  },
  body: JSON.stringify({
  name: formData.get("name
  }),
  });
  const newRamen = await response.json();
  displayRamens(newRamen
  });
  });

  // Event listener for search button
// searchButton.addEventListener("click", () => {
//   const searchTerm = searchInput.value;
//   fetch(`${BASE_URL}?search=${searchTerm}`)
//     .then((response) => response.json())
//     .then((ramens) => {
//       displayRamens(ramens);
//     })
//     .catch((error) => console.error(error));
// });
*/

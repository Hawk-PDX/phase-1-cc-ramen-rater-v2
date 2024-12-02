# MANTRA

- FETCH the data
- SELECT DOM Elements
- CREATE new elements, as needed
- ATTACH event listeners, as needed
- ASSIGN data to element attributes
- APPEND new elements to the DOM

## Deliverables

As a user, I should

1.I should see all ramen images in menu on page load.

- [x] displayRamens() will call fetch function to get all ramen objects
- [x] select ramen-menu div in global scope
- [x] iterate the array of ramen objects
- [x] pass each ramen object to renderRamen() function
- [x] renderRamen() will create a new image element
- [x] set the src attribute of the img element to the ramen image
- [x] append the img element to the ramen-menu div

  2.Click on ramen image in menu and see details in ramen-detail div

- [] select existing elements that will display ramen data
- [] attach event listener to the ramen images
- [] use handleClick as event handler to render

  3.Fill in the new ramen form and see a new ramen added to the menu

- [] select the form
- [x] create (will happen in renderRamenForm())
- [] call addSubmitListener() to attach event listener to form
- [] handle the submit event with handleSubmit
- [] prevent default behavior
- [] get form values from event.target
- [] add values from for to new ramen object
- [] call renderRamen() with the new ramen object

### Data shape

```json
{
  "id": 1,
  "name": "Shoyu Ramen",
  "restaurant": "Nonono",
  "image": "./assets/ramen/shoyu.jpg",
  "rating": 7,
  "comment": "Delish. Can't go wrong with a classic."
}
```

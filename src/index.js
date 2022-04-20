console.log(data);

// WRITE YOUR CODE BELOW!

function createDogListItem(dog) {
  const li = document.createElement("li");
  const dogContainer = document.querySelector(".main");

  li.className = "dogs-list__button";
  li.innerText = dog.name;
}

console.log(data);

function createDogListItem(dog) {
  const li = document.createElement("li");
  const dogContainer = document.querySelector(".main");

  li.className = "dogs-list__button";
  li.innerText = dog.name;

  li.addEventListener("click", function () {
    const dogContainer = createDogCard(dog);
    const section = document.querySelector("section");
    section.remove();
    const main = document.querySelector(".main");
    main.append(dogContainer);
  });

  return li;
}

function createSection() {
  const section = document.createElement("section");
  section.className = "main__dog-section";
  return section;
}

const createDogCardDesc = (bio) => {
  const div = document.createElement("div");
  div.className = "main__dog-section__desc";

  const header = document.createElement("h3");
  const text = document.createElement("text");
  text.innerText = bio;
  header.innerText = "Bio";
  div.append(header, text);

  return div;
};

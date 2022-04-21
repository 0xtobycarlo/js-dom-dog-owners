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

function createDogCardBottomSection(dog) {
  const button = document.createElement("button");
  const text = document.createElement("p");
  const div = document.createElement("div");

  div.className = "main__dog-section__btn";

  div.append(text, button);
  return div;
}

const createDogCard = (dog) => {
  const section = createSection();
  const header = document.createElement("h2");
  header.innerText = dog.name;

  const desc = createDogCardDesc(dog.bio);
  const bottomSection = createDogCardBottomSection(dog);

  const dogImage = document.createElement("img");
  dogImage.setAttribute("src", dog.image);

  section.append(header, dogImage, desc, bottomSection);

  return section;
};

function createForm() {
  const form = document.createElement("form");

  const nameInput = createInput("name");
  const imgInput = createInput("image", "url");
  const bioInput = createInput("bio", "textarea");
  const submitInput = createInput("submit", "submit", "Add a dog!");

  const nameLabel = createLabel("name", "Dog's Name");
  const imgLabel = createLabel("image", "Dog's Picture");
  const bioLabel = createLabel("bio", "Dog's Bio");

  form.className = "form";
  submitInput.className = "form__button";

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const dogNameInput = document.querySelector("#name");
    dogNameInput.value;
    console.log(dogNameInput.value);
  });

  form.append(
    nameLabel,
    nameInput,
    imgLabel,
    imgInput,
    bioLabel,
    bioInput,
    submitInput
  );
  return form;
}

function createInput(idName, type = "text", value) {
  let input = null;

  if (type === "textarea") {
    input = document.createElement("textarea");
    input.setAttribute("rows", "5");
  } else {
    input = document.createElement("input");
    input.setAttribute("type", type);
  }

  input.setAttribute("id", idName);
  input.setAttribute("name", idName);

  if (value) input.setAttribute("value", value);

  return input;
}

function createLabel(forAttr, text) {
  const label = document.createElement("label");
  label.attributes.for = forAttr;
  label.innerText = text;

  return label;
}

function renderMainForm() {
  const section = createSection();
  const form = createForm();
  const h2 = document.createElement("h2");

  h2.innerText = "Add a new Dog";

  section.append(h2, form);

  return section;
}

function renderDogList(dogsArr) {
  const listContainer = document.querySelector(".dogs-list");
  for (const dog of dogsArr) {
    const item = createDogListItem(dog);
    listContainer.append(item);
  }
}

renderDogList(data);

const formButton = document.querySelector(".dogs-list__button--add");
const dogContainer = document.querySelector(".main");

formButton.addEventListener("click", function () {
  const renderForm = renderMainForm();
  const section = document.querySelector("section");
  section.remove();
  dogContainer.append(renderForm);
});

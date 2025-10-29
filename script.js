const pic_collections = [
  {
    title: "Nature",
    images: [
      "./img/pic-collection/nature/beach-hut.jpg",
      "./img/pic-collection/nature/avenue.jpg",
      "./img/pic-collection/nature/canyon.jpg",
      "./img/pic-collection/nature/desert.jpg",
      "./img/pic-collection/nature/forest.jpg",
      "./img/pic-collection/nature/glacier.jpg",
      "./img/pic-collection/nature/jungle.jpg",
      "./img/pic-collection/nature/open-sea.jpg",
    ],
    descriptions: [
      "Different colored Beach Huts in a row, on daytime",
      "An Avenue in Autumn times with yellow tree`s and fallen leaves",
      "The Grand Canyon, outside of an Helicopter, in the morning times",
      "A Wide Road through an deep, harshless Desert in the middle of America",
      "An foggy and rainy Forest in the depth of Rocky Mountains",
      "An icy area in the middle of Alaska with some glacier plates",
      "A boy in the deep Jungle, many birds fly around",
      "A stormy coast at the hard sea",
    ],
  },

  {
    title: "Gaming",
    images: [
      "./img/pic-collection/gaming/ps5-controller.jpg",
      "./img/pic-collection/gaming/pokemon.jpg",
      "./img/pic-collection/gaming/minecraft.png",
      "./img/pic-collection/gaming/3ds-console.jpg",
      "./img/pic-collection/gaming/selfmade-gaming-logo.png",
      "./img/pic-collection/gaming/vr-gaming.jpg",
      "./img/pic-collection/gaming/web3-gaming.jpg",
    ],
    descriptions: [
      "two PS5 Controller and one Wii-Controller in his Motionwheel",
      "A Zombie Hand with an white withered glove, that holds an Pokeball",
      "An classical Minecraft World view with shader optic and reflecting sun",
      "A 3DS on an white background.. good old times...",
      "My own created Logo, made by Gimp and DaVinci... me in Catoonsytle, my gamingtag behind, some cubes and an lightful Controller at the front",
      "An AI created Boy with an VR-Headset",
      "A Bitblock-Livingroom, symbolicly standing for the Web3 evolution, we are in",
    ],
  },

  {
    title: "Developing",
    images: [
      "./img/pic-collection/developing/matrix.png",
      "./img/pic-collection/developing/html-logo.png",
      "./img/pic-collection/developing/developing.png",
      "./img/pic-collection/developing/coffee.png",
      "./img/pic-collection/developing/anonymous.png",
    ],
    descriptions: [
      "The classical green Hacker-Matrix",
      "An cool variant of the HTML-Logo, made with AI",
      "An Developer at work, created with painting tools. In the background some code, in the front sit`s the developer on an Laptop",
      "Yea.. a Cup of Coffee... it have to be in here xD",
      "The grievious Anonymous-Hacker, we all know about them ;)",
    ],
  },

  {
    title: "Pets",
    images: [
      "./img/pic-collection/pets/aligator.jpg",
      "./img/pic-collection/pets/bird.jpg",
      "./img/pic-collection/pets/cat.jpg",
      "./img/pic-collection/pets/dog.png",
      "./img/pic-collection/pets/dragonfly.jpg",
      "./img/pic-collection/pets/horse.png",
      "./img/pic-collection/pets/monkey.jpg",
      "./img/pic-collection/pets/rabbit.jpg",
      "./img/pic-collection/pets/rhino.jpg",
      "./img/pic-collection/pets/spider.png",
    ],
    descriptions: [
      "A dangerous aligator",
      "A swan in the river, opens his wings",
      "A fluffy, white cat on an Fieldway in the autumntimes",
      "A dog looking at his target, on the grass",
      "A little green/gray dragonfly",
      "A black Horse at the sunset in the Mountains",
      "A Monkey who looks bored with wheat in his mouth",
      "A rabbit in the middle of an field of flowers",
      "A rhino in the savana, looking and start to running at you ;)",
      "An jumping spider at an woodpiece",
    ],
  },

  {
    title: "Technology",
    images: [
      "./img/pic-collection/technology/blockchain-technology.jpg",
      "./img/pic-collection/technology/binary-codex.jpg",
      "./img/pic-collection/technology/artificial-intelligence.jpg",
      "./img/pic-collection/technology/cpu.jpg",
      "./img/pic-collection/technology/vintage-tech.png",
      "./img/pic-collection/technology/world-wide-connection.jpg",
    ],
    descriptions: [
      "Bitcoin illustration within an cube of glass, representative for Blockchain Technology",
      "3 Monitors and at the background a sphere build of our binary codes",
      "An AI Brain in techno-optic on an black background",
      "An classical CPU-Chip",
      "An old TV in pixel graphic, with beige background",
      "An Illustration of the world wide connection through the internet. Theres an Planet and symbolicly connections printed on, that goes all aorund the world and connects different countries and regions",
    ],
  },
];

let pictureContainer = document.getElementById(`pictureContainer`);

let overlay = document.getElementById(`overlay`);
let overlayTitle = document.getElementById(`overlayTitle`);
let overlayPic = document.getElementById(`overlayPic`);

let currentCollectionIndex = 0;
let currentImageIndex = 0;

function renderPictureContainer() {
  for (let index = 0; index < pic_collections.length; index++) {
    pictureContainer.innerHTML += `<button class="CollectionContainer" onclick="openOverlay(${index})">
            <img alt="${pic_collections[index].descriptions[0]}" src="${pic_collections[index].images[0]}">
            <h2>${pic_collections[index].title}</h2>
            </button>   
            `;
  }

  overlay.classList.add(`closed`);
}

function openOverlay(collectionIndex) {
  currentCollectionIndex = collectionIndex;

  updateOverlayImage();

  overlay.showModal();
  overlay.classList.add(`opened`);
  overlay.classList.remove(`closed`);
}

function nextImage() {
  const current_collection = pic_collections[currentCollectionIndex];

  if (currentImageIndex < current_collection.images.length - 1) {
    currentImageIndex++;
  } else {
    currentImageIndex = 0;
  }

  updateOverlayImage();
}

function prevImage() {
  const current_collection = pic_collections[currentCollectionIndex];

  if (currentImageIndex > 0) {
    currentImageIndex--;
  } else {
    currentImageIndex = current_collection.images.length - 1;
  }

  updateOverlayImage();
}

function updateOverlayImage() {
  const current_collection = pic_collections[currentCollectionIndex];

  overlayTitle.textContent = current_collection.title;
  overlayTitle.title = `Gallery of ${current_collection.title} Pictures`;

  overlayPic.src = current_collection.images[currentImageIndex];
  overlayPic.alt = current_collection.descriptions[currentImageIndex];
}

function closeOverlay() {
  overlay.classList.add(`remove`);

  setTimeout(() => {
    overlay.close();
    overlay.classList.remove(`remove`);
    overlay.classList.remove(`opened`);
    overlay.classList.add(`closed`);
  }, 300);

  currentImageIndex = 0;
  currentCollectionIndex = 0;
}

overlay.addEventListener("click", (e) => {
  const dialog_backdrop = overlay.getBoundingClientRect();

  if (
    e.clientX < dialog_backdrop.left ||
    e.clientX > dialog_backdrop.right ||
    e.clientY < dialog_backdrop.top ||
    e.clientY > dialog_backdrop.bottom
  ) {
    closeOverlay();
  }
});

document.addEventListener("keydown", function (e) {
  if (overlay.classList.contains("opened")) {
    if (e.key === "ArrowLeft") nextImage();
    if (e.key === "ArrowRight") prevImage();
    if (e.key === "Escape") closeOverlay();
  }

  if (overlay.classList.contains("closed")) {
    if (e.key === "Enter") openOverlay();
  }
});

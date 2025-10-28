// my picture collections as array`s
const PIC_COLLECTIONS = [
    
    {   title: "Nature",
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
            "An Picture of different colored Beach Huts",
            "An Picture of an Avenue in Autumn times with yellow tree`s and fallen leaves",
            "An Picture of the Grand Canyon, outside of an Helicopter, in the morning times",
            "An Picture of an Wide Road through an deep Desert in the middle of America",
            "An Picture of an foggy Forest in the depth of Rocky Mountains",
            "An Picture of an icy area in the middle of Alaska with some glacier plates",
            "An Picture of an boy in the deep Jungle, many birds fly around",
            "An Picture of a stormy coast at the hard sea",
        ],

    },

    {   title: "Gaming",
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
            "An Picture of an PS5 Controller",
            "An Picture of an Zombie Hand, that holds an Pokeball",
            "An Picture of an Minecraft World view with shader optic and reflecting sun",
            "An Picture of an 3DS.. good old times...",
            "An Picture of my own Logo, made by Gimp and DaVinci, ich hope you like it",
            "An Picture of an Boy with an VR-Headset",
            "An Picture of an Bitblock, symbolicly standing for the Web3 evolution, we are in",
        ],

    },

    {   title: "Developing",
        images: [
            "./img/pic-collection/developing/matrix.png",
            "./img/pic-collection/developing/html-logo.png",
            "./img/pic-collection/developing/developing.png",
            "./img/pic-collection/developing/coffee.png",
            "./img/pic-collection/developing/anonymous.png",
        ],
        descriptions: [
            "An Picture of an classic green Matrix",
            "An Picture of the classic HTML-Logo, made with AI",
            "An Picture of an Developer at work",
            "An Picture of an Coffee... it have to be in here xD",
            "An Picture of the Anonymous, we all know about them ;)",
        ],

    },

    {   title: "Pets",
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
            "An Picture of an aligator",
            "An Picture of an swan in the River",
            "An Picture of anfluffy cat",
            "An Picture of an dog",
            "An Picture of an little friendly dragonfly",
            "An Picture of an Horse at the sunset",
            "An Picture of an Monkey who looks bored",
            "An Picture of an rabbit in the middle of an field of flowers",
            "An Picture of an rhino in the savana",
            "An Picture of an jumping spider at YOUR chair",
        ],

    },

    {   title: "Technology",
        images: [
            "./img/pic-collection/technology/blockchain-technology.jpg",
            "./img/pic-collection/technology/binary-codex.jpg",
            "./img/pic-collection/technology/artificial-intelligence.jpg",
            "./img/pic-collection/technology/cpu.jpg",
            "./img/pic-collection/technology/vintage-tech.png",
            "./img/pic-collection/technology/world-wide-connection.jpg",
        ],
        descriptions: [
            "An Picture of Bitcoin, representative for Blockchain Technology",
            "An Picture of our binary codes",
            "An Picture of an AI Brain in techno-optic",
            "An Picture of classical CPU-Chip",
            "An Picture of old TV in pixel graphic",
            "An Picture of standing for the world wide connection through the internet",
        ],

    },

];

// list of variables
let pictureContainer = document.getElementById(`pictureContainer`);

let overlay = document.getElementById(`overlay`);
let overlayTitle =document.getElementById(`overlayTitle`);
let overlayPic = document.getElementById(`overlayPic`);

let currentCollectionIndex = 0;
let currentImageIndex = 0;





// Picture-Container filled with jscript
function renderPictureContainer() {
    
    for (let index = 0; index < PIC_COLLECTIONS.length; index++) {
        
        pictureContainer.innerHTML += 
            `<button class="CollectionContainer" onclick="openOverlay(${index})">
            <img alt="${PIC_COLLECTIONS[index].descriptions[0]}" src="${PIC_COLLECTIONS[index].images[0]}">
            <h2>${PIC_COLLECTIONS[index].title}</h2>
            </button>   
            `;
    };

    overlay.classList.add(`Closed`);

};

// open-overlay-function
function openOverlay(collectionIndex){
    
    currentCollectionIndex = collectionIndex;

    updateOverlayImage();

    overlay.showModal();
    overlay.classList.add(`Opened`);
    overlay.classList.remove(`Closed`);

};

    // next-button
    function nextImage() {

        const CURRENT_COLLECTION = PIC_COLLECTIONS[currentCollectionIndex];

        if (currentImageIndex < CURRENT_COLLECTION.images.length -1) {
            currentImageIndex++;
        } else {
            currentImageIndex = 0;
        };
            
        updateOverlayImage();
     
    };
    
    // preview-button
    function prevImage() {

        const CURRENT_COLLECTION = PIC_COLLECTIONS[currentCollectionIndex];

        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else {
            currentImageIndex = CURRENT_COLLECTION.images.length -1;
        };

        updateOverlayImage();

    };
        
        // picture-update function at buttonclick
        function updateOverlayImage() {
            
            const CURRENT_COLLECTION = PIC_COLLECTIONS[currentCollectionIndex];
            
            overlayTitle.textContent = CURRENT_COLLECTION.title;
            overlayTitle.title = `Gallery of ${CURRENT_COLLECTION.title} Pictures`;
            
            overlayPic.src = CURRENT_COLLECTION.images[currentImageIndex];
            overlayPic.alt = CURRENT_COLLECTION.descriptions[currentImageIndex];

        };

// close-overlay-function
function closeOverlay(){

    overlay.classList.add(`Remove`);

    setTimeout(() => {
            overlay.close();
            overlay.classList.remove(`Remove`);
            overlay.classList.remove(`Opened`);
            overlay.classList.add(`Closed`);
            },
        300, 
    );

    currentImageIndex = 0;
    currentCollectionIndex = 0;

};

    // Backdrop-Exit
    overlay.addEventListener("click", (e) => {
            
        const DIALOG_BACKDROP = overlay.getBoundingClientRect();

            if (
                e.clientX < DIALOG_BACKDROP.left ||
                e.clientX > DIALOG_BACKDROP.right ||
                e.clientY < DIALOG_BACKDROP.top ||
                e.clientY > DIALOG_BACKDROP.bottom
            )   {closeOverlay();};

        },

    );

// Key-functions
document.addEventListener("keydown", function(e){

        if (overlay.classList.contains("Opened")) {

            if (e.key === "ArrowLeft") nextImage();
            if (e.key === "ArrowRight") prevImage();
            if (e.key === "Escape") closeOverlay();

        };

        if  (overlay.classList.contains("Closed")) {

            if (e.key === "Enter") openOverlay();

        };

    },

);
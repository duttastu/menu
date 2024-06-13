const menuData = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        description: "Classic Italian pasta with meat sauce.",
        price: 240,
        image: "images/spagetti.jpg",
        category: "lunch"
    },
    {
        id: 2,
        name: "Chicken Caesar Salad",
        description: "Fresh salad with grilled chicken and Caesar dressing.",
        price: 180,
        image: "images/ccs.jpg",
        category: "lunch"
    },
    {
        id: 3,
        name: "Margherita Pizza",
        description: "Traditional pizza with tomato, mozzarella, and basil.",
        price: 200,
        image: "images/m.jpg",
        category: "lunch"
    },
    {
        id: 4,
        name: "Buttermilk Pancakes",
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed ",
        price: 240,
        image: "images/bp.jpeg",
        category: "breakfast"
    },
    {
        id: 5,
        name: "Diner Double",
        description: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        price: 160,
        image: "images/dd.jpeg",
        category: "breakfast"
    },
    {
        id: 6,
        name: "Eggs Benedict",
        description: "Poached eggs, Canadian bacon, and hollandaise sauce on English muffins.",
        price: 250,
        image: "images/eb.jpg",
        category: "breakfast"
    },
    {
        id: 7,
        name: "Caesar Wrap",
        description: "Grilled chicken, romaine lettuce, and Caesar dressing in a wrap.",
        price: 240,
        image: "images/cw.jpg",
        category: "lunch"
    },
];

const menuContainer = document.getElementById('menu-container');

function createMenuCard(item) {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;

    const info = document.createElement('div');
    info.classList.add('info');

    const name = document.createElement('h3');
    name.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const price = document.createElement('div');
    price.classList.add('price');
    price.textContent = `₹${item.price.toFixed(2)}`;

    info.appendChild(name);
    info.appendChild(description);
    info.appendChild(price);

    card.appendChild(image);
    card.appendChild(info);

    return card;
}
const categoryButtons = document.querySelectorAll('.filter-btn');

function filterMenu(category) {
    menuContainer.innerHTML = "";
    const filteredMenu = (category === "all") ? menuData : menuData.filter(item => item.category === category);   
    displayMenu(filteredMenu);
}

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedCategory = button.textContent.toLowerCase();
        filterMenu(selectedCategory);
    });
});

function displayMenu(menu) {
    menu.forEach(item => {
        const card = createMenuCard(item);
        menuContainer.appendChild(card);
    });
}

displayMenu(menuData);

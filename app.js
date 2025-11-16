const meals = [
    { name: "Affogato", img: "images/Affogato.jpg" },
    { name: "Americano", img: "images/Americano.jpg" },
    { name: "Bibimbap", img: "images/Bibimbap.jpg" },
    { name: "Breve", img: "images/Breve.jpg" },
    { name: "Cafe Late", img: "images/CafeLate.jpg" },
    { name: "Cortado", img: "images/Cortado.jpg" },
    { name: "Croissant", img: "images/Croissant.jpg" },
    { name: "Espresso", img: "images/Espresso.jpg" },
    { name: "Flat White", img: "images/FlatWhite.jpg" },
    { name: "Iced Coffee", img: "images/IcedCoffee.jpg" },
    { name: "Kimchi", img: "images/Kimchi.jpg" },
    { name: "Matcha Late", img: "images/MatchaLate.jpg" },
    { name: "Onigiri", img: "images/Onigiri.jpg" },
    { name: "Pizza", img: "images/Pizza.jpg" },
    { name: "Pocky", img: "images/Pocky.jpg" },
    { name: "Ramen", img: "images/Ramen.jpg" },
    { name: "Romano", img: "images/Romano.jpg" },
    { name: "Shakshouka", img: "images/Shakshouka.jpg" },
    { name: "Sourdough", img: "images/SourDough.jpg" },
    { name: "Tacos", img: "images/Tacos.jpg" },
];

const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

document.getElementById("generate").addEventListener("click", () => {
    const container = document.getElementById("meal-container");
    container.innerHTML = "";

    // Shuffle meals and pick 7
    const selected = shuffle([...meals]).slice(0,7);

    weekdays.forEach((day, index) => {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("weekday");
        dayDiv.textContent = day;

        const card = document.createElement("div");
        card.classList.add("card");
        const meal = selected[index];

        card.innerHTML = `
            <img src="${meal.img}" alt="${meal.name}">
            <h3>${meal.name}</h3>
        `;

        container.appendChild(dayDiv);
        container.appendChild(card);
    });
});

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}


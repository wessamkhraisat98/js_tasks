let name = prompt("Please Enter your name:");
let age = prompt("Please Enter your age:");
let gender = prompt("Please Enter your gender (male[M] or female[F]):");



if (gender == "male" || gender == "M") {
    alert("Welcome Mr. " + name);
}
else if (gender == "female" || gender == "F") {
    alert("Welcome Ms. " + name);
}
else {
    alert("Welcome " + name);
}

let menu = [
    {
        name: "Burger",
        price: 5,
        category: "Fast Food",
        available: true
    },

    {
        name: "Shawarma",
        price: 4,
        category: "Fast Food",
        available: true
    },

    {
        name: "Zinger",
        price: 6,
        category: "Chicken",
        available: true
    },

    {
        name: "Pizza",
        price: 8,
        category: "Italian",
        available: false
    },

    {
        name: "Pasta",
        price: 7,
        category: "Italian",
        available: true
    }
];


function showMenu() {

    let menuText = "MENU:\n\n";

    for (let i = 0; i < menu.length; i++) {

        if (!menu[i].available) {
            continue;
        }

        menuText +=
            menu[i].name +
            " - $" +
            menu[i].price +
            " - " +
            menu[i].category +
            "\n";
    }

    alert(menuText);
}


function findFood(foodName) {

    let selectedFood = null;

    for (let i = 0; i < menu.length; i++) {

        if (!menu[i].available) {
            continue;
        }

        if (menu[i].name.toLowerCase() == foodName.toLowerCase()) {

            selectedFood = menu[i];

            break;
        }
    }

    return selectedFood;
}


showMenu();


let selectedFood = null;

while (selectedFood == null) {

    let foodName = prompt(
        "Please enter the food name:"
    );

    selectedFood = findFood(foodName);

    if (selectedFood == null) {
        alert(
            "Food not found or unavailable. Please try again."
        );
    }
}


let foodDetails = "";

for (let property in selectedFood) {

    foodDetails +=
        property +
        ": " +
        selectedFood[property] +
        "\n";
}

alert(foodDetails);


let quantity = prompt(
    "How many " + selectedFood.name + " do you want?"
);

quantity = Number(quantity);


let totalPrice = selectedFood.price * quantity;


document.write(`

    <div class="order-summary">

        <h2>Order Summary</h2>

        <div class="order-info">
            <strong>Customer Name</strong>
            <span>${name}</span>
        </div>

        <div class="order-info">
            <strong>Age</strong>
            <span>${age}</span>
        </div>

        <div class="order-info">
            <strong>Food</strong>
            <span>${selectedFood.name}</span>
        </div>

        <div class="order-info">
            <strong>Category</strong>
            <span>${selectedFood.category}</span>
        </div>

        <div class="order-info">
            <strong>Price</strong>
            <span>$${selectedFood.price}</span>
        </div>

        <div class="order-info">
            <strong>Quantity</strong>
            <span>${quantity}</span>
        </div>

        <div class="order-info">
            <strong>Total Price</strong>
            <span>$${totalPrice}</span>
        </div>

        <div class="status green">
            Order Confirmed
        </div>

    </div>

`);
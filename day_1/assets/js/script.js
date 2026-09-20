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

if (age < 16) {

    alert("You are not eligible to place an order");

    document.write(`
        <div class="order-summary">
            <h2>Order Summary</h2>

            <div class="order-info">
                <strong>Name</strong>
                <span>${name}</span>
            </div>

            <div class="order-info">
                <strong>Age</strong>
                <span>${age}</span>
            </div>

            <div class="order-info">
                <strong>Gender</strong>
                <span>${gender}</span>
            </div>

            <div class="order-info">
                <strong>Order</strong>
                <span>---</span>
            </div>

            <div class="status red">
                Order Status: Not Eligible
            </div>
        </div>
    `);

}
else {

    let order = prompt(
        "Please Choose your order:\nBurger\nShawarma\nZinger"
    );

    let isAvailable = false;

    if (
        order == "Burger" ||
        order == "Shawarma" ||
        order == "Zinger"
    ) {
        isAvailable = true;
        alert("Your order is being prepared");
    }
    else {
        isAvailable = false;
        alert("Invalid order. Please try again");
    }

    let orderStatus;

    if (age >= 18 && isAvailable) {
        alert("Order confirmed");
        orderStatus = "Order Confirmed";
    }
    else if (age < 18 || !isAvailable) {
        alert("Order requires verification");
        orderStatus = "Order Requires Verification";
    }

    console.log("Customer Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Order: " + order);
    console.log("Order Status: " + orderStatus);

    let statusClass;

    if (orderStatus == "Order Confirmed") {
        statusClass = "green";
    }
    else {
        statusClass = "yellow";
    }

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
                <strong>Gender</strong>
                <span>${gender}</span>
            </div>

            <div class="order-info">
                <strong>Order</strong>
                <span>${order}</span>
            </div>

            <div class="status ${statusClass}">
                ${orderStatus}
            </div>
        </div>
    `);
}

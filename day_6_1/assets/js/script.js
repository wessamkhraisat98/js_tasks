const form = document.getElementById("orderForm");

const orderSelect = document.getElementById("order");

fetch("menu.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("menu.json error loading file");
        }
        return response.json();
    })
    .then(response => response.json())
    .then(menu => {

        localStorage.setItem("menu", JSON.stringify(menu));

        for (let i = 0; i < menu.length; i++) {

            const item = menu[i];

            const option = document.createElement("option");

            option.value = item.mealName;

            option.textContent =
                `${item.mealName} - $${item.price} - ${
                    item.availability ? "Available" : "Not Available"
                }`;

            if (!item.availability) {
                option.disabled = true;
            }

            orderSelect.appendChild(option);
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });


form.onsubmit = function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const order = document.getElementById("order").value;

    const usernameRegex = /^\S+$/;
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const phoneRegex = /^07\d{8}$/;

    if (username === "") {
        alert("Username cannot be empty");
        return;
    }

    if (!usernameRegex.test(username)) {
        alert("Username must not contain spaces");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters and contain at least one number");
        return;
    }

    if (!phoneRegex.test(phone)) {
        alert("Phone must be exactly 10 digits and start with 07");
        return;
    }

    if (order === "") {
        alert("Please select an order");
        return;
    }

    localStorage.setItem("order", order);

    sessionStorage.setItem("username", username);

    const savedOrder = localStorage.getItem("order");
    const savedUsername = sessionStorage.getItem("username");

    document.getElementById("message").innerHTML = `
        <div class="message-card">

            <h2 class="message-title">
                Welcome, ${savedUsername}
            </h2>

            <div class="order-info">

                <p class="info-row">
                    <strong class="info-label">Saved Order:</strong>
                    <span class="info-value">${savedOrder}</span>
                </p>

                <p class="info-row">
                    <strong class="info-label">Saved Username:</strong>
                    <span class="info-value">${savedUsername}</span>
                </p>

            </div>

        </div>
    `;
};
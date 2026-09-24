const form = document.getElementById("orderForm");
form.onsubmit = function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const order = document.getElementById("order").value;

    const usernameRegex = /^\S+$/;

    const passwordRegex = /^(?=.*\d).{8,}$/;
    // const passwordRegex = /^(?=\S*\d).{8,}$/; \S for no spaces
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
        <h2 class="success">Welcome, ${savedUsername}</h2>

        <p>
            <strong>Saved Order:</strong>
            ${savedOrder}
        </p>

        <p>
            <strong>Saved Username:</strong>
            ${savedUsername}
        </p>
    `;

}
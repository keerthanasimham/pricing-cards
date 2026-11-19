const toggle = document.getElementById("toggle");
const cards = document.querySelectorAll(".card");

let yearly = false;

// Monthly and yearly price switch
toggle.addEventListener("click", function() {

    yearly = !yearly;

    toggle.textContent = yearly
        ? "Switch to Monthly"
        : "Switch to Yearly";

    toggle.setAttribute("aria-pressed", String(yearly));

    cards.forEach(function(card) {

        const price = yearly
            ? card.dataset.yearly
            : card.dataset.monthly;

        card.querySelector(".price").textContent = price;

    });

});

// Get Started buttons
const buttons = document.querySelectorAll(".choose");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const plan = button.closest(".card")
            .querySelector("h2").textContent;

        alert("You selected the " + plan + " plan!");

    });

});
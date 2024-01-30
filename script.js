//Menu Navigation on Mobile

const menu = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    if (menu.classList.contains("fa-bars")) {
        nav.classList.add('open-nav');
        menu.classList.replace("fa-bars", "fa-xmark");
    } else {
        nav.classList.remove('open-nav')
        menu.classList.replace("fa-xmark", "fa-bars");
    }
});

//FAQ Accordion

let accordion = document.querySelectorAll(".accordion-container .accordion");

accordion.forEach((acco) => {
    acco.addEventListener('click', () => {
        accordion.forEach((subcontent) => {
            subcontent.classList.remove("active")
        })
        acco.classList.add("active");
    });
});

//Form Validation

document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.getElementById("newsletterform");
    const subscribeBtn = document.querySelector(".news-btn");
    const loadingIndicator = document.querySelector(".loading-indicator");
    const errorMessageDiv = document.getElementById("errorMessage");
    const resultDiv = document.getElementById("subscription-result");
    const emailInput = document.querySelector(".email");

    subscribeBtn.addEventListener("click", (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Hide previous error message
        errorMessageDiv.textContent = "";

        // Display loading indicator
        loadingIndicator.style.display = "block";

        // Client-side validation
        if (!formElement.checkValidity()) {
            // Display error message
            errorMessageDiv.textContent = "Please enter a valid email address.";

            // Hide loading indicator
            loadingIndicator.style.display = "none";
            return;
        }

        // Simulate asynchronous subscription
        setTimeout(() => {
            // Simulate a successful subscription
            resultDiv.textContent = "Welcome aboard!";

            // Clear the input field
            emailInput.value = "";

            // Hide loading indicator
            loadingIndicator.style.display = "none";

            // Clear the success message after 3 seconds (adjust the time as needed)
            setTimeout(() => {
                resultDiv.textContent = "";
            }, 4000);
        }, 1000); // Simulate a 1-second delay (replace with an actual asynchronous request)
    });
});

//Faq Scroll

function scrollToContact() {
    document.querySelector(".faq").scrollIntoView({
        behavior: 'smooth'
    });
}

// Attach the function to the link or button click event
document.querySelector('a[href="#faq"]').addEventListener('click', scrollToContact);
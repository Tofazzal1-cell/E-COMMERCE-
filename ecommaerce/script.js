
// CATEGORY DROPDOWN

const categoryBtn = document.getElementById("categoryBtn");
const categoryDropdown = document.getElementById("categoryDropdown");

categoryBtn.addEventListener("click", () => {
    categoryDropdown.classList.toggle("show");
});


// MOBILE MENU

const mobileMenu = document.getElementById("mobileMenu");
const navigation = document.getElementById("navigation");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = mobileMenu.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});


// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchProducts() {
    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a product name!");
    } else {
        alert("You searched for: " + searchValue);
    }
}

searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchProducts();
    }
});


// CLOSE CATEGORY DROPDOWN WHEN CLICKING OUTSIDE

document.addEventListener("click", (event) => {
    if (
        !categoryBtn.contains(event.target) &&
        !categoryDropdown.contains(event.target)
    ) {
        categoryDropdown.classList.remove("show");
    }
});

// ======banner part start===========

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

    category.addEventListener("click", function () {

        // Remove previous active class
        categories.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class
        this.classList.add("active");

        // Get category name
        const categoryName = this.dataset.category;

        console.log("Selected Category:", categoryName);

    });

});
// ==========prodact part start==========

const shopButtons = document.querySelectorAll(".shop-btn");

shopButtons.forEach(button => {

    button.addEventListener("click", function () {

        const productName = this.dataset.product;

        alert("You selected: " + productName);

    });

});

// ==========prodext part end========
// =======fotter part start=========

// NEWSLETTER FORM

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("emailInput").value.trim();

    if (email === "") {
        alert("Please enter your email address!");
        return;
    }

    alert("Thank you for subscribing to ROVELUX!");

    newsletterForm.reset();

});


// CURRENT YEAR

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


// BACK TO TOP

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========fotter part end========
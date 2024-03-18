// enlarge.js
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".enlargeable");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeButton = document.querySelector(".close");

    images.forEach(image => {
        image.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("popup-overlay").style.display = "none";
});

// Store the current project index
let currentProjectIndex = -1;

function openPopup(index) {
    const overlay = document.getElementById("popup-overlay");
    const popupTitle = document.getElementById("popup-title");
    const popupDescription = document.getElementById("popup-description");
    const popupLink = document.getElementById("popup-link");
    const popupImg = document.getElementById("popupimage");

    const projectData = [
        {
            name: "Website Design for an Event Management Company",
            description: "Presenting a minimalist UI/UX design for a California-based event management firm, prioritizing streamlined event management and outstanding pre and post-event customer experiences.",
            link: "https://medium.com/@abishekgyawali04/case-study-website-design-for-an-event-management-company-ef8f5ace15e",
            imageSrc: "images/event.png"
        },
        {
            name: "Case Study: Jackson’s Hardware Website Redesign",
            description: "The need was to create a new layout and new arrangements that could logically represent the company’s wide range of services, including all associated brands.",
            link: "https://medium.com/@abishekgyawali04/case-study-jacksons-hardware-website-redesign-8fff51ad6453",
            imageSrc: "images/websiteimage.png"
        },
        {
            name: "Case Study: A ticketing solution for movie lovers",
            description: "NT is a mobile and web app that allows users to conveniently purchase movie tickets. It was developed using a goal-directed design approach focused on understanding and fulfilling the needs of movie enthusiasts.",
            link: "https://medium.com/design-bootcamp/case-study-a-ticketing-solution-for-movie-lovers-9cfdaa54e91d",
            imageSrc: "images/nepalithingsfull.jpg"
        },
        {
            name: "Hello, this is a test",
            description: "Project Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: "URL_HERE_1",
            imageSrc: "images/work-1.png"
        },
        
    ];

    const project = projectData[index];

    popupTitle.textContent = "" + project.name;
    popupDescription.innerHTML = "" + project.description;

    const img = document.createElement("img");
    img.src = project.imageSrc;
    img.alt = project.name;
    img.classList.add("popup-image");

    // Clear existing content before adding the image
    while (popupImg.firstChild) {
        popupImg.removeChild(popupImg.firstChild);
    }

    popupImg.appendChild(img);
    popupLink.href = project.link;

    document.body.style.overflow = "hidden";
    overlay.style.display = "block";

    // Store the current project index
    currentProjectIndex = index;
}

function closePopup() {
    document.body.style.overflow = "auto";
    console.log("popup-close");
    document.getElementById("popup-overlay").style.display = "none";

    // Clear the cache when closing the popup
    if (currentProjectIndex !== -1) {
        const popupImg = document.getElementById("popupimage");
        // Clear the image cache by removing the image element
        while (popupImg.firstChild) {
            popupImg.removeChild(popupImg.firstChild);
        }
        currentProjectIndex = -1;
    }
}

// Add an event listener to clear the cache when the user navigates away from the page
window.addEventListener("beforeunload", function () {
    closePopup();
});



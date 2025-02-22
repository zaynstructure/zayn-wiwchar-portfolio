document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".visuals-container img");
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = '<span class="close">&times;</span><img>';
    document.body.appendChild(modal);
    
    const modalImg = modal.querySelector("img");
    const closeModal = modal.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.classList.add("active");
            modalImg.src = img.src;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});
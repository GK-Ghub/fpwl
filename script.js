
document.addEventListener("DOMContentLoaded", function () {
   const chooseSizeButton = document.getElementById("choose-size");
   const chooseSizeButtonOverlay = document.getElementsByClassName("choose-size-overlay")[0];
   const chooseSizeButtonForm = document.getElementsByClassName("choose-size-form")[0];

    const slidesContainer = document.getElementById("slides-container");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");
    const thumbnailsContainer = document.getElementById("thumbnails");
    const thumbnails = thumbnailsContainer.children;
    let currentIndex = 0;

    Array.from(thumbnails).map((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            currentIndex = index;
            updateSlidePosition();
        });
    });

    nextButton.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });


    function updateSlidePosition() {
        const translateValue = -currentIndex * slideWidth;
        slidesContainer.style.transform = `translateX(${translateValue}px)`;

        Array.from(thumbnails).map((thumbnail) => {
            thumbnail.classList.remove("active");
        });
        thumbnails[currentIndex].classList.add("active");
        thumbnails[currentIndex].scrollIntoView({ behavior: "smooth"});
    }


    chooseSizeButton.addEventListener("click", (e) => {
       e.preventDefault();
       chooseSizeButtonOverlay.classList.add('active');

    });

});

function selectSize(size){
   const sizeInput = document.getElementById("size-input");
   sizeInput.innerText = size;
    }
function closeOverlay(){
   const chooseSizeButtonOverlay = document.getElementsByClassName("choose-size-overlay")[0]
   chooseSizeButtonOverlay.classList.remove('active');
}

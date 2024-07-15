

  alert('Welcome To Ausbless Bakery Site')

  const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelectorAll(".container-slide .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelectorAll(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    //Handle Scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;

      //update thumb positon on mouse move
      const handleMouseMove = () => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const maxThumbsPosition = sliderScrollbar.getBoundingClientRect() .width = - scrollbarThumb.offsetWidth;

        const boundedPosition = Math.max(0, Math.min(maxThumbsPosition, newThumbPosition));
        const scrollPosition = (boundedPosition / maxThumbsPosition) * maxScrollLeft;
        imageList.scrollLeft = scrollPosition;

        scrollbarThumb.style.left = `$(boundedPosition)px`;
      }

      //remove eventlisteners on mouse up
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }

      //add event listener for drag interaction//
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    })

  // slide image according to the slide buttons clicks //
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behaviour: "smooth"});
    })
  });
  
  const handleSlideButtons = () => {
    slide-Buttons[0].style.display = imageList.scrolLeft <= 0 ? "none" : "block";
    slide-Buttons[1].style.display = imageList.scrolLeft >= maxScrollLeft ? "none" : "block";
  }

  //update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const ThumbPosition = (scrollPosition /maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${ThumbPosition}px`;
  }

imageList.addEventListener("scroll", () => {
  handleSlideButtons()
  updateScrollThumbPosition();
});
  }

    window.addEventListener("load", initSlider)
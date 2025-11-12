document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    let touchstartX = 0;
    let touchendX = 0;
    function handleGesture() {
      if (touchendX < touchstartX - 40) {
        // Swipe esquerda - próximo slide
        bootstrap.Carousel.getInstance(carouselElement).next();
      }
      if (touchendX > touchstartX + 40) {
        // Swipe direita - slide anterior
        bootstrap.Carousel.getInstance(carouselElement).prev();
      }
    }
    carouselElement.addEventListener('touchstart', function(event) {
      touchstartX = event.changedTouches[0].screenX;
    }, false);
    carouselElement.addEventListener('touchend', function(event) {
      touchendX = event.changedTouches[0].screenX;
      handleGesture();
    }, false);
  });
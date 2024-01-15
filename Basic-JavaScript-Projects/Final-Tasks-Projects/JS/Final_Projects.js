let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll(".mySlides");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";

        // Change slide every 1 seconds (1000 milliseconds)
        setTimeout(showSlides, 2000);
    }

// Sticky button
    document.addEventListener('DOMContentLoaded', function () {
        const contactButton = document.getElementById('sticky-contact-button');
        const contactPopup = document.getElementById('contact-popup');
      
        contactButton.addEventListener('click', function () {
          contactPopup.style.display = 'flex';
        });
      
        contactPopup.addEventListener('click', function (e) {
          if (e.target === contactPopup) {
            contactPopup.style.display = 'none';
          }
        });
      });
      
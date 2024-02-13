// ALL REVIEWS ANIMATION
function AllReviewsAnimation(){
  document.addEventListener('DOMContentLoaded', function () {
    const allReviewsContainer = document.querySelector('.all-reviews-main-container');
    const newReleaseGamesContainer = document.querySelector('.new-release-games-main-container');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          allReviewsContainer.classList.add('in-view');
          newReleaseGamesContainer.classList.add('in-view');
        }
      });
    }, { threshold: 0 });
  
    observer.observe(allReviewsContainer);
    observer.observe(newReleaseGamesContainer);
  });
}
// PUPULAR REVIEWS ANIMATION
function PopularReviewsAnimation(){
  document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('.popular-reviews-container');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when the top of the element enters the viewport
          reviewsContainer.classList.add('in-view');
        }
      });
    }, { threshold: 0 });
  
    observer.observe(reviewsContainer);
  });
}
// REVIEWS ANIMATION
function ReviewsAnimation(){
  document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('.reviews-container');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when the top of the element enters the viewport
          reviewsContainer.classList.add('in-view');
        }
      });
    }, { threshold: 0 });

    observer.observe(reviewsContainer);
  });
}
//SIDEBAR ANIMATION
function SidebarFixed(){
  document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
  
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const triggerPosition = 800; 
  
      if (scrollPosition >= triggerPosition) {
        sidebar.classList.add('fixed');
      } else {
        sidebar.classList.remove('fixed');
      }
    });
  });
}
function SideBarAnimation(){
  document.addEventListener('DOMContentLoaded', function () {
    const reviewsContainer = document.querySelector('.sidebar');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'in-view' class when at least 50% of the element is visible
          reviewsContainer.classList.add('in-view');
        }
      });
    }, { threshold: 0.75 });

    observer.observe(reviewsContainer);
  });
}

// calling all the function
AllReviewsAnimation();
PopularReviewsAnimation();
ReviewsAnimation();
SidebarFixed();
SideBarAnimation();



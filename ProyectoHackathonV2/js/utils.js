// SCROLL STOP BEFORE
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));

    if (targetElement) {
      const offset = 90;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});


// Cuenta atrás

const DATE_TARGET = new Date('02/22/2024 8:31 AM');

const SPAN_DAYS = document.querySelector('span#days');
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');

const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

function updateCountdown() {
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
    
    SPAN_DAYS.textContent = REMAINING_DAYS;
    SPAN_HOURS.textContent = REMAINING_HOURS;
    SPAN_MINUTES.textContent = REMAINING_MINUTES;
    SPAN_SECONDS.textContent = REMAINING_SECONDS;
}

updateCountdown();

setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);

// prueba

addEventListener('load', function() {
  var altura = document.getElementById('nav').offsetTop;
  console.log(altura);

  window.addEventListener('scroll', function() {
    if (window.scrollY > altura) {
      document.getElementById('nav').classList.add('nav-fixed');
    } else {
      document.getElementById('nav').classList.remove('nav-fixed');
    }
  });

}, false);



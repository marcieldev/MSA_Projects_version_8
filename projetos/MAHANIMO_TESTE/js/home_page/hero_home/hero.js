const heroImage = document.querySelector(".hero-image img");

const heroImages = [
  "assets/img/hero/dragon_ball_1.jpg",
  "assets/img/hero/solo_levenling_1.jpg",
  "assets/img/hero/solo_levenling_2.jpg",
  "assets/img/hero/naruto_1.jpg"
];

let currentHero = 0;

function changeHeroImage() {
  currentHero++;

  if (currentHero >= heroImages.length) {
    currentHero = 0;
  }

  heroImage.src = heroImages[currentHero];
}

setInterval(changeHeroImage, 5000);
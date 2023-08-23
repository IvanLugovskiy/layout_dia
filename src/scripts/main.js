'use strict';

/* const buttonChangeDef = document.getElementById('changer-def');

const buttonChangeBlue = document.getElementById('changer-blue');

const buttonChangeDefSmall = document.getElementById('changer-def-small');

const buttonChangeBlueSmall = document.getElementById('changer-blue-small'); */

const headerSmall = document.getElementById(
  'header-small');

const headerBig = document.getElementById(
  'header-big');

const hiddenMenu = document.getElementById(
  'hiddenmenu');

const footerBack = document.getElementById(
  'footer');

const inputs = document.querySelectorAll(
  '.form__field');

const buttons = document.querySelectorAll(
  '.button');

const icons = document.querySelectorAll(
  '.icon');

const socialHover = document.querySelectorAll(
  '.contacts__social__img');

const creativeBlockNumBlue = document.getElementById(
  'backNumBlue');

const creativeBlockNumBlueSmall = document.getElementById(
  'backNumBlueSmall');

const creativeBlockCountBlue = document.getElementById(
  'countBlue');

const creativeBlockCountBlueSmall = document.getElementById(
  'countBlueSmall');

const creativeBlockRoundBlue = document.getElementById(
  'roundBlue');

const creativeBlockRoundBlueSmall = document.getElementById(
  'roundBlueSmall');

const creativeBlockNumYellow = document.getElementById(
  'backNumYellow');

const creativeBlockNumYellowSmall = document.getElementById(
  'backNumYellowSmall');

const creativeBlockCountYellow = document.getElementById(
  'countYellow');

const creativeBlockCountYellowSmall = document.getElementById(
  'countYellowSmall');

const creativeBlockRoundYellow = document.getElementById(
  'roundYellow');

const creativeBlockRoundYellowSmall = document.getElementById(
  'roundYellowSmall');

const creativeBlockNumGreen = document.getElementById(
  'backNumGreen');

const creativeBlockNumGreenSmall = document.getElementById(
  'backNumGreenSmall');

const creativeBlockCountGreen = document.getElementById(
  'countGreen');

const creativeBlockCountGreenSmall = document.getElementById(
  'countGreenSmall');

const creativeBlockRoundGreen = document.getElementById(
  'roundGreen');

const creativeBlockRoundGreenSmall = document.getElementById(
  'roundGreenSmall');

const creativeBlockNumRed = document.getElementById(
  'backNumRed');

const creativeBlockNumRedSmall = document.getElementById(
  'backNumRedSmall');

const creativeBlockCountRed = document.getElementById(
  'countRed');

const creativeBlockCountRedSmall = document.getElementById(
  'countRedSmall');

const creativeBlockRoundRed = document.getElementById(
  'roundRed');

const creativeBlockRoundRedSmall = document.getElementById(
  'roundRedSmall');

const testimonialsBlue = document.getElementById(
  'testimonialsBlue');

const testimonialsMarksBlue = document.getElementById(
  'MarksBlue');

/* const testimonialsMarksBlueSmall = document.getElementById(
  'MarksBlueSmall'); */

const testimonialsYellow = document.getElementById(
  'testimonialsYellow');

const testimonialsMarksYellow = document.getElementById(
  'MarksYellow');

const testimonialsRed = document.getElementById(
  'testimonialsRed');

const testimonialsMarksRed = document.getElementById(
  'MarksRed');

const visionBack = document.getElementById(
  'visionBack');

const sliders = document.querySelectorAll(
  '.slider');

document.querySelector(
  '.themes-changer--def-small'
).addEventListener('click', function() {
  hiddenMenu.classList.remove('hiddenmenu--blueskin');

  footerBack.classList.remove('footer__background--blueskin');

  inputs.forEach((element) => {
    element.classList.remove('form__field--blueskin');
  });

  socialHover.forEach((element) => {
    element.classList.remove('contacts__social__img--blueskin');
  });

  headerSmall.classList.remove('header-blue');

  icons.forEach((element) => {
    element.classList.remove('icon--linkred');
  });

  buttons.forEach((element) => {
    element.classList.remove('button__red');
  });

  testimonialsBlue.classList.remove(
    'testimonials__block__container--blue');

  testimonialsMarksBlue.classList.remove(
    'testimonials__block__marks--blue');

  testimonialsYellow.classList.remove(
    'testimonials__block__container--yellow');

  testimonialsMarksYellow.classList.remove(
    'testimonials__block__marks--yellow');

  testimonialsRed.classList.remove(
    'testimonials__block__container--red');

  testimonialsMarksRed.classList.remove(
    'testimonials__block__marks--red');

  creativeBlockNumBlueSmall.classList.remove(
    'creative__block__num--blue');

  creativeBlockCountBlueSmall.classList.remove(
    'creative__block__count--blue');

  creativeBlockRoundBlueSmall.classList.remove(
    'creative__block__round--blue');

  creativeBlockNumYellowSmall.classList.remove(
    'creative__block__num--yellow');

  creativeBlockCountYellowSmall.classList.remove(
    'creative__block__count--yellow');

  creativeBlockRoundYellowSmall.classList.remove(
    'creative__block__round--yellow');

  creativeBlockNumGreenSmall.classList.remove(
    'creative__block__num--green');

  creativeBlockCountGreenSmall.classList.remove(
    'creative__block__count--green');

  creativeBlockRoundGreenSmall.classList.remove(
    'creative__block__round--green');

  creativeBlockNumRedSmall.classList.remove(
    'creative__block__num--red');

  creativeBlockCountRedSmall.classList.remove(
    'creative__block__count--red');

  creativeBlockRoundRedSmall.classList.remove(
    'creative__block__round--red');
});

document.querySelector(
  '.themes-changer--blue-small'
).addEventListener('click', function() {
  hiddenMenu.classList.add('hiddenmenu--blueskin');

  footerBack.classList.add('footer__background--blueskin');

  inputs.forEach((element) => {
    element.classList.add('form__field--blueskin');
  });

  socialHover.forEach((element) => {
    element.classList.add('contacts__social__img--blueskin');
  });

  headerSmall.classList.add('header-blue');

  icons.forEach((element) => {
    element.classList.add('icon--linkred');
  });

  buttons.forEach((element) => {
    element.classList.add('button__red');
  });

  testimonialsBlue.classList.add('testimonials__block__container--blue');

  testimonialsMarksBlue.classList.add('testimonials__block__marks--blue');

  testimonialsYellow.classList.add('testimonials__block__container--yellow');

  testimonialsMarksYellow.classList.add('testimonials__block__marks--yellow');

  testimonialsRed.classList.add('testimonials__block__container--red');

  testimonialsMarksRed.classList.add('testimonials__block__marks--red');

  visionBack.classList.add('vision__background--blueskin');

  creativeBlockNumBlueSmall.classList.add('creative__block__num--blue');

  creativeBlockCountBlueSmall.classList.add('creative__block__count--blue');

  creativeBlockRoundBlueSmall.classList.add('creative__block__round--blue');

  creativeBlockNumYellowSmall.classList.add('creative__block__num--yellow');

  creativeBlockCountYellowSmall.classList.add('creative__block__count--yellow');

  creativeBlockRoundYellowSmall.classList.add('creative__block__round--yellow');

  creativeBlockNumGreenSmall.classList.add('creative__block__num--green');

  creativeBlockCountGreenSmall.classList.add('creative__block__count--green');

  creativeBlockRoundGreenSmall.classList.add('creative__block__round--green');

  creativeBlockNumRedSmall.classList.add('creative__block__num--red');

  creativeBlockCountRedSmall.classList.add('creative__block__count--red');

  creativeBlockRoundRedSmall.classList.add('creative__block__round--red');
});

document.querySelector(
  '.themes-changer--def'
).addEventListener('click', function() {
  headerBig.classList.remove('header-blue');

  footerBack.classList.remove('footer__background--blueskin');

  inputs.forEach((element) => {
    element.classList.remove('form__field--blueskin');
  });

  buttons.forEach((element) => {
    element.classList.remove('button__red');
  });

  icons.forEach((element) => {
    element.classList.remove('icon--linkred');
  });

  socialHover.forEach((element) => {
    element.classList.remove('contacts__social__img--blueskin');
  });

  sliders.forEach((element) => {
    element.classList.remove('slider--blue');
  });

  creativeBlockNumBlue.classList.remove(
    'creative__block__num--blue');

  creativeBlockCountBlue.classList.remove(
    'creative__block__count--blue');

  creativeBlockRoundBlue.classList.remove(
    'creative__block__round--blue');

  creativeBlockNumYellow.classList.remove(
    'creative__block__num--yellow');

  creativeBlockCountYellow.classList.remove(
    'creative__block__count--yellow');

  creativeBlockRoundYellow.classList.remove(
    'creative__block__round--yellow');

  creativeBlockNumGreen.classList.remove(
    'creative__block__num--green');

  creativeBlockCountGreen.classList.remove(
    'creative__block__count--green');

  creativeBlockRoundGreen.classList.remove(
    'creative__block__round--green');

  creativeBlockNumRed.classList.remove(
    'creative__block__num--red');

  creativeBlockCountRed.classList.remove(
    'creative__block__count--red');

  creativeBlockRoundRed.classList.remove(
    'creative__block__round--red');

  testimonialsBlue.classList.remove(
    'testimonials__block__container--blue');

  testimonialsMarksBlue.classList.remove(
    'testimonials__block__marks--blue');

  testimonialsYellow.classList.remove(
    'testimonials__block__container--yellow');

  testimonialsMarksYellow.classList.remove(
    'testimonials__block__marks--yellow');

  testimonialsRed.classList.remove(
    'testimonials__block__container--red');

  testimonialsMarksRed.classList.remove(
    'testimonials__block__marks--red');

  visionBack.classList.remove(
    'vision__background--blueskin');

  visionBack.classList.remove(
    'vision__background--blueskin');
});

document.querySelector(
  '.themes-changer--blue'
).addEventListener('click', function() {
  headerBig.classList.add('header-blue');

  footerBack.classList.add(
    'footer__background--blueskin');

  inputs.forEach((element) => {
    element.classList.add('form__field--blueskin');
  });

  buttons.forEach((element) => {
    element.classList.add('button__red');
  });

  icons.forEach((element) => {
    element.classList.add('icon--linkred');
  });

  icons.forEach((element) => {
    element.classList.add('icon--linkred');
  });

  socialHover.forEach((element) => {
    element.classList.add(
      'contacts__social__img--blueskin');
  });

  sliders.forEach((element) => {
    element.classList.add('slider--blue');
  });

  creativeBlockNumBlue.classList.add(
    'creative__block__num--blue');

  creativeBlockCountBlue.classList.add(
    'creative__block__count--blue');

  creativeBlockRoundBlue.classList.add(
    'creative__block__round--blue');

  creativeBlockNumYellow.classList.add(
    'creative__block__num--yellow');

  creativeBlockCountYellow.classList.add(
    'creative__block__count--yellow');

  creativeBlockRoundYellow.classList.add(
    'creative__block__round--yellow');

  creativeBlockNumGreen.classList.add(
    'creative__block__num--green');

  creativeBlockCountGreen.classList.add(
    'creative__block__count--green');

  creativeBlockRoundGreen.classList.add(
    'creative__block__round--green');

  creativeBlockNumRed.classList.add(
    'creative__block__num--red');

  creativeBlockCountRed.classList.add(
    'creative__block__count--red');

  creativeBlockRoundRed.classList.add(
    'creative__block__round--red');

  testimonialsBlue.classList.add(
    'testimonials__block__container--blue');

  testimonialsMarksBlue.classList.add(
    'testimonials__block__marks--blue');

  testimonialsYellow.classList.add(
    'testimonials__block__container--yellow');

  testimonialsMarksYellow.classList.add(
    'testimonials__block__marks--yellow');

  testimonialsRed.classList.add(
    'testimonials__block__container--red');

  testimonialsMarksRed.classList.add(
    'testimonials__block__marks--red');

  visionBack.classList.add(
    'vision__background--blueskin');
});

/* const images = document.querySelectorAll('.slider .slider__seconditems img');

const sliderLine = document.querySelectorAll('.slider .slider__seconditems');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  console.log(sliderLine);
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
}

init();
window.addEventListener('resize', init);

document.querySelector(
  '.slider__shift--right').addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector(
  '.slider__shift--left').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
} */

const images = document.querySelectorAll('.slider .sliderB-line img');
const sliderLine = document.querySelector('.slider .sliderB-line');
const slider = document.querySelector('.slider');

let count = 0;
let width;
const body = document.querySelector('body');

function init() {
  width = slider.offsetWidth;
  /* console.log(width); */

  /* console.log('resize'); */
  const bodyWidth = body.offsetWidth;

  /* console.log(bodyWidth); */

  if (bodyWidth === 1024) {
    width = 502;
    slider.style.width = '502px';
    /* console.log(slider); */
    /* console.log(width); */
  }
  /* const sliderWidth = slider.offsetWidth; */
  /* console.log(sliderWidth); */

  sliderLine.style.width = width * images.length + 'px';

  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });

  rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function() {
  count++;

  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function() {
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

const myform = document.querySelector('#myform');

myform.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  myform.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#hiddenmenu') {
    document.body.classList.add('page__body--with-hiddenmenu');
  } else {
    document.body.classList.remove('page__body--with-hiddenmenu');
  }
});

/* let offset = 0;
const sliderLine = document.querySelector('.slider__items');

document.querySelector(
  '.slider__button--right'
).addEventListener('click', function() {
  offset = offset + 320;

  if (offset > 640) {
    offset = 0;
  }

  sliderLine.style.left = -offset + 'px';
});

document.querySelector(
  '.slider__button--left'
).addEventListener('click', function() {
  offset = offset - 320;

  if (offset < 0) {
    offset = 640;
  }

  sliderLine.style.left = -offset + 'px';
}); */

/* document.querySelector(
  '.slider__button--left'
).addEventListener('click', function() {

  if (clientWidth == 320) {
    offset = offset - 320;
  }else {
    myFunction()
    alert(`${myFunction()}`);
  }

  if (offset < 0) {
    offset = 640;
  }

  sliderLine.style.left = -offset + 'px';
}); */

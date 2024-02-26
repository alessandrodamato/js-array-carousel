const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp'
]

let counter = 0;

const slider = document.querySelector('.slider');

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  slider.innerHTML += `<img src="${img}" class="img hide">` 
}

const imgCollection = document.getElementsByClassName('img');
imgCollection[counter].classList.remove('hide');

// bottone UP
const topButton = document.querySelector('.btn-top');

topButton.addEventListener('click', function(){
  if (counter === 0) {
    imgCollection[counter].classList.add('hide');
    counter = images.length - 1;
    imgCollection[counter].classList.remove('hide');
  } else {
    imgCollection[counter].classList.add('hide');
    counter--;
    imgCollection[counter].classList.remove('hide');
  }
})

// bottone DOWN
const bottomButton = document.querySelector('.btn-bottom');

bottomButton.addEventListener('click', function(){
  if (counter === (images.length - 1)) {
    imgCollection[counter].classList.add('hide');
    counter = 0;
    imgCollection[counter].classList.remove('hide');
  } else {
    imgCollection[counter].classList.add('hide');
    counter++;
    imgCollection[counter].classList.remove('hide');
  }
})
const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp'
]

let counter = 0;

const slider = document.querySelector('.slider');
const imgCollection = document.getElementsByClassName('img');

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  slider.innerHTML += `<img src="${img}" class="img hide">` 
}

imgCollection[counter].classList.remove('hide');
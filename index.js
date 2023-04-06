const mainCard = document.querySelector('.intro-text');
const secondCard = document.querySelector('.submitted');
const form = document.getElementById('form');

const submitForm = (event) => {
  event.preventDefault();
  console.log('submitted');
  secondCard.classList.remove('hidden');
  mainCard.classList.add('hidden');
};

form.addEventListener('submit', submitForm);

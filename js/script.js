const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-message').textContent = 'Mensagem enviada! Obrigado por entrar em contato.';
  form.reset();
});
const quizResult = document.querySelector('#quiz-result');
const profiles = {
  explorador: 'Você é Explorador: experimente um RPG ou mundo aberto, como Red Dead Redemption 2.',
  competitivo: 'Você é Competitivo: um bom treino em jogos de estratégia ou FPS pode ser sua próxima fase.',
  casual: 'Você é Casual: escolha uma aventura cooperativa e jogue no seu ritmo, sem pressa.'
};
document.querySelectorAll('[data-profile]').forEach((button) => {
  button.addEventListener('click', () => { quizResult.textContent = profiles[button.dataset.profile]; });
});

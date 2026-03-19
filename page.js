const hambtn = document.getElementById('hambtn');
const mobmenu = document.getElementById('mobmenu');
const moboverlay = document.getElementById('moboverlay');
const menuclose = document.getElementById('menuclose');
const moblinks = document.querySelector('.mob-links');

function openMenu(event) {
    event.preventDefault();
    mobmenu.classList.add('active');
    moboverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobmenu.classList.remove('active');
    moboverlay.classList.remove('active');
    document.body.style.overflow = '';
}

hambtn.addEventListener('click', openMenu);
menuclose.addEventListener('click', closeMenu);
moboverlay.addEventListener('click', closeMenu);
moblinks.addEventListener('click', closeMenu);

function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) {
    item.classList.add('open');
  }
}

document.querySelectorAll('.que-icon').forEach(function(question) {
  question.addEventListener('click', function() {
    var answer = this.parentElement.nextElementSibling;
    if (answer && answer.classList.contains('que-answer')) {
      answer.classList.toggle('que-answer-open');
      this.classList.toggle('active');
    }
  });
});
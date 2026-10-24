'use strict';
const menuButton = document.querySelector('#menuButton');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Abrir menú'); }
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
document.querySelector('#contactForm').addEventListener('submit', e => {
 e.preventDefault();
 const form = e.currentTarget;
 if (!form.reportValidity()) return;
 const data = new FormData(form);
 const message = `Hola Leonardo, soy ${data.get('name').trim()}. Quisiera pedir un presupuesto sin cargo.\nZona: ${data.get('zone').trim()}.\nConsulta: ${data.get('message').trim()}`;
 window.open(`https://wa.me/5493425089416?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
 const img = document.querySelector('#largeImage'); img.src = button.dataset.image; img.alt = button.dataset.caption;
 document.querySelector('#imageCaption').textContent = button.dataset.caption;
 lightbox.showModal();
}));
document.querySelector('#closeLightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', e => { if(e.target === lightbox) { const r = lightbox.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) lightbox.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();

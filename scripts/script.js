// Basic interactive behavior: year, menu toggle, cart demo, contact form
document.getElementById('year').textContent = new Date().getFullYear();

// Menu toggle for mobile
const menuBtn = document.querySelector('.menu-toggle');
menuBtn && menuBtn.addEventListener('click', ()=>{
  const nav = document.querySelector('.main-nav');
  if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
});

// Simple cart behavior (frontend only)
const cart = [];
document.querySelectorAll('.add-cart').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.dataset.id;
    cart.push(id);
    btn.textContent = 'Added ✓';
    setTimeout(()=> btn.textContent = 'Add to cart', 1200);
    console.log('Cart:', cart);
  });
});

// Contact form (frontend demo)
const contactForm = document.getElementById('contactForm');
contactForm && contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thanks! Message sent (demo).');
  contactForm.reset();
});

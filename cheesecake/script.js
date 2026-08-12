// Unhinged Cheesecake — shared interactions (no backend, UI-only)

function showToast(){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'), 2600);
}

// waitlist form (home page)
const waitlistForm = document.getElementById('waitlist-form');
if(waitlistForm){
  waitlistForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    showToast();
    waitlistForm.reset();
  });
}

// contact form
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    showToast();
    contactForm.reset();
  });
}

// add-to-box buttons on products page
function addNote(btn){
  showToast();
}

// product filter chips
const chips = document.querySelectorAll('.filter-chip');
if(chips.length){
  chips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      document.querySelectorAll('.product-card').forEach(card=>{
        const tags = card.dataset.tags || '';
        card.style.display = (filter==='all' || tags.includes(filter)) ? '' : 'none';
      });
    });
  });
}

// mobile burger -> toggle nav-links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
if(burger && navLinks){
  burger.addEventListener('click', ()=>{
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#faf3e7';
    navLinks.style.padding = '20px 32px';
    navLinks.style.borderBottom = '2px solid #2b2016';
    navLinks.style.gap = '16px';
  });
}

/**
 * Viswa Vidhya Educational Consultancy - Main Application Logic
 * Author: Antigravity
 */

// Brand & Contact Constants
const BRAND_DATA = {
  company: 'Viswa Vidhya Educational Consultancy',
  shortName: 'Viswa Vidhya',
  contactPerson: 'Arunlal M S',
  role: 'Managing Director & Lead Career Counsellor',
  phone: '+91 9487808313',
  phoneClean: '919487808313',
  email: 'viswavidhyaconsultancy@gmail.com',
  whatsappBase: 'https://wa.me/919487808313'
};

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initTicker();
  initFAQAccordion();
  initGuidanceModal();
  initContactForms();
});

/* ==========================================================================
   0. Theme Switcher (Vertical Light/Dark Toggle)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('.theme-toggle-vertical');
  const logos = document.querySelectorAll('.brand-logo-img, .footer-logo-img');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleBtns.forEach(btn => {
        btn.classList.add('active-dark');
        btn.setAttribute('aria-label', 'Switch to light theme');
      });
      logos.forEach(img => {
        img.src = 'images/logo.png';
      });
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleBtns.forEach(btn => {
        btn.classList.remove('active-dark');
        btn.setAttribute('aria-label', 'Switch to dark theme');
      });
      logos.forEach(img => {
        img.src = 'images/logo-light.png';
      });
    }
    localStorage.setItem('vv_theme', theme);
  }

  // Load initial theme from localStorage (default: light)
  const savedTheme = localStorage.getItem('vv_theme') || 'light';
  applyTheme(savedTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });
}

/* ==========================================================================
   1. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      if (isOpen) {
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        if (mobileMenuIcon) {
          mobileMenuIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>`;
        }
      } else {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (mobileMenuIcon) {
          mobileMenuIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>`;
        }
      }
    });

    // Close on navigation link click
    mobileNavDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        if (mobileMenuIcon) {
          mobileMenuIcon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>`;
        }
      });
    });
  }

  // Active link detection based on URL
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. Live Destination Hero Ticker
   ========================================================================== */
function initTicker() {
  const tickerEl = document.getElementById('destTickerText');
  if (!tickerEl) return;

  const tickers = ['🇩🇪 Germany', '🇭🇺 Hungary', '🇲🇺 Mauritius'];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % tickers.length;
    tickerEl.style.opacity = '0';
    setTimeout(() => {
      tickerEl.textContent = tickers[index];
      tickerEl.style.opacity = '1';
    }, 200);
  }, 2800);
}

/* ==========================================================================
   3. FAQ Accordion Interaction
   ========================================================================== */
function initFAQAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const currentItem = trigger.closest('.faq-item');
      const isAlreadyActive = currentItem.classList.contains('active');

      // Optional: close other open items in the same container
      const container = currentItem.closest('.faq-wrap');
      if (container) {
        container.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
      }

      if (!isAlreadyActive) {
        currentItem.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Multi-Step Career Guidance Modal
   ========================================================================== */
let modalState = {
  step: 1,
  destination: 'Mauritius',
  course: 'MBBS',
  name: '',
  phone: '',
  email: '',
  message: ''
};

function initGuidanceModal() {
  const modalBackdrop = document.getElementById('guidanceModal');
  if (!modalBackdrop) return;

  const closeBtn = document.getElementById('closeGuidanceModal');
  const step1 = document.getElementById('modalStep1');
  const step2 = document.getElementById('modalStep2');
  const step3 = document.getElementById('modalStep3');
  const stepSubmitted = document.getElementById('modalStepSubmitted');

  // Trigger buttons with data attribute or class
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-guidance]');
    if (trigger) {
      e.preventDefault();
      const presetDest = trigger.getAttribute('data-dest') || 'Mauritius';
      const presetCourse = trigger.getAttribute('data-course') || 'MBBS';
      openGuidanceModal(presetDest, presetCourse);
    }
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeGuidanceModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeGuidanceModal();
  });

  // Step 1: Destination selection
  document.querySelectorAll('.dest-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dest-select-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      modalState.destination = btn.getAttribute('data-val') || 'Mauritius';
    });
  });

  document.getElementById('toStep2Btn')?.addEventListener('click', () => {
    goToStep(2);
  });

  // Step 2: Course selection
  document.querySelectorAll('.course-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.course-select-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      modalState.course = btn.getAttribute('data-val') || 'MBBS';
    });
  });

  document.getElementById('backToStep1Btn')?.addEventListener('click', () => goToStep(1));
  document.getElementById('toStep3Btn')?.addEventListener('click', () => goToStep(3));
  document.getElementById('backToStep2Btn')?.addEventListener('click', () => goToStep(2));
  document.getElementById('changeFromStep3')?.addEventListener('click', () => goToStep(1));

  // Step 3: Form submission
  const modalForm = document.getElementById('modalForm');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('modalInputName');
      const phoneInput = document.getElementById('modalInputPhone');
      const emailInput = document.getElementById('modalInputEmail');
      const msgInput = document.getElementById('modalInputMessage');

      modalState.name = nameInput?.value.trim() || '';
      modalState.phone = phoneInput?.value.trim() || '';
      modalState.email = emailInput?.value.trim() || '';
      modalState.message = msgInput?.value.trim() || '';

      if (!modalState.name || !modalState.phone) return;

      // Celebrate with confetti
      fireConfetti();

      // Show submitted view
      document.getElementById('submittedStudentName').textContent = modalState.name;
      document.getElementById('submittedTargetDest').textContent = modalState.destination;
      document.getElementById('submittedTargetCourse').textContent = modalState.course;
      document.getElementById('submittedStudentPhone').textContent = modalState.phone;

      goToStep('submitted');
    });
  }

  // Submitted actions
  document.getElementById('modalWhatsappBtn')?.addEventListener('click', () => {
    const text = encodeURIComponent(
      `Hello Mr. Arunlal M S (Viswa Vidhya Consultancy),\n` +
      `My name is ${modalState.name}.\n` +
      `I am interested in studying: ${modalState.course} in ${modalState.destination}.\n` +
      `Phone: ${modalState.phone}\n` +
      (modalState.email ? `Email: ${modalState.email}\n` : '') +
      (modalState.message ? `Query: ${modalState.message}` : '')
    );
    window.open(`${BRAND_DATA.whatsappBase}?text=${text}`, '_blank');
  });

  document.getElementById('modalDoneBtn')?.addEventListener('click', closeGuidanceModal);
}

function openGuidanceModal(dest = 'Mauritius', course = 'MBBS') {
  const modalBackdrop = document.getElementById('guidanceModal');
  if (!modalBackdrop) return;

  modalState.destination = dest;
  modalState.course = course;

  // Highlight selected buttons in DOM
  document.querySelectorAll('.dest-select-btn').forEach(btn => {
    if (btn.getAttribute('data-val')?.toLowerCase() === dest.toLowerCase()) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  document.querySelectorAll('.course-select-btn').forEach(btn => {
    if (btn.getAttribute('data-val')?.toLowerCase() === course.toLowerCase()) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  goToStep(1);
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeGuidanceModal() {
  const modalBackdrop = document.getElementById('guidanceModal');
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep(stepNumber) {
  modalState.step = stepNumber;

  const dots = document.querySelectorAll('.step-dot');
  dots.forEach((dot, idx) => {
    if (typeof stepNumber === 'number' && idx < stepNumber) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  const step1 = document.getElementById('modalStep1');
  const step2 = document.getElementById('modalStep2');
  const step3 = document.getElementById('modalStep3');
  const stepSubmitted = document.getElementById('modalStepSubmitted');

  step1?.classList.remove('active');
  step2?.classList.remove('active');
  step3?.classList.remove('active');
  stepSubmitted?.classList.remove('active');

  if (stepNumber === 1) step1?.classList.add('active');
  else if (stepNumber === 2) step2?.classList.add('active');
  else if (stepNumber === 3) {
    document.getElementById('summaryDestBadge').textContent = modalState.destination;
    document.getElementById('summaryCourseBadge').textContent = modalState.course;
    step3?.classList.add('active');
  } else if (stepNumber === 'submitted') {
    stepSubmitted?.classList.add('active');
  }
}

/* ==========================================================================
   5. General Contact Forms Handler (e.g. contact.html)
   ========================================================================== */
function initContactForms() {
  const contactForm = document.getElementById('mainContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim() || '';
    const phone = document.getElementById('contactPhone')?.value.trim() || '';
    const email = document.getElementById('contactEmail')?.value.trim() || '';
    const dest = document.getElementById('contactDestination')?.value || 'Mauritius';
    const course = document.getElementById('contactCourse')?.value || 'MBBS Abroad';
    const message = document.getElementById('contactMessage')?.value.trim() || '';

    if (!name || !phone) return;

    fireConfetti();

    const formCard = contactForm.closest('.glass-panel') || contactForm.parentElement;
    formCard.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem;">
        <div style="width: 64px; height: 64px; border-radius: 9999px; background: #d1fae5; border: 1px solid #a7f3d0; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; color: #059669;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
        </div>
        <h3 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem; color: #0f172a;">Thank You, ${escapeHtml(name)}!</h3>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; max-width: 440px; margin: 0 auto 1.5rem auto;">
          Your study guidance request for <strong style="color: #0f766e;">${escapeHtml(course)}</strong> in <strong style="color: #b45309;">${escapeHtml(dest)}</strong> has been registered. <strong>Mr. Arunlal M S</strong> will connect with you at <strong>${escapeHtml(phone)}</strong>.
        </p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center;">
          <a href="https://wa.me/919487808313?text=${encodeURIComponent(`Hello Mr. Arunlal M S,\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${dest}\nCourse: ${course}\nMessage: ${message}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Chat on WhatsApp Now</span>
          </a>
        </div>
      </div>
    `;
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ==========================================================================
   6. Lightweight Celebration Confetti (Zero External CDN Dependency)
   ========================================================================== */
function fireConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];
  const colors = ['#fbbf24', '#38bdf8', '#34d399', '#f59e0b', '#ec4899', '#a855f7'];

  for (let i = 0; i < 90; i++) {
    pieces.push({
      x: canvas.width / 2,
      y: canvas.height * 0.55,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 1.2) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  let startTime = performance.now();
  function animate(now) {
    const elapsed = now - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rSpeed;
      if (elapsed > 1200) {
        p.opacity -= 0.025;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    if (elapsed < 2400) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(animate);
}

/**
 * my_landing_page.js
 * Interactive Script for Amer Abdo's Landing Page
 * Author: Amer Developer
 * Features: Smooth animations, toast notifications, scroll effects
 */

// =======================
// 1. DOMContentLoaded
// =======================
document.addEventListener('DOMContentLoaded', () => {
  // تفعيل التأثيرات عند التمرير
  setupScrollAnimations();

  // تفعيل التمرير السلس
  setupSmoothScrolling();

  // تحديث السنة في الكوبيحق
  updateYear();

  // تفعيل الإشعارات (في حال أردت استخدامها لاحقًا)
  setupToast();
});

// =======================
// 2. تأثيرات الظهور عند التمرير
// =======================
function setupScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
  });
}

// =======================
// 3. تمرير سلس للأنكورز
// =======================
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// =======================
// 4. تحديث السنة تلقائيًا
// =======================
function updateYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// =======================
// 5. نظام الإشعارات (Toast)
// =======================
function setupToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;

  window.showToast = (message, duration = 3000) => {
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  };
}

// =======================
// 6. (اختياري) تأثير على الأزرار عند النقر
// =======================
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (btn) {
    // تأثير مؤقت
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  }
});

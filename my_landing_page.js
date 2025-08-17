/**
 * my_landing_page.js
 * Interactive Script for Amer Abdo's Landing Page
 * Features: Smooth animations, toast notifications, scroll effects, language switcher
 */

// =======================
// 1. Translation System
// =======================
const translations = {
  ar: {
    'Hello, I\'m': 'مرحبًا، أنا',
    'Full-Stack Developer & AI-Powered Solution Builder': 'مطوّر متكامل وبناء حلول مدعومة بالذكاء الاصطناعي',
    'I build digital solutions that help you appear professionally and effectively in the digital market.': 'أبني حلولًا رقمية تساعدك على الظهور بشكل احترافي وفعّال في السوق الرقمي.',
    'Get in Touch': 'اتصل بي',
    'WhatsApp Me': 'تواصل عبر واتساب',
    'Visit My Portfolio': 'زيارة موقعي',
    'About Me': 'من أنا',
    'Landing Pages': 'صفحات الهبوط',
    'Websites': 'مواقع الويب',
    'Python Scripts': 'سكربتات بايثون',
    'Support & Maintenance': 'الدعم والصيانة',
    'Professional landing pages to increase conversions and engagement.': 'تصميم صفحات هبوط احترافية لزيادة التحويلات والتفاعل.',
    'Modern, fast, and user-friendly websites for your business or brand.': 'مواقع ويب حديثة وسريعة وسهلة الاستخدام لأعمالك أو علامتك التجارية.',
    'Automation and data analysis scripts to save time and boost productivity.': 'سكربتات أتمتة وتحليل بيانات لتوفير الوقت وزيادة الإنتاجية.',
    'Technical support and regular maintenance for stability and security.': 'دعم فني وصيانة دورية لضمان الاستقرار والأمان.',
    'Let\'s Work Together': 'لنعمل معًا',
    'I\'m available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.': 'أنا متاح للتعاون والمشاريع الجديدة. لا تتردد في التواصل لأي استفسار أو عرض عمل.',
    'Send Email': 'إرسال بريد',
    'Scan to chat on WhatsApp:': 'امسح لبدء المحادثة على واتساب:'
  },
  en: {
    'Hello, I\'m': 'Hello, I\'m',
    'Full-Stack Developer & AI-Powered Solution Builder': 'Full-Stack Developer & AI-Powered Solution Builder',
    'I build digital solutions that help you appear professionally and effectively in the digital market.': 'I build digital solutions that help you appear professionally and effectively in the digital market.',
    'Get in Touch': 'Get in Touch',
    'WhatsApp Me': 'WhatsApp Me',
    'Visit My Portfolio': 'Visit My Portfolio',
    'About Me': 'About Me',
    'Landing Pages': 'Landing Pages',
    'Websites': 'Websites',
    'Python Scripts': 'Python Scripts',
    'Support & Maintenance': 'Support & Maintenance',
    'Professional landing pages to increase conversions and engagement.': 'Professional landing pages to increase conversions and engagement.',
    'Modern, fast, and user-friendly websites for your business or brand.': 'Modern, fast, and user-friendly websites for your business or brand.',
    'Automation and data analysis scripts to save time and boost productivity.': 'Automation and data analysis scripts to save time and boost productivity.',
    'Technical support and regular maintenance for stability and security.': 'Technical support and regular maintenance for stability and security.',
    'Let\'s Work Together': 'Let\'s Work Together',
    'I\'m available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.': 'I\'m available for collaboration and new projects. Feel free to reach out for any inquiries or job offers.',
    'Send Email': 'Send Email',
    'Scan to chat on WhatsApp:': 'Scan to chat on WhatsApp:'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.getElementById('lang-toggle').textContent = 'العربية';
  } else {
    document.documentElement.removeAttribute('dir');
    document.getElementById('lang-toggle').textContent = 'English';
  }

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update About Text
  const aboutText = document.getElementById('about-text');
  if (aboutText) {
    aboutText.textContent = lang === 'ar'
      ? 'أنا عامر، مطوّر ويب من مصر، أعمل على تصميم وتطوير مواقع إلكترونية عصرية ومتجاوبة تواكب احتياجات الأفراد والأعمال، مع التركيز على الجمع بين المظهر الجذاب وسهولة الاستخدام، وتقديم حلول رقمية عملية تُبرز هوية المشروع وتساعده على الوصول إلى جمهوره بكفاءة واحترافية.'
      : 'Hello, I\'m Amer from Egypt 🇪🇬, a web developer and programmer passionate about turning ideas into practical and effective digital solutions. I started my journey in programming through self-learning, and with every project I complete, I gain deeper experience and broader vision.';
  }
}

// =======================
// 2. DOMContentLoaded
// =======================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  });

  // تفعيل التأثيرات عند التمرير
  setupScrollAnimations();

  // تفعيل التمرير السلس
  setupSmoothScrolling();

  // تحديث السنة
  updateYear();

  // تفعيل الإشعارات
  setupToast();
});

// =======================
// 3. تأثيرات الظهور عند التمرير
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
// 4. تمرير سلس
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
// 5. تحديث السنة
// =======================
function updateYear() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// =======================
// 6. نظام الإشعارات
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

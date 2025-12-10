// ===========================================
// Main Application - محسّن للسرعة
// ===========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initThemeSwitcher();
    initLanguageSwitcher();
    initCurrentYear();
    initScrollEffects();
    initHoverEffects();
    initProjectModal();
    initContactForm();
    initPageNavigation();
});

// ===========================================
// Navigation - محسّن
// ===========================================

function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // منع السلوك الافتراضي للروابط الداخلية
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                
                // إغلاق القائمة المتنقلة إذا كانت مفتوحة
                if (navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // الانتقال السريع للقسم
                const targetId = href.substring(1);
                navigateToSection(targetId);
                
                // تحديث الرابط النشط
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===========================================
// Page Navigation - تنقل سريع بين الأقسام
// ===========================================

function initPageNavigation() {
    // جعل جميع الأقسام مرئية فوراً
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
        section.style.transform = 'translateY(0)';
    });
    
    // استماع لأحداث التمرير للتنقل السريع
    let isScrolling = false;
    
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            isScrolling = true;
            
            setTimeout(function() {
                // تحديث الروابط النشطة
                updateActiveNavLink();
                isScrolling = false;
            }, 100);
        }
    }, { passive: true });
}

// تحديث الروابط النشطة
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollPos = window.scrollY + 100;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}` || (href === '#hero' && currentSection === '')) {
            link.classList.add('active');
        }
    });
}

// التنقل السريع للقسم
function navigateToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    // حساب الموضع مع تعديل للهيدر
    const headerHeight = document.getElementById('header').offsetHeight;
    const targetPosition = targetSection.offsetTop - headerHeight;
    
    // التمرير السريع
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// ===========================================
// Theme Switcher
// ===========================================

function initThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
    
    // Get saved theme or default to dark
    const savedTheme = localStorage.getItem('aseel-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('aseel-theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation
        this.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 200);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
}

// ===========================================
// Language Switcher
// ===========================================

function initLanguageSwitcher() {
    const langToggle = document.getElementById('languageToggle');
    const langTexts = document.querySelectorAll('.language-toggle__text');
    
    // Get saved language or default to english
    const savedLang = localStorage.getItem('aseel-lang') || 'en';
    setLanguage(savedLang);
    updateLangToggle(savedLang);
    
    // Toggle language
    langToggle.addEventListener('click', function() {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        setLanguage(newLang);
        updateLangToggle(newLang);
        localStorage.setItem('aseel-lang', newLang);
        
        // Add animation
        this.style.transform = 'rotate(180deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 200);
    });
    
    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        updateTexts(lang);
        
        // Update Font for Arabic
        if (lang === 'ar') {
            document.documentElement.style.setProperty('--font-body', "'Noto Sans Arabic', sans-serif");
        } else {
            document.documentElement.style.setProperty('--font-body', "'Inter', sans-serif");
        }
    }
    
    function updateLangToggle(lang) {
        langTexts.forEach(text => {
            text.classList.toggle('hidden');
        });
    }
}

// ===========================================
// Translations
// ===========================================

const translations = {
    en: {
        // Navigation
        'nav.designer': 'Digital Designer',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.work': 'Work',
        'nav.services': 'Services',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        
        // Language toggle
        'lang.en': 'EN',
        'lang.ar': 'AR',
        
        // Hero
        'hero.subtitle': 'Digital Artistry',
        'hero.title': 'Graphic & Digital Designer',
        'hero.description': 'Crafting visual identities that blend minimalism, modern aesthetics, and emotional storytelling.',
        'hero.viewPortfolio': 'View Portfolio',
        'hero.startProject': 'Start a Project',
        'hero.explore': 'Explore',
        
        // About
        'about.title': 'Creative Philosophy',
        'about.subtitle': 'Where art meets purpose in digital form',
        'about.imageText': 'Visual Storyteller',
        'about.heading': 'Design with Intention',
        'about.description1': 'I specialize in transforming abstract concepts into compelling visual experiences that resonate with audiences. My approach combines artistic sensibility with strategic thinking.',
        'about.description2': 'With over 5 years of experience in digital design, I\'ve collaborated with brands worldwide to build distinctive visual identities and memorable user experiences.',
        'about.designerTitle': 'Digital Designer',
        
        // Projects
        'projects.title': 'Featured Work',
        'projects.subtitle': 'Selected projects showcasing design excellence',
        'projects.project1.category': 'Brand Identity',
        'projects.project1.title': 'Luxury Fashion House',
        'projects.project1.description': 'Complete visual identity for a high-end fashion brand blending heritage with modernity',
        'projects.project2.category': 'Web Design',
        'projects.project2.title': 'Interactive Art Gallery',
        'projects.project2.description': 'Digital platform for art exhibition with immersive user experience',
        'projects.project3.category': 'Advertising',
        'projects.project3.title': 'Premium Beverage Campaign',
        'projects.project3.description': 'Comprehensive advertising campaign with professional photography',
        'projects.tags.logo': 'Logo Design',
        'projects.tags.identity': 'Visual Identity',
        'projects.tags.typography': 'Typography',
        'projects.tags.uiux': 'UI/UX Design',
        'projects.tags.interaction': 'Interaction',
        'projects.tags.digitalArt': 'Digital Art',
        'projects.tags.advertising': 'Advertising',
        'projects.tags.photography': 'Photography',
        'projects.tags.marketing': 'Marketing',
        'projects.viewCase': 'View Case Study',
        
        // Services
        'services.title': 'Design Services',
        'services.subtitle': 'Transforming visions into visual realities',
        'services.service1.title': 'Web Design',
        'services.service1.description': 'Contemporary website designs that marry aesthetics with functionality, focusing on user experience and performance.',
        'services.service2.title': 'Brand Identity',
        'services.service2.description': 'Complete visual identity systems that express brand values and create memorable impressions.',
        'services.service3.title': 'Digital Art',
        'services.service3.description': 'Engaging visual content for social media that enhances brand presence and follows modern trends.',
        
        // Gallery
        'gallery.title': 'Visual Gallery',
        'gallery.subtitle': 'A curated collection of artistic expressions',
        'gallery.item1': 'Abstract Design',
        'gallery.item2': 'Digital Print',
        'gallery.item3': 'Calligraphy Art',
        'gallery.item4': 'Digital Coloring',
        'gallery.item5': 'Geometric Design',
        'gallery.item6': 'Cinematic Art',
        
        // Contact
        'contact.title': 'Let\'s Connect',
        'contact.subtitle': 'Ready to bring your vision to life?',
        'contact.heading': 'Get in Touch',
        'contact.description': 'Have a project in mind? I\'d love to hear about it. Let\'s discuss how we can transform your vision into reality.',
        'contact.emailTitle': 'Email',
        'contact.phoneTitle': 'Phone',
        'contact.locationTitle': 'Location',
        'contact.location': 'Available Worldwide',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email Address',
        'contact.form.message': 'Project Details',
        'contact.form.submit': 'Send Message',
        'contact.socialTitle': 'Follow My Work',
        
        // Modal
        'modal.overview': 'Project Overview',
        'modal.services': 'Services Provided',
        'modal.startProject': 'Start a Similar Project',
        
        // Footer
        'footer.rights': 'All rights reserved'
    },
    ar: {
        // Navigation
        'nav.designer': 'مصمم رقمي',
        'nav.home': 'الرئيسية',
        'nav.about': 'عنّي',
        'nav.work': 'أعمالي',
        'nav.services': 'خدماتي',
        'nav.gallery': 'المعرض',
        'nav.contact': 'اتصل بي',
        
        // Language toggle
        'lang.en': 'EN',
        'lang.ar': 'AR',
        
        // Hero
        'hero.subtitle': 'فنون رقمية',
        'hero.title': 'مصمم جرافيك ورقمي',
        'hero.description': 'أصمم هويات بصرية تجمع بين البساطة والجمال المعاصر وسرد القصص العاطفية.',
        'hero.viewPortfolio': 'عرض الأعمال',
        'hero.startProject': 'ابدأ مشروع',
        'hero.explore': 'استكشف',
        
        // About
        'about.title': 'الفلسفة الإبداعية',
        'about.subtitle': 'حيث يلتقي الفن بالغرض في الشكل الرقمي',
        'about.imageText': 'راوي قصص بصري',
        'about.heading': 'تصميم بقصد',
        'about.description1': 'أتخصص في تحويل المفاهيم المجردة إلى تجارب بصرية مؤثرة تلقى صدى لدى الجمهور. يجمع أسلوبي بين الحس الفني والتفكير الاستراتيجي.',
        'about.description2': 'مع أكثر من 5 سنوات من الخبرة في التصميم الرقمي، تعاونت مع علامات تجارية عالمية لبناء هويات بصرية مميزة وتجارب مستخدم لا تنسى.',
        'about.designerTitle': 'مصمم رقمي',
        
        // Projects
        'projects.title': 'أعمال مميزة',
        'projects.subtitle': 'مشاريع مختارة تعرض التميز في التصميم',
        'projects.project1.category': 'الهوية البصرية',
        'projects.project1.title': 'دار أزياء فاخرة',
        'projects.project1.description': 'هوية بصرية كاملة لعلامة أزياء فاخرة تجمع بين التراث والحداثة',
        'projects.project2.category': 'تصميم الويب',
        'projects.project2.title': 'معرض فني تفاعلي',
        'projects.project2.description': 'منصة رقمية لمعرض فني مع تجربة مستخدم غامرة',
        'projects.project3.category': 'إعلانات',
        'projects.project3.title': 'حملة مشروبات متميزة',
        'projects.project3.description': 'حملة إعلانية شاملة مع تصوير احترافي',
        'projects.tags.logo': 'تصميم الشعار',
        'projects.tags.identity': 'الهوية البصرية',
        'projects.tags.typography': 'الخطوط',
        'projects.tags.uiux': 'تصميم واجهة المستخدم',
        'projects.tags.interaction': 'تفاعلية',
        'projects.tags.digitalArt': 'فن رقمي',
        'projects.tags.advertising': 'إعلان',
        'projects.tags.photography': 'تصوير',
        'projects.tags.marketing': 'تسويق',
        'projects.viewCase': 'عرض دراسة الحالة',
        
        // Services
        'services.title': 'خدمات التصميم',
        'services.subtitle': 'تحويل الرؤى إلى واقع بصري',
        'services.service1.title': 'تصميم الويب',
        'services.service1.description': 'تصاميم مواقع ويب معاصرة تجمع بين الجمالية والوظيفة، مع التركيز على تجربة المستخدم والأداء.',
        'services.service2.title': 'الهوية البصرية',
        'services.service2.description': 'أنظمة هوية بصرية كاملة تعبر عن قيم العلامة التجارية وتخلق انطباعات لا تنسى.',
        'services.service3.title': 'الفن الرقمي',
        'services.service3.description': 'محتوى بصري جذاب لوسائل التواصل الاجتماعي يعزز حضور العلامة التجارية ويواكب الاتجاهات الحديثة.',
        
        // Gallery
        'gallery.title': 'المعرض البصري',
        'gallery.subtitle': 'مجموعة مختارة من التعبيرات الفنية',
        'gallery.item1': 'تصميم تجريدي',
        'gallery.item2': 'طباعة رقمية',
        'gallery.item3': 'فن الخط العربي',
        'gallery.item4': 'تلوين رقمي',
        'gallery.item5': 'تصميم هندسي',
        'gallery.item6': 'فن سينمائي',
        
        // Contact
        'contact.title': 'لنتواصل',
        'contact.subtitle': 'مستعد لتحويل رؤيتك إلى واقع؟',
        'contact.heading': 'تواصل معي',
        'contact.description': 'هل لديك مشروع في ذهنك؟ يسعدني سماع أفكارك. لنتناقش حول كيفية تحويل رؤيتك إلى واقع.',
        'contact.emailTitle': 'البريد الإلكتروني',
        'contact.phoneTitle': 'الهاتف',
        'contact.locationTitle': 'الموقع',
        'contact.location': 'متاح عالمياً',
        'contact.form.name': 'اسمك',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.message': 'تفاصيل المشروع',
        'contact.form.submit': 'إرسال الرسالة',
        'contact.socialTitle': 'تابع أعمالي',
        
        // Modal
        'modal.overview': 'نظرة عامة على المشروع',
        'modal.services': 'الخدمات المقدمة',
        'modal.startProject': 'ابدأ مشروعاً مماثلاً',
        
        // Footer
        'footer.rights': 'جميع الحقوق محفوظة'
    }
};

function updateTexts(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// ===========================================
// Current Year
// ===========================================

function initCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===========================================
// Scroll Effects - محسّنة للسرعة
// ===========================================

function initScrollEffects() {
    // إنشاء شريط التقدم
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // تحديث شريط التقدم
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, { passive: true });
}

// ===========================================
// Hover Effects
// ===========================================

function initHoverEffects() {
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Gallery items hover effect
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const image = item.querySelector('.gallery-item__image');
        const overlay = item.querySelector('.gallery-item__overlay');
        const title = item.querySelector('.gallery-item__title');
        
        item.addEventListener('mouseenter', function() {
            image.style.transform = 'scale(1.05)';
            overlay.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', function() {
            image.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
            title.style.transform = 'translateY(10px)';
        });
    });
    
    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ===========================================
// Project Modal
// ===========================================

function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const projectViewBtns = document.querySelectorAll('.project-view-btn');
    
    // Project data
    const projects = {
        1: {
            category: 'Brand Identity',
            title: 'Luxury Fashion House',
            year: '2024',
            description: 'Complete visual identity for a high-end fashion brand blending heritage with modernity. The project involved creating a comprehensive brand system that works across digital and physical touchpoints.',
            tags: ['Logo Design', 'Visual Identity', 'Typography', 'Brand Guidelines'],
            imageClass: 'project-card__image--1'
        },
        2: {
            category: 'Web Design',
            title: 'Interactive Art Gallery',
            year: '2024',
            description: 'Digital platform for art exhibition with immersive user experience. The design focuses on creating a seamless journey through virtual exhibitions while maintaining the artistic integrity of each piece.',
            tags: ['UI/UX Design', 'Interaction', 'Digital Art', 'Web Development'],
            imageClass: 'project-card__image--2'
        },
        3: {
            category: 'Advertising',
            title: 'Premium Beverage Campaign',
            year: '2023',
            description: 'Comprehensive advertising campaign with professional photography. The campaign successfully positioned the brand as a premium lifestyle choice through strategic visual storytelling.',
            tags: ['Advertising', 'Photography', 'Marketing', 'Campaign Strategy'],
            imageClass: 'project-card__image--3'
        }
    };
    
    // Open modal when clicking project view button
    projectViewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.querySelector('.modal__overlay').addEventListener('click', closeModal);
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    function openProjectModal(projectId) {
        const project = projects[projectId];
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        
        if (!project) return;
        
        // Update modal content
        document.getElementById('modalCategory').textContent = 
            currentLang === 'ar' ? 'الهوية البصرية' : project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalYear').textContent = project.year;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Update tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        // Update image
        const modalImage = document.getElementById('modalImage');
        modalImage.className = 'modal__image';
        modalImage.classList.add(project.imageClass);
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===========================================
// Contact Form
// ===========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
            
            // Reset labels
            const labels = this.querySelectorAll('label');
            labels.forEach(label => {
                const input = this.querySelector(`#${label.getAttribute('for')}`);
                if (input && !input.value) {
                    label.style.top = '0.75rem';
                    label.style.fontSize = '1rem';
                }
            });
        });
    }
    
    // Form label animation
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', function() {
                label.style.top = '-0.5rem';
                label.style.fontSize = '0.875rem';
                label.style.color = 'var(--color-accent-primary)';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.top = '0.75rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'var(--color-text-tertiary)';
                }
            });
            
            // Check on load
            if (input.value) {
                label.style.top = '-0.5rem';
                label.style.fontSize = '0.875rem';
                label.style.color = 'var(--color-accent-primary)';
            }
        }
    });
}
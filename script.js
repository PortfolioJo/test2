// ملف JavaScript لـ FolioCraft
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== شاشة التحميل ==========
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
    
    // ========== القائمة المتنقلة ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            const bars = this.querySelectorAll('.artistic-bar');
            if (this.classList.contains('active')) {
                bars[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            
            if (menuToggle) {
                const bars = menuToggle.querySelectorAll('.artistic-bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    });
    
    // ========== إضافة فئة نشطة للروابط عند التمرير ==========
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // زر العودة للأعلى
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    });
    
    // ========== زر العودة للأعلى ==========
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== تأثيرات للعناصر عند التمرير ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                if (entry.target.classList.contains('service-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('animated');
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات
    document.querySelectorAll('.service-card, .audience-category, .mini-project, .process-step').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ========== نموذج الاتصال ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };
            
            // هنا يمكنك إضافة كود لإرسال البيانات إلى الخادم
            // مثال: استخدام Fetch API
            
            // عرض رسالة نجاح
            showNotification('تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.', 'success');
            
            // إعادة تعيين النموذج
            this.reset();
        });
    }
    
    // ========== إشعارات ==========
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.position = 'fixed';
        notification.style.top = '25px';
        notification.style.right = '25px';
        notification.style.padding = '1.25rem 1.75rem';
        notification.style.borderRadius = 'var(--radius-md)';
        notification.style.color = 'white';
        notification.style.fontFamily = 'var(--font-body)';
        notification.style.fontSize = '1.05rem';
        notification.style.zIndex = '9999';
        notification.style.boxShadow = 'var(--shadow-elevated)';
        notification.style.transition = 'all 0.3s ease';
        notification.style.transform = 'translateY(-100px)';
        notification.style.opacity = '0';
        notification.style.maxWidth = '400px';
        
        if (type === 'success') {
            notification.style.background = 'linear-gradient(45deg, var(--secondary-brown), var(--accent-gold))';
            notification.style.border = '2px solid var(--accent-gold)';
        } else {
            notification.style.background = 'linear-gradient(45deg, #9e2a2a, #b45309)';
            notification.style.border = '2px solid #b45309';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateY(-100px)';
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }
    
    // ========== تأثيرات إضافية ==========
    // تأثير الكتابة للعنوان
    const artisticTitle = document.querySelector('.artistic-title');
    if (artisticTitle) {
        const spans = artisticTitle.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                span.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }
    
    // تأثيرات التمرير السلس
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== رسالة ترحيب في الكونسول ==========
    console.log('%c🎨 FolioCraft — فوليوكرافت 🎨', 'background: linear-gradient(45deg, #E8E0D3, #CDB6AC, #8B7355, #D4AF37); color: #1A1A1A; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: bold;');
    console.log('%c📱 تصميم بورتفوليو احترافي للجميع', 'color: #8B7355; font-size: 12px; padding: 8px; background: #F5EFE4; border-radius: 4px;');
    console.log('%c📧 للتواصل: aseeljalal45@gmail.com | واتساب: +962785094075', 'color: #D4AF37; font-size: 11px; margin-top: 5px;');
    console.log('%c📁 مشاريع حية: test1, test4, test7', 'color: #D4AF37; font-size: 12px; padding: 8px; background: #F5EFE4; border-radius: 4px;');
    
    // ========== تهيئة المشاريع ==========
    initializeProjects();
    
    // ========== تأثيرات للبطاقات عند التحويم ==========
    document.querySelectorAll('.service-card, .audience-category, .mini-project').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-elevated)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            }
        });
    });
    
    // ========== تهيئة نموذج النشرة الإخبارية ==========
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification('شكراً لك! ستصلك آخر التحديثات قريباً.', 'success');
                this.reset();
            }
        });
    }
});

// ========== إدارة المشاريع ==========
let currentProjectIndex = 0;
const projects = [
    {
        url: 'https://portfoliojo.github.io/test1/',
        title: 'بورتفوليو مصور فوتوغرافي',
        description: 'تصميم معرض صور تفاعلي لمصور فوتوغرافي محترف، مع إضاءة مميزة وتجربة مستخدم سلسة تعرض الأعمال الفنية بأفضل صورة.',
        features: [
            'معرض صور تفاعلي',
            'تصفية حسب التصنيف',
            'عرض تفصيلي لكل صورة',
            'تصميم متجاوب مع جميع الأجهزة'
        ]
    },
    {
        url: 'https://portfoliojo.github.io/test7/',
        title: 'موقع شخصي متميز',
        description: 'تصميم أنيق وعصري لمحترف في مجال التصميم، مع عرض تفاعلي للأعمال وإنجازات المسيرة المهنية.',
        features: [
            'عرض تفاعلي للأعمال',
            'سيرة ذاتية تفاعلية',
            'شهادات العملاء',
            'مدونة مصغرة'
        ]
    },
    {
        url: 'https://portfoliojo.github.io/test4/',
        title: 'بورتفوليو مطور ويب',
        description: 'تصميم نظيف ومركز لمطور ويب، يعرض المشاريع البرمجية والمهارات التقنية بشكل منظّم وسهل التصفح.',
        features: [
            'عرض المشاريع البرمجية',
            'مهارات تقنية تفاعلية',
            'سجل الخبرات',
            'شهادات ودورات'
        ]
    }
];

function initializeProjects() {
    // تهيئة الإطار الأول
    const projectFrame = document.getElementById('projectFrame');
    if (projectFrame) {
        projectFrame.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        projectFrame.style.opacity = '0';
        projectFrame.style.transition = 'opacity 0.5s ease';
    }
    
    // تهيئة المشاريع المصغرة
    const miniProjects = document.querySelectorAll('.mini-project');
    miniProjects.forEach((project, index) => {
        project.addEventListener('click', function() {
            loadProject(projects[index].url, projects[index].title, index);
        });
    });
}

function loadProject(url, title, index) {
    const projectFrame = document.getElementById('projectFrame');
    const projectTitle = document.querySelector('.project-details h3');
    const projectDescription = document.querySelector('.project-description');
    const projectFeatures = document.querySelector('.project-features ul');
    const projectCounter = document.querySelector('.project-counter');
    const miniProjects = document.querySelectorAll('.mini-project');
    
    if (!projectFrame) return;
    
    // تحديث العداد
    currentProjectIndex = index;
    projectCounter.textContent = `${index + 1}/3`;
    
    // تحديث العنوان والوصف
    if (projectTitle) projectTitle.textContent = title;
    if (projectDescription) projectDescription.textContent = projects[index].description;
    
    // تحديث المميزات
    if (projectFeatures) {
        projectFeatures.innerHTML = projects[index].features.map(feature => 
            `<li><i class="fas fa-check"></i> ${feature}</li>`
        ).join('');
    }
    
    // تحديث الإطار
    projectFrame.style.opacity = '0';
    setTimeout(() => {
        projectFrame.src = url;
        projectFrame.title = title;
        
        setTimeout(() => {
            projectFrame.style.opacity = '1';
        }, 500);
    }, 300);
    
    // تحديث المشاريع المصغرة النشطة
    miniProjects.forEach((project, i) => {
        project.classList.remove('active');
        if (i === index) {
            project.classList.add('active');
            project.style.borderColor = 'var(--accent-gold)';
            project.style.transform = 'translateY(-5px)';
            project.style.boxShadow = 'var(--shadow-medium)';
        } else {
            project.style.borderColor = 'rgba(139, 115, 85, 0.1)';
            project.style.transform = 'translateY(0)';
            project.style.boxShadow = 'none';
        }
    });
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    const project = projects[currentProjectIndex];
    loadProject(project.url, project.title, currentProjectIndex);
}

function prevProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    const project = projects[currentProjectIndex];
    loadProject(project.url, project.title, currentProjectIndex);
}

function reloadProject() {
    const projectFrame = document.getElementById('projectFrame');
    if (projectFrame) {
        projectFrame.style.opacity = '0';
        setTimeout(() => {
            projectFrame.src = projectFrame.src;
            setTimeout(() => {
                projectFrame.style.opacity = '1';
            }, 500);
        }, 300);
    }
}

function openFullscreenProject() {
    const projectFrame = document.getElementById('projectFrame');
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenFrame = document.getElementById('fullscreenFrame');
    const fullscreenTitle = document.getElementById('fullscreenTitle');
    const projectTitle = document.querySelector('.project-details h3');
    
    if (!projectFrame || !fullscreenModal || !fullscreenFrame) return;
    
    fullscreenFrame.src = projectFrame.src;
    fullscreenTitle.textContent = projectTitle ? projectTitle.textContent : 'عرض الموقع';
    fullscreenModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenFrame = document.getElementById('fullscreenFrame');
    
    if (fullscreenModal && fullscreenFrame) {
        fullscreenModal.classList.remove('active');
        fullscreenFrame.src = '';
        document.body.style.overflow = 'auto';
    }
}

function copyProjectLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        showNotification('تم نسخ الرابط بنجاح!', 'success');
    }).catch(err => {
        console.error('فشل نسخ الرابط:', err);
        showNotification('فشل نسخ الرابط', 'error');
    });
}

// إغلاق نافذة العرض الكامل بمفتاح ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// إغلاق نافذة العرض الكامل عند النقر خارجها
document.getElementById('fullscreenModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});

// دالة المساعدة لتحميل الصور
function loadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// تهيئة تحميل الصور
window.addEventListener('load', function() {
    setTimeout(initializeProjects, 1000);
    loadImages();
});
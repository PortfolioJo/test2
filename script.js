// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// DOM Elements
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.querySelector('.back-to-top');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const viewBtns = document.querySelectorAll('.view-btn');
const projectModal = document.querySelector('.project-modal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.querySelector('.contact-form');
const statNumbers = document.querySelectorAll('.stat-number');

// Page Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        
        // Start counter animations
        animateStats();
    }, 2000);
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header background effect
    if (scrollY > 100) {
        header.style.backgroundColor = 'rgba(242, 241, 238, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.backgroundColor = 'rgba(242, 241, 238, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    // Back to top button
    if (scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
    
    // Active navigation link
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Portfolio Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filterValue === 'all' || filterValue === category) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// View Project Modal
viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const portfolioItem = btn.closest('.portfolio-item');
        const projectTitle = portfolioItem.querySelector('h3').textContent;
        const projectCategory = portfolioItem.querySelector('p').textContent;
        const projectImage = portfolioItem.querySelector('img').src;
        
        // Set modal content
        const modalBody = projectModal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="project-modal-content">
                <div class="modal-header">
                    <h2>${projectTitle}</h2>
                    <p class="modal-category">${projectCategory}</p>
                </div>
                
                <div class="modal-image">
                    <img src="${projectImage}" alt="${projectTitle}">
                </div>
                
                <div class="modal-details">
                    <div class="modal-section">
                        <h3>عن المشروع</h3>
                        <p>هذا المشروع يمثل رؤية فنية حديثة للجماليات الكلاسيكية، حيث تم دمج عناصر الفن الإغريقي القديم مع تقنيات التصميم الحديثة لخلق تجربة بصرية فريدة. العمل يعكس التزامي بالدقة والتفاصيل التي تميز الفن الكلاسيكي.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>التحديات</h3>
                        <p>تحويل المفهوم الكلاسيكي إلى تصميم حديث مع الحفاظ على الجوهر الفني الأصيل، وضمان أن يكون التصميم عمليًا وجذابًا في نفس الوقت.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>الحلول</h3>
                        <p>استخدام تقنيات التصميم المتقدمة مع الحفاظ على بساطة وأصالة الفن الكلاسيكي، واختيار الألوان والخطوط المناسبة التي تعكس الفخامة والحداثة في آن واحد.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>الأدوات والتقنيات</h3>
                        <div class="modal-tools">
                            <span>Adobe Illustrator</span>
                            <span>Adobe Photoshop</span>
                            <span>Figma</span>
                            <span>Procreate</span>
                            <span>After Effects</span>
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>مدة التنفيذ</h3>
                        <p>3 أسابيع</p>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn-primary" id="close-modal">
                        <span>إغلاق</span>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;
        
        // Show modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add event listener to close button in modal
        const closeModalBtn = document.getElementById('close-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                projectModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !service || !message) {
            showNotification('يرجى ملء جميع الحقول', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('يرجى إدخال بريد إلكتروني صحيح', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>جاري الإرسال...</span>';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification(`شكراً ${name}! تم استلام رسالتك بنجاح. سأتواصل معك قريباً.`, 'success');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate Stats Counter
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current > target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 20);
    });
}

// Show Notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 2rem;
        background-color: var(--soft-black);
        color: var(--ivory);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: var(--shadow-heavy);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        z-index: 3000;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        min-width: 300px;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .notification.success {
        border-right: 4px solid #4CAF50;
    }
    
    .notification.error {
        border-right: 4px solid #f44336;
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .notification.success .notification-content i {
        color: #4CAF50;
    }
    
    .notification.error .notification-content i {
        color: #f44336;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--ivory);
        opacity: 0.7;
        cursor: pointer;
        transition: opacity 0.3s ease;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
`;
document.head.appendChild(notificationStyles);

// Parallax Effect for Background Statues
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const statue1 = document.querySelector('.statue-1');
    const statue2 = document.querySelector('.statue-2');
    
    if (statue1) {
        statue1.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
    
    if (statue2) {
        statue2.style.transform = `translateY(${scrollY * 0.03}px)`;
    }
});

// Smooth scrolling for anchor links
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

// Initialize with active nav link
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to portfolio items
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-10px)';
            item.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
        });
    });
});
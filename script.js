// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// DOM Elements
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');
const backToTop = document.querySelector('.back-to-top');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const viewProjectBtns = document.querySelectorAll('.view-project');
const projectModal = document.querySelector('.project-modal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.getElementById('contactForm');
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
    
    // Update active nav link
    updateActiveNavLink();
});

// Update Active Nav Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Back to Top
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Portfolio Item Hover Effect
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// View Project Modal
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const projectItem = btn.closest('.portfolio-item');
        const projectTitle = projectItem.querySelector('h3').textContent;
        const projectCategory = projectItem.querySelector('p').textContent;
        const projectImage = projectItem.querySelector('img').src;
        
        // Set modal content
        const modalBody = projectModal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="modal-project">
                <div class="modal-header">
                    <h2>${projectTitle}</h2>
                    <p>${projectCategory}</p>
                </div>
                
                <div class="modal-image">
                    <img src="${projectImage}" alt="${projectTitle}" style="width:100%; height:300px; object-fit:cover; margin:2rem 0;">
                </div>
                
                <div class="modal-details">
                    <div class="modal-section">
                        <h3>عن المشروع</h3>
                        <p>هذا المشروع يمثل رؤية فنية حديثة للجماليات الكلاسيكية، حيث تم دمج عناصر الفن الإغريقي القديم مع تقنيات التصميم الحديثة لخلق تجربة بصرية فريدة.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>الأدوات</h3>
                        <div class="modal-tools">
                            <span>Adobe Illustrator</span>
                            <span>Photoshop</span>
                            <span>Figma</span>
                        </div>
                    </div>
                    
                    <div class="modal-section">
                        <h3>مدة التنفيذ</h3>
                        <p>3 أسابيع</p>
                    </div>
                </div>
                
                <button class="btn-primary" id="closeModal" style="margin-top:2rem; width:100%;">
                    <span>إغلاق</span>
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Show modal
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add event listener to close button in modal
        const closeModalBtn = document.getElementById('closeModal');
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
        
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('يرجى ملء جميع الحقول');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>جاري الإرسال...</span>';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert(`شكراً ${name}! تم استلام رسالتك بنجاح. سأتصل بك قريباً.`);
            
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
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current > target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

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

// Parallax effect for background statues
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const statueBg = document.querySelector('.statue-background');
    
    if (statueBg) {
        statueBg.style.transform = `translateY(${scrollY * 0.05}px)`;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animations
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });
});
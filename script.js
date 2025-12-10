// DOM Elements
const loader = document.querySelector('.loader');
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.querySelector('.back-to-top');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const viewProjectBtns = document.querySelectorAll('.view-project');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const contactForm = document.querySelector('.contact-form');

// Page Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
    }, 1500);
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Header background effect
    if (scrollY > 100) {
        header.style.backgroundColor = 'rgba(242, 241, 238, 0.95)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    } else {
        header.style.backgroundColor = 'rgba(242, 241, 238, 0.9)';
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
    
    if (nav.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
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

// Portfolio Item Hover Effect
portfolioItems.forEach(item => {
    const image = item.querySelector('.statue-image');
    
    item.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.transition = 'transform 4s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// View Project Modal
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const projectItem = btn.closest('.portfolio-item');
        const projectTitle = projectItem.querySelector('h3').textContent;
        const projectCategory = projectItem.querySelector('p').textContent;
        const projectImage = projectItem.querySelector('.statue-image').style.backgroundImage;
        
        // Set modal content
        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <div class="modal-project">
                <div class="modal-header">
                    <h2>${projectTitle}</h2>
                    <p>${projectCategory}</p>
                </div>
                
                <div class="modal-image" style="background-image: ${projectImage}; height: 400px; margin: 2rem 0;"></div>
                
                <div class="modal-details">
                    <div class="modal-section">
                        <h3>عن المشروع</h3>
                        <p>هذا المشروع يمثل رؤية فنية حديثة للجماليات الكلاسيكية، حيث تم دمج عناصر الفن الإغريقي القديم مع تقنيات التصميم الحديثة لخلق تجربة بصرية فريدة.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>التحديات</h3>
                        <p>تحويل المفهوم الكلاسيكي إلى تجربة رقمية حديثة مع الحفاظ على الجوهر الفني الأصيل، وضمان أن تكون التجربة سلسة على جميع الأجهزة.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>الحلول</h3>
                        <p>استخدام تقنيات CSS و JavaScript المتقدمة لخلق تأثيرات بصرية تشبه الفن الكلاسيكي، مع التركيز على الأداء وسرعة التحميل.</p>
                    </div>
                    
                    <div class="modal-section">
                        <h3>الأدوات</h3>
                        <div class="tools">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>Adobe Creative Suite</span>
                            <span>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close Modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
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
    
    // In a real application, you would send the data to a server here
    // For this example, we'll just show a success message
    
    // Show loading state
    const submitBtn = contactForm.querySelector('.form-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'جاري الإرسال...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert(`شكراً ${name}! تم استلام رسالتك بنجاح. سأتواصل معك قريباً على ${email}`);
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
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

// Initialize animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.portfolio-item, .quote-block, .detail-block').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav.active {
        display: block;
        position: fixed;
        top: 80px;
        right: 0;
        width: 100%;
        background-color: var(--ivory);
        padding: 2rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    .nav.active .nav-list {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .modal-project {
        padding: 1rem;
    }
    
    .modal-header {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .modal-header h2 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
    }
    
    .modal-section {
        margin-bottom: 2rem;
    }
    
    .modal-section h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        position: relative;
        display: inline-block;
    }
    
    .modal-section h3::after {
        content: '';
        position: absolute;
        bottom: -5px;
        right: 0;
        width: 40px;
        height: 1px;
        background-color: var(--gold);
    }
    
    .modal-section p {
        line-height: 1.7;
        color: var(--soft-black);
        opacity: 0.8;
    }
    
    .tools {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
    }
    
    .tools span {
        padding: 0.5rem 1rem;
        background-color: var(--light-gray);
        color: var(--soft-black);
        font-size: 0.9rem;
        border-radius: 2px;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add initial animation class to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroQuote = document.querySelector('.hero-quote');
    const heroBtn = document.querySelector('.hero-btn');
    
    setTimeout(() => {
        heroTitle.classList.add('animate-in');
    }, 500);
    
    setTimeout(() => {
        heroSubtitle.classList.add('animate-in');
    }, 800);
    
    setTimeout(() => {
        heroQuote.classList.add('animate-in');
    }, 1100);
    
    setTimeout(() => {
        heroBtn.classList.add('animate-in');
    }, 1400);
});
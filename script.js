// ========== إدارة المشاريع ==========
const projectDetails = {
    project1: {
        title: "بورتفوليو مصور احترافي",
        status: "جاري العمل",
        type: "بورتفوليو مصور فوتوغرافي",
        date: "يناير 2025",
        client: "مصور فوتوغرافي محترف",
        description: "تصميم معرض صور تفاعلي لمصور فوتوغرافي محترف، مع إضاءة مميزة وتجربة مستخدم سلسة. يعرض المشروع مجموعة متنوعة من الأعمال الفوتوغرافية مع إمكانية التصفية حسب التصنيف.",
        features: [
            "معرض صور تفاعلي",
            "تصفية حسب التصنيف",
            "عرض تفصيلي لكل صورة",
            "تصميم متجاوب مع جميع الأجهزة",
            "سرعة تحميل عالية",
            "واجهة استخدام سهلة"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Lightbox"],
        link: "https://portfoliojo.github.io/test1/"
    },
    project2: {
        title: "موقع شخصي متميز",
        status: "جاري العمل",
        type: "موقع شخصي احترافي",
        date: "ديسمبر 2024",
        client: "مصمم جرافيك محترف",
        description: "تصميم أنيق وعصري لمحترف في مجال التصميم، مع عرض تفاعلي للأعمال وإنجازات المسيرة المهنية. يشمل الموقع سيرة ذاتية تفاعلية ومعرض للأعمال.",
        features: [
            "عرض تفاعلي للأعمال",
            "سيرة ذاتية تفاعلية",
            "شهادات العملاء",
            "مدونة مصغرة",
            "نموذج تواصل مباشر",
            "تصميم ثلاثي الأبعاد"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Swiper.js"],
        link: "https://portfoliojo.github.io/test7/"
    },
    project3: {
        title: "بورتفوليو بسيط وأنيق",
        status: "جاري العمل",
        type: "بورتفوليو مطور ويب",
        date: "نوفمبر 2024",
        client: "مطور ويب محترف",
        description: "تصميم نظيف ومركز لمطور ويب، يعرض المشاريع البرمجية والمهارات التقنية بشكل منظّم وسهل التصفح. يركز التصميم على المحتوى وسرعة الأداء.",
        features: [
            "عرض المشاريع البرمجية",
            "مهارات تقنية تفاعلية",
            "سجل الخبرات",
            "شهادات ودورات",
            "نموذج تواصل سريع",
            "تحسين لمحركات البحث"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Font Awesome"],
        link: "https://portfoliojo.github.io/test4/"
    }
};

// عرض تفاصيل المشروع
function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    const modalBody = document.getElementById('modalBody');
    
    if (!project || !modalBody) return;
    
    const detailsHTML = `
        <div class="project-details">
            <h3>${project.title}</h3>
            
            <div class="project-meta">
                <div class="meta-item">
                    <i class="fas fa-circle"></i>
                    <span>الحالة: ${project.status}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-tag"></i>
                    <span>النوع: ${project.type}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>التاريخ: ${project.date}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-user"></i>
                    <span>العميل: ${project.client}</span>
                </div>
            </div>
            
            <div class="project-description">
                <p>${project.description}</p>
            </div>
            
            <div class="project-features">
                <h4>المميزات الرئيسية</h4>
                <ul>
                    ${project.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            
            <a href="${project.link}" target="_blank" class="project-btn">
                <i class="fas fa-external-link-alt"></i>
                زيارة الموقع المباشر
            </a>
        </div>
    `;
    
    modalBody.innerHTML = detailsHTML;
    document.getElementById('projectModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// إغلاق نافذة تفاصيل المشروع
function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// إغلاق النافذة عند النقر خارج المحتوى
document.getElementById('projectModal')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeProjectModal();
    }
});

// نافذة العرض الكامل
function openFullscreen(url) {
    const modalHTML = `
        <div class="fullscreen-modal active" id="fullscreenModal">
            <div class="fullscreen-header">
                <h3>عرض الموقع</h3>
                <button class="fullscreen-close" onclick="closeFullscreen()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <iframe src="${url}" class="fullscreen-frame" allowfullscreen></iframe>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    if (modal) {
        modal.remove();
    }
    document.body.style.overflow = 'auto';
}

// إغلاق نافذة العرض الكامل بمفتاح ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('fullscreenModal');
        if (modal) {
            closeFullscreen();
        }
        closeProjectModal();
    }
});

// ========== تحسين تجربة المشاريع ==========
function initProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.getElementById('projectModal');
    
    // إضافة تأثيرات للبطاقات
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // تحسين iframes
    const iframes = document.querySelectorAll('.preview-frame iframe');
    iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.5s ease';
    });
}

// تهيئة المشاريع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initProjects, 1000);
});

// ========== تحديث رسالة الكونسول ==========
console.log('%c📁 مشاريع حية: test1, test4, test7', 'color: #D4AF37; font-size: 12px; padding: 8px; background: #F5EFE4; border-radius: 4px;');
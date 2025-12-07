// script.js - المشروع النهائي الكامل

// نظام الترجمة الكامل
const translations = {
    ar: {
        // التنقل
        logo: "أسيل",
        navHome: "الرئيسية",
        navProfile: "الملف الشخصي",
        navEducation: "التعليم والشهادات",
        navProjects: "المشاريع",
        navSkills: "المهارات",
        navContact: "اتصل بي",
        language: "EN",
        
        // الصفحة الرئيسية
        heroTitle: "مرحباً، أنا أسيل<br>مصممة جرافيكية إبداعية",
        heroDescription: "أقوم بتحويل الأفكار إلى تصاميم بصرية مذهلة باستخدام أحدث أدوات التصميم وأفضل ممارسات الصناعة. لدي شغف بإنشاء هويات بصرية وتصاميم جرافيكية مع تركيز كبير على التفاصيل والجودة والإبداع.",
        viewProjects: "عرض مشاريعي",
        contactMe: "تواصل معي",
        sectionsTitle: "استكشف عالمي الإبداعي",
        
        // ملخص الأقسام
        summaryProfileTitle: "الملف الشخصي",
        summaryProfileDesc: "تعرف على مسيرتي المهنية وخبراتي في مجال التصميم الجرافيكي والإبداع البصري. اكتشف شغفي وتخصصاتي الفنية.",
        summaryEducationTitle: "التعليم والشهادات",
        summaryEducationDesc: "تعرف على مؤهلاتي الأكاديمية والشهادات المهنية التي حصلت عليها في مجال التصميم والجرافيك.",
        summaryProjectsTitle: "المشاريع",
        summaryProjectsDesc: "تصفح معرض أعمالي المتنوعة في التصميم الجرافيكي، الهويات البصرية، والمواد الإعلانية الإبداعية.",
        summarySkillsTitle: "المهارات",
        summarySkillsDesc: "اكتشف مهاراتي التقنية والإبداعية المتقدمة في مختلف برامج وتقنيات التصميم الحديثة والمتطورة.",
        summaryContactTitle: "اتصل بي",
        summaryContactDesc: "تواصل معي لمناقشة مشروعك القادم أو للحصول على استشارة تصميمية احترافية تناسب احتياجاتك.",
        viewProfile: "عرض الملف",
        viewEducation: "عرض التعليم",
        viewProjects2: "عرض المشاريع",
        viewSkills: "عرض المهارات",
        contactNow: "تواصل الآن",
        
        // صفحة الملف الشخصي
        profileTitle: "الملف الشخصي",
        profileDescription: "مصممة جرافيكية محترفة مع سنوات من الخبرة في إنشاء هويات بصرية متميزة وتصاميم إبداعية مبتكرة.",
        profileName: "أسيل",
        profileTitle2: "مصممة جرافيكية ومطورة هويات بصرية",
        profileFullDescription: "أنا مصممة جرافيكية محترفة مع سنوات من الخبرة في إنشاء هويات بصرية متميزة وتصاميم إبداعية مبتكرة. أعمل على تحويل الأفكار المجردة إلى واقع بصري جذاب عبر استخدام أحدث أدوات التصميم والبرمجيات الاحترافية. لدي شغف عميق بخلق تجارب بصرية مميزة تلهم الجمهور وتحقق أهداف العلامات التجارية بشكل فعال.",
        experienceTitle: "الخبرة المهنية",
        experienceDescription: "عملت على مجموعة متنوعة من المشاريع الإبداعية التي ساهمت في تطوير مهاراتي ومعرفتي في مجال التصميم:",
        experienceItem1: "تصميم هويات بصرية متكاملة للعديد من الشركات المحلية والدولية بمختلف القطاعات",
        experienceItem2: "إنشاء مواد تسويقية وإعلانية مبتكرة للعديد من الحملات الترويجية الناجحة",
        experienceItem3: "تصميم واجهات مستخدم وتجارب بصرية متقدمة لتطبيقات ومواقع إلكترونية",
        experienceItem4: "تطوير أنظمة تصميم متكاملة لتحسين تجربة العلامات التجارية وزيادة فعاليتها",
        
        // صفحة التعليم والشهادات
        educationTitle: "التعليم والشهادات",
        educationDescription: "مؤهلاتي الأكاديمية والشهادات المهنية التي حصلت عليها في مجال التصميم الجرافيكي والتقنيات المرتبطة به.",
        academicEducation: "التعليم الأكاديمي",
        degree1Title: "بكالوريوس في التصميم الجرافيكي والوسائط المتعددة",
        degree1Institution: "جامعة الملك سعود - الرياض",
        degree1Description: "تخصصت في تصميم الهويات البصرية وتجربة المستخدم، مع تركيز على الجوانب الإبداعية والتقنية في التصميم الرقمي والمطبوع.",
        degree1GPA: "المعدل التراكمي: 4.75 / 5.0",
        degree2Title: "دبلوم في الفنون والتصميم",
        degree2Institution: "كلية التصميم والفنون - جدة",
        degree2Description: "دراسة متخصصة في أساسيات التصميم الجرافيكي، نظرية الألوان، التصميم الطباعي، وتقنيات الرسم الرقمي.",
        degree2GPA: "التقدير: ممتاز",
        
        professionalCertifications: "الشهادات المهنية",
        cert1Title: "Adobe Certified Professional",
        cert1Issuer: "Adobe Systems",
        cert1Description: "شهادة مهنية معتمدة في استخدام Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        cert1Date: "تم الحصول عليها: 2023",
        cert2Title: "UI/UX Design Specialization",
        cert2Issuer: "Google & Coursera",
        cert2Description: "تخصص في تصميم واجهات المستخدم وتجربة المستخدم، يتضمن أساسيات البحث، التصميم، والاختبار",
        cert2Date: "تم الحصول عليها: 2022",
        cert3Title: "Mobile App Design Certificate",
        cert3Issuer: "Interaction Design Foundation",
        cert3Description: "شهادة في تصميم تطبيقات الجوال، تشمل مبادئ تصميم واجهات الهواتف الذكية والأجهزة اللوحية",
        cert3Date: "تم الحصول عليها: 2022",
        cert4Title: "Motion Graphics Certification",
        cert4Issuer: "School of Motion",
        cert4Description: "تدريب متقدم في الرسوم المتحركة والمؤثرات البصرية باستخدام Adobe After Effects وCinema 4D",
        cert4Date: "تم الحصول عليها: 2021",
        
        trainingCourses: "الدورات التدريبية",
        course1Title: "تصميم الهويات البصرية المتكاملة",
        course1Platform: "Udemy - 2023",
        course2Title: "التصميم الطباعي المتقدم",
        course2Platform: "Skillshare - 2023",
        course3Title: "أساسيات التسويق الرقمي للتصميم",
        course3Platform: "LinkedIn Learning - 2022",
        course4Title: "تصميم الويب باستخدام Figma",
        course4Platform: "YouTube Premium - 2022",
        
        // صفحة المشاريع
        projectsTitle: "مشاريعي الإبداعية",
        projectsDescription: "إليك مجموعة مختارة من أبرز المشاريع التصميمية التي قمت بتنفيذها مؤخراً، والتي تعكس تنوع مهاراتي وإبداعي في مجالات التصميم المختلفة.",
        project1Title: "هوية بصرية متكاملة",
        project1Description: "تصميم هوية بصرية كاملة تشمل الشعار، نظام الألوان، الخطوط، والمواد الترويجية لشركة ناشئة في مجال التكنولوجيا.",
        project2Title: "مواد تسويقية مطبوعة",
        project2Description: "تصميم مجموعة متكاملة من المواد المطبوعة لحملة تسويقية واسعة النطاق تشمل بروشورات، فلayers، ومواد عرض.",
        project3Title: "واجهة تطبيق جوال",
        project3Description: "تصميم واجهة مستخدم وتجربة مستخدم متكاملة لتطبيق جوال مبتكر في قطاع التكنولوجيا المالية والخدمات المصرفية.",
        project4Title: "تصميم موقع إلكتروني",
        project4Description: "تصميم واجهة موقع إلكتروني متكامل مع التركيز على تجربة المستخدم، الجاذبية البصرية، والاستجابة للأجهزة المختلفة.",
        project5Title: "مواد بصرية للوسائط المتعددة",
        project5Description: "إنشاء محتوى بصري متكامل وفيديوهات رسومية متحركة لحملة إعلانية رقمية واسعة على منصات التواصل الاجتماعي.",
        project6Title: "تصميم كتاب إلكتروني",
        project6Description: "تصميم وتخطيط كتاب إلكتروني تفاعلي مع رسوم توضيحية مخصصة وأسلوب بصري جذاب لدار نشر رائدة.",
        
        // صفحة المهارات
        skillsTitle: "مهاراتي المتقدمة",
        skillsDescription: "مجموعة المهارات التقنية والإبداعية المتطورة التي أتمتع بها في مجال التصميم الجرافيكي والوسائط الرقمية، مع تركيز على الابتكار والتطوير المستمر.",
        designSkills: "مهارات التصميم الأساسية",
        skillAdobe: "Adobe Creative Suite",
        skillUIUX: "تصميم UI/UX",
        skillLogo: "تصميم الشعارات والهويات",
        skillTypography: "التخطيط الطباعي والأنماط",
        technicalSkills: "المهارات التقنية المتقدمة",
        skillFigma: "Figma & Sketch",
        skillMotion: "الرسوم المتحركة والمؤثرات",
        skillPrint: "التصميم للطباعة والإنتاج",
        skillWeb: "تصميم الويب والاستجابة",
        creativeSkills: "المهارات الإبداعية والقيادية",
        skillConcept: "تطوير المفاهيم والإبداع",
        skillBranding: "الهوية البصرية والتسويق",
        skillColor: "نظرية الألوان والتنسيق",
        skillIllustration: "الرسم التوضيحي والفني",
        
        // صفحة الاتصال
        contactTitle: "تواصل معي",
        contactDescription: "أهلاً بك! لا تتردد في التواصل معي لمناقشة مشروعك التصميمي القادم، أو لأي استفسارات أخرى. سأكون سعيدة بمساعدتك وتحويل أفكارك إلى واقع إبداعي مميز.",
        contactAddressTitle: "العنوان",
        contactAddress: "الرياض، المملكة العربية السعودية",
        contactPhoneTitle: "الهاتف",
        contactEmailTitle: "البريد الإلكتروني",
        contactHoursTitle: "ساعات العمل",
        contactHours: "الأحد - الخميس: 9 صباحاً - 6 مساءً",
        formName: "الاسم الكامل *",
        formEmail: "البريد الإلكتروني *",
        formSubject: "الموضوع *",
        formMessage: "الرسالة *",
        formMessagePlaceholder: "أهلاً أسيل، أرغب في مناقشة مشروع تصميمي معك...",
        formSubmit: "إرسال الرسالة"
    },
    en: {
        // Navigation
        logo: "Aseel",
        navHome: "Home",
        navProfile: "Profile",
        navEducation: "Education",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        language: "AR",
        
        // Home Page
        heroTitle: "Hello, I'm Aseel<br>Creative Graphic Designer",
        heroDescription: "I transform ideas into stunning visual designs using the latest design tools and industry best practices. I'm passionate about creating visual identities and graphic designs with a strong focus on detail, quality, and creativity.",
        viewProjects: "View My Projects",
        contactMe: "Contact Me",
        sectionsTitle: "Explore My Creative World",
        
        // Sections Summary
        summaryProfileTitle: "Profile",
        summaryProfileDesc: "Learn about my professional journey and experience in graphic design and visual creativity. Discover my passion and artistic specializations.",
        summaryEducationTitle: "Education & Certifications",
        summaryEducationDesc: "Explore my academic qualifications and professional certifications in design and graphics.",
        summaryProjectsTitle: "Projects",
        summaryProjectsDesc: "Browse my diverse portfolio of works in graphic design, visual identities, and creative advertising materials.",
        summarySkillsTitle: "Skills",
        summarySkillsDesc: "Discover my advanced technical and creative skills in various modern and evolving design programs and techniques.",
        summaryContactTitle: "Contact",
        summaryContactDesc: "Contact me to discuss your upcoming project or to get a professional design consultation tailored to your needs.",
        viewProfile: "View Profile",
        viewEducation: "View Education",
        viewProjects2: "View Projects",
        viewSkills: "View Skills",
        contactNow: "Contact Now",
        
        // Profile Page
        profileTitle: "Profile",
        profileDescription: "Professional graphic designer with years of experience in creating distinctive visual identities and innovative creative designs.",
        profileName: "Aseel",
        profileTitle2: "Graphic Designer & Visual Identity Developer",
        profileFullDescription: "I am a professional graphic designer with years of experience in creating distinctive visual identities and innovative creative designs. I work on transforming abstract ideas into attractive visual reality using the latest design tools and professional software. I have a deep passion for creating distinctive visual experiences that inspire audiences and effectively achieve brand goals.",
        experienceTitle: "Professional Experience",
        experienceDescription: "I have worked on a variety of creative projects that have contributed to developing my skills and knowledge in design:",
        experienceItem1: "Designing comprehensive visual identities for many local and international companies across various sectors",
        experienceItem2: "Creating innovative marketing and advertising materials for numerous successful promotional campaigns",
        experienceItem3: "Designing advanced user interfaces and visual experiences for applications and websites",
        experienceItem4: "Developing comprehensive design systems to improve brand experiences and increase effectiveness",
        
        // Education Page
        educationTitle: "Education & Certifications",
        educationDescription: "My academic qualifications and professional certifications in graphic design and related technologies.",
        academicEducation: "Academic Education",
        degree1Title: "Bachelor's in Graphic Design & Multimedia",
        degree1Institution: "King Saud University - Riyadh",
        degree1Description: "Specialized in visual identity design and user experience, focusing on creative and technical aspects of digital and print design.",
        degree1GPA: "GPA: 4.75 / 5.0",
        degree2Title: "Diploma in Arts & Design",
        degree2Institution: "College of Design & Arts - Jeddah",
        degree2Description: "Specialized study in graphic design fundamentals, color theory, typography, and digital drawing techniques.",
        degree2GPA: "Grade: Excellent",
        
        professionalCertifications: "Professional Certifications",
        cert1Title: "Adobe Certified Professional",
        cert1Issuer: "Adobe Systems",
        cert1Description: "Professional certified in using Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        cert1Date: "Obtained: 2023",
        cert2Title: "UI/UX Design Specialization",
        cert2Issuer: "Google & Coursera",
        cert2Description: "Specialization in user interface and user experience design, including research, design, and testing fundamentals",
        cert2Date: "Obtained: 2022",
        cert3Title: "Mobile App Design Certificate",
        cert3Issuer: "Interaction Design Foundation",
        cert3Description: "Certificate in mobile app design, covering principles of smartphone and tablet interface design",
        cert3Date: "Obtained: 2022",
        cert4Title: "Motion Graphics Certification",
        cert4Issuer: "School of Motion",
        cert4Description: "Advanced training in animation and visual effects using Adobe After Effects and Cinema 4D",
        cert4Date: "Obtained: 2021",
        
        trainingCourses: "Training Courses",
        course1Title: "Comprehensive Visual Identity Design",
        course1Platform: "Udemy - 2023",
        course2Title: "Advanced Typography Design",
        course2Platform: "Skillshare - 2023",
        course3Title: "Digital Marketing Fundamentals for Design",
        course3Platform: "LinkedIn Learning - 2022",
        course4Title: "Web Design with Figma",
        course4Platform: "YouTube Premium - 2022",
        
        // Projects Page
        projectsTitle: "My Creative Projects",
        projectsDescription: "Here is a curated selection of the most prominent design projects I have recently completed, reflecting the diversity of my skills and creativity in various design fields.",
        project1Title: "Complete Visual Identity",
        project1Description: "Design of a complete visual identity including logo, color system, fonts, and promotional materials for a tech startup.",
        project2Title: "Printed Marketing Materials",
        project2Description: "Design of a comprehensive set of printed materials for a large-scale marketing campaign including brochures, flyers, and display materials.",
        project3Title: "Mobile App Interface",
        project3Description: "Design of a complete user interface and user experience for an innovative mobile app in the fintech and banking services sector.",
        project4Title: "Website Design",
        project4Description: "Design of a complete website interface with focus on user experience, visual appeal, and responsiveness across different devices.",
        project5Title: "Multimedia Visual Materials",
        project5Description: "Creating comprehensive visual content and animated motion graphics for a wide digital advertising campaign on social media platforms.",
        project6Title: "E-book Design",
        project6Description: "Design and layout of an interactive e-book with custom illustrations and attractive visual style for a leading publishing house.",
        
        // Skills Page
        skillsTitle: "My Advanced Skills",
        skillsDescription: "A collection of advanced technical and creative skills I possess in the field of graphic design and digital media, with a focus on innovation and continuous development.",
        designSkills: "Core Design Skills",
        skillAdobe: "Adobe Creative Suite",
        skillUIUX: "UI/UX Design",
        skillLogo: "Logo & Identity Design",
        skillTypography: "Typography & Patterns",
        technicalSkills: "Advanced Technical Skills",
        skillFigma: "Figma & Sketch",
        skillMotion: "Motion Graphics & Effects",
        skillPrint: "Print Design & Production",
        skillWeb: "Web Design & Responsiveness",
        creativeSkills: "Creative & Leadership Skills",
        skillConcept: "Concept Development & Creativity",
        skillBranding: "Visual Identity & Marketing",
        skillColor: "Color Theory & Coordination",
        skillIllustration: "Illustration & Artistic Drawing",
        
        // Contact Page
        contactTitle: "Contact Me",
        contactDescription: "Welcome! Feel free to contact me to discuss your upcoming design project or for any other inquiries. I'll be happy to assist you and transform your ideas into a distinctive creative reality.",
        contactAddressTitle: "Address",
        contactAddress: "Riyadh, Saudi Arabia",
        contactPhoneTitle: "Phone",
        contactEmailTitle: "Email",
        contactHoursTitle: "Working Hours",
        contactHours: "Sunday - Thursday: 9 AM - 6 PM",
        formName: "Full Name *",
        formEmail: "Email Address *",
        formSubject: "Subject *",
        formMessage: "Message *",
        formMessagePlaceholder: "Hello Aseel, I would like to discuss a design project with you...",
        formSubmit: "Send Message"
    }
};

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة تأثير الجزيئات المتحركة
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#9C27B0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#9C27B0",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });
    
    // تهيئة المتغيرات
    let currentLang = 'ar';
    let currentPage = 'home';
    const backHomeBtn = document.getElementById('backHomeBtn');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    // وظيفة تغيير اللغة
    function changeLanguage(lang) {
        currentLang = lang;
        
        // تحديث اتجاه الصفحة
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        
        // تغيير الخط حسب اللغة
        document.body.style.fontFamily = lang === 'ar' ? "'Almarai', sans-serif" : "'Poppins', sans-serif";
        
        // تحديث جميع النصوص
        updateAllTexts();
        
        // تحديث زر اللغة
        languageBtn.querySelector('.language-text').textContent = translations[lang].language;
        
        // تحديث القائمة المنسدلة للغة
        document.querySelectorAll('.language-option').forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
        
        // تحديث زر الرجوع
        if (lang === 'ar') {
            backHomeBtn.querySelector('span').textContent = 'الرئيسية';
        } else {
            backHomeBtn.querySelector('span').textContent = 'Home';
        }
    }
    
    // وظيفة تحديث جميع النصوص
    function updateAllTexts() {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.hasAttribute('placeholder')) {
                        element.setAttribute('placeholder', translations[currentLang][key]);
                    } else if (element.id === 'message') {
                        element.textContent = translations[currentLang][key];
                    }
                } else if (element.tagName === 'BUTTON' && element.type === 'submit') {
                    element.innerHTML = `<i class="fas fa-paper-plane"></i> ${translations[currentLang][key]}`;
                } else {
                    const text = translations[currentLang][key];
                    if (text.includes('<br>')) {
                        element.innerHTML = text;
                    } else {
                        element.textContent = text;
                    }
                }
            }
        });
    }
    
    // وظيفة تغيير الصفحة
    function changePage(pageId) {
        if (pageId === currentPage) return;
        
        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // إزالة النشاط من جميع روابط التنقل
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // إظهار الصفحة المحددة
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // إضافة النشاط للرابط المحدد
            const targetLink = document.querySelector(`.navbar-link[data-page="${pageId}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
            
            // تحديث المتغير الحالي
            currentPage = pageId;
            
            // إظهار أو إخفاء زر الرجوع
            if (pageId === 'home') {
                backHomeBtn.style.display = 'none';
            } else {
                backHomeBtn.style.display = 'flex';
            }
            
            // إغلاق القائمة على الأجهزة المحمولة
            if (window.innerWidth <= 768) {
                navbarMenu.classList.remove('active');
                navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // تفعيل تأثير شريط المهارات إذا كانت الصفحة هي المهارات
            if (pageId === 'skills') {
                setTimeout(animateSkills, 300);
            }
            
            // تفعيل تأثيرات البطاقات
            setTimeout(checkCards, 300);
            
            // التمرير إلى أعلى الصفحة
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    
    // زر الرجوع للرئيسية
    backHomeBtn.addEventListener('click', function() {
        changePage('home');
    });
    
    // تبديل القائمة على الأجهزة المحمولة
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        this.innerHTML = navbarMenu.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // التنقل عبر روابط القائمة
    document.querySelectorAll('.navbar-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر بطاقات الملخص
    document.querySelectorAll('.summary-card').forEach(card => {
        card.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر الأزرار
    document.querySelectorAll('.btn[data-page]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // التنقل عبر أزرار بطاقات الملخص (لمنع انتشار الحدث)
    document.querySelectorAll('.summary-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            changePage(pageId);
        });
    });
    
    // تبديل اللغة
    languageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // اختيار لغة من القائمة
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // تأثير شريط المهارات
    function animateSkills() {
        const skillProgressElements = document.querySelectorAll('.skill-progress');
        const skillsPage = document.getElementById('skills');
        
        if (!skillsPage) return;
        
        const rect = skillsPage.getBoundingClientRect();
        
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            skillProgressElements.forEach(skill => {
                const width = skill.getAttribute('data-width');
                skill.style.width = width + '%';
            });
        }
    }
    
    // تشغيل تأثير المهارات عند التمرير
    window.addEventListener('scroll', animateSkills);
    
    // إرسال نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // رسالة نجاح
            const message = currentLang === 'ar' 
                ? 'شكراً لك على رسالتك! سأعود إليك في أقرب وقت ممكن.' 
                : 'Thank you for your message! I will get back to you as soon as possible.';
            
            // إنشاء إشعار
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                z-index: 9999;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 12px;
                transform: translateX(150%);
                transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            `;
            
            notification.innerHTML = `
                <i class="fas fa-check-circle" style="font-size: 20px;"></i>
                <span>${message}</span>
            `;
            
            document.body.appendChild(notification);
            
            // عرض الإشعار
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // إخفاء الإشعار بعد 4 ثواني
            setTimeout(() => {
                notification.style.transform = 'translateX(150%)';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 400);
            }, 4000);
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }
    
    // إضافة تأثيرات للبطاقات عند التمرير
    const cards = document.querySelectorAll('.card, .project-card, .summary-card, .skill-category, .contact-item, .certification-card, .course-item, .timeline-item');
    
    function checkCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // إعداد البطاقات الأولية
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // تفعيل تأثيرات البطاقات عند التحميل
    setTimeout(checkCards, 300);
    
    // تفعيل تأثيرات البطاقات عند التمرير
    window.addEventListener('scroll', checkCards);
    
    // تهيئة اللغة الافتراضية
    changeLanguage('ar');
    
    // إخفاء زر الرجوع في الصفحة الرئيسية
    backHomeBtn.style.display = 'none';
    
    // اختبار جميع الروابط
    testAllLinks();
});

// اختبار جميع الروابط للتأكد من عملها
function testAllLinks() {
    console.log('Testing all page links...');
    
    const pageIds = ['home', 'profile', 'education', 'projects', 'skills', 'contact'];
    
    pageIds.forEach(pageId => {
        const pageElement = document.getElementById(pageId);
        if (!pageElement) {
            console.warn(`Page with id "${pageId}" not found!`);
        } else {
            console.log(`✓ Page "${pageId}" found`);
        }
        
        const navLinks = document.querySelectorAll(`[data-page="${pageId}"]`);
        if (navLinks.length === 0) {
            console.warn(`No navigation links found for page "${pageId}"`);
        } else {
            console.log(`✓ ${navLinks.length} navigation link(s) found for page "${pageId}"`);
        }
    });
}

// إضافة تأثيرات للوحة المفاتيح
document.addEventListener('keydown', function(e) {
    // زر ESC للرجوع للرئيسية
    if (e.key === 'Escape' && currentPage !== 'home') {
        document.getElementById('backHomeBtn').click();
    }
});

// Ma'lumotlar bazasi
        const subjects = [
            { id: 1, name: "Matematika", icon: "fas fa-calculator", price: "300,000", period: "to'lov", desc: "Algebra, geometriya, hisoblash" },
            { id: 2, name: "Fizika", icon: "fas fa-atom", price: "350,000", period: "to'lov", desc: "Mexanika, termodinamika, elektromagnetizm" },
            { id: 3, name: "Kimyo", icon: "fas fa-vial", price: "400,000", period: "to'lov", desc: "Organik, noorganik, fizik kimyo" },
            { id: 4, name: "Ingliz tili", icon: "fas fa-language", price: "400,000", period: "to'lov", desc: "Grammatika, nutq, yozuv" },
            { id: 5, name: "Dasturlash", icon: "fas fa-code", price: "700,000", period: "to'lov", desc: "JavaScript, Python, Web dasturlash" },
            { id: 6, name: "Biologiya", icon: "fas fa-dna", price: "400,000", period: "to'lov", desc: "Anatomiya, genetika, ekologiya" },
            { id: 7, name: "Tarix", icon: "fas fa-landmark", price: "200,000", period: "to'lov", desc: "Jahon tarixi, O'zbekiston tarixi" },
            { id: 9, name: "Rus tili", icon: "fas fa-book", price: "100,000", period: "to'lov", desc: "Grammatika, nutq, yozuv" }
        ];

        const tutors = [
            { id: 1, name: "Azizbek Ismoilov", subject: "Matematika", rating: 4.9, price: "300,000", exp: "5 yil", desc: "Matematikadan oliy ma'lumotli ", telegram: "@azizbek_math", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { id: 2, name: "Sevara Karimova", subject: "Ingliz tili", rating: 4.8, price: "400,000", exp: "7 yil", desc: "IELTS 8.5 sohibasi, tajribali o'qituvchi", telegram: "@sevara_english", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { id: 3, name: "Javohir Rustamov", subject: "Dasturlash", rating: 4.9, price: "700,000", exp: "6 yil", desc: "Senior dasturchi, 10+ loyiha tajribasi", telegram: "@javohir_dev", img: "https://randomuser.me/api/portraits/men/67.jpg" },
            { id: 4, name: "Dilnoza Xolmirzayeva", subject: "Fizika", rating: 4.7, price: "350,000", exp: "4 yil", desc: "Fizika Fani ustozi, universitet o'qituvchisi", telegram: "@dilnoza_physics", img: "https://randomuser.me/api/portraits/women/68.jpg" },
            { id: 5, name: "Farhod Abdullayev", subject: "Kimyo", rating: 4.8, price: "400,000", exp: "8 yil", desc: "Kimyo fanlari doktori, 100+ o'quvchi", telegram: "@farhod_chemistry", img: "https://randomuser.me/api/portraits/men/75.jpg" },
            { id: 6, name: "Madina Yusupova", subject: "Biologiya", rating: 4.6, price: "400,000", exp: "5 yil", desc: "Tibbiyot universiteti o'qituvchisi", telegram: "@madina_biology", img: "https://randomuser.me/api/portraits/women/26.jpg"   },
            { id: 7, name: "Bekzod Xo'jayev", subject: "Tarix", rating: 4.5, price: "200,000", exp: "10 yil", desc: "Tarix fani ustoz, 3 ta kitob muallifi", telegram: "@bekzod_history", img: "https://randomuser.me/api/portraits/men/55.jpg" },
            { id: 8, name: "Zarina Qodirova", subject: "Rus tili", rating: 4.7, price: "100,000", exp: "6 yil", desc: "Rus tili mutaxassisi, tarjimon", telegram: "@zarina_russian", img: "https://randomuser.me/api/portraits/women/33.jpg" }
        ];

        // DOM elementlari
        const subjectsGrid = document.getElementById('subjectsGrid');
        const tutorsGrid = document.getElementById('tutorsGrid');
        const authModal = document.getElementById('authModal');
        const bookingModal = document.getElementById('bookingModal');
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const closeAuth = document.getElementById('closeAuth');
        const closeBooking = document.getElementById('closeBooking');
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const authTabs = document.querySelectorAll('.auth-tab');
        const authForms = document.querySelectorAll('.auth-form');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const bookingForm = document.getElementById('bookingForm');
        const headerButtons = document.getElementById('headerButtons');

        // Foydalanuvchi ma'lumotlari
        let currentUser = null;

        // Fanlarni chiqarish
        function loadSubjects() {
            subjectsGrid.innerHTML = '';

            subjects.forEach(subject => {
                const card = document.createElement('div');
                card.className = 'subject-card fade-in';
                card.innerHTML = `
                    <div class="subject-icon">
                        <i class="${subject.icon}"></i>
                    </div>
                    <h3 class="subject-title">${subject.name}</h3>
                    <p class="subject-desc">${subject.desc}</p>
                    <div class="subject-price">${subject.price} UZS</div>
                    <div class="subject-period">${subject.period}</div>
                `;

                card.addEventListener('click', () => {
                    openBookingModal();
                    document.getElementById('bookingSubject').value = subject.name;
                });

                subjectsGrid.appendChild(card);
            });
        }

        // Repetitorlarni chiqarish
        function loadTutors() {
            tutorsGrid.innerHTML = '';

            tutors.forEach(tutor => {
                const card = document.createElement('div');
                card.className = 'tutor-card fade-in';
                card.innerHTML = `
                    <div class="tutor-header">
                        <div class="tutor-avatar">
                            <img src="${tutor.img}" alt="${tutor.name}">
                        </div>
                        <h3 class="tutor-name">${tutor.name}</h3>
                        <div class="tutor-subject">${tutor.subject}</div>
                        <div class="tutor-rating">
                            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(tutor.rating))}
                            <span>${tutor.rating}/5</span>
                        </div>
                    </div>
                    <div class="tutor-body">
                        <div class="tutor-info">
                            <div class="info-item">
                                <i class="fas fa-briefcase"></i>
                                <span>Tajriba: ${tutor.exp}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span>${tutor.desc}</span>
                            </div>
                            <div class="info-item">
                                <i class="fab fa-telegram"></i>
                                <span>Telegram: ${tutor.telegram}</span>
                            </div>
                        </div>
                        <div class="tutor-price">
                            <div class="price-amount">${tutor.price} UZS</div>
                            <div class="price-period">soatiga</div>
                        </div>
                        <div class="tutor-actions">
                            <button class="btn btn-outline telegram-btn" data-telegram="${tutor.telegram}">
                                <i class="fab fa-telegram"></i> Telegram
                            </button>
                            <button class="btn btn-primary book-btn" data-tutor-id="${tutor.id}">
                                <i class="fas fa-calendar-plus"></i> Bron qilish
                            </button>
                        </div>
                    </div>
                `;

                tutorsGrid.appendChild(card);
            });

            // Telegram tugmalariga event listener qo'shish
            document.querySelectorAll('.telegram-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const telegram = this.getAttribute('data-telegram');
                    window.open(`https://t.me/${telegram.substring(1)}`, '_blank');
                });
            });

            // Bron qilish tugmalariga event listener qo'shish
            document.querySelectorAll('.book-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    if (!currentUser) {
                        openAuthModal('login');
                        return;
                    }

                    const tutorId = this.getAttribute('data-tutor-id');
                    openBookingModal();

                    const tutor = tutors.find(t => t.id == tutorId);
                    if (tutor) {
                        document.getElementById('bookingTutor').value = tutor.name;
                        document.getElementById('bookingSubject').value = tutor.subject;
                    }
                });
            });
        }

        // Auth modalini ochish
        function openAuthModal(tab = 'login') {
            authModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Tanlangan tabni ko'rsatish
            authTabs.forEach(t => t.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));

            if (tab === 'login') {
                document.querySelector('[data-tab="login"]').classList.add('active');
                loginForm.classList.add('active');
            } else {
                document.querySelector('[data-tab="register"]').classList.add('active');
                registerForm.classList.add('active');
            }
        }

        // Auth modalini yopish
        function closeAuthModal() {
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Booking modalini ochish
        function openBookingModal() {
            if (!currentUser) {
                openAuthModal('login');
                return;
            }

            bookingModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Bugungi sanani o'rnatish
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('bookingDate').min = today;
            document.getElementById('bookingDate').value = today;
        }

        // Booking modalini yopish
        function closeBookingModal() {
            bookingModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Foydalanuvchini yangilash
        function updateUserUI() {
            if (currentUser) {
                headerButtons.innerHTML = `
                    <div class="user-profile" id="userProfile">
                        <div class="user-avatar">${currentUser.name.charAt(0)}</div>
                        <div class="user-name">${currentUser.name}</div>
                    </div>
                `;

                // Profilga klik qilganda
                document.getElementById('userProfile').addEventListener('click', function() {
                    alert(`Xush kelibsiz, ${currentUser.name}!\nEmail: ${currentUser.email}\nTelefon: ${currentUser.phone}`);
                });
            } else {
                headerButtons.innerHTML = `
                    <button class="btn btn-outline" id="loginBtn">Kirish</button>
                    <button class="btn btn-primary" id="registerBtn">Ro'yxatdan o'tish</button>
                `;

                // Yangi tugmalarga event listener qo'shish
                document.getElementById('loginBtn').addEventListener('click', () => openAuthModal('login'));
                document.getElementById('registerBtn').addEventListener('click', () => openAuthModal('register'));
            }
        }

        // Form selectlarini to'ldirish
        function populateFormSelects() {
            const subjectSelect = document.getElementById('bookingSubject');
            const tutorSelect = document.getElementById('bookingTutor');

            // Fanlarni qo'shish
            subjects.forEach(subject => {
                const option = document.createElement('option');
                option.value = subject.name;
                option.textContent = subject.name;
                subjectSelect.appendChild(option);
            });

            // Repetitorlarni qo'shish
            tutors.forEach(tutor => {
                const option = document.createElement('option');
                option.value = tutor.name;
                option.textContent = `${tutor.name} - ${tutor.subject}`;
                tutorSelect.appendChild(option);
            });
        }

        // Dasturni ishga tushirish
        function init() {
            loadSubjects();
            loadTutors();
            populateFormSelects();
            updateUserUI();

            // Event listenerlar
            loginBtn.addEventListener('click', () => openAuthModal('login'));
            registerBtn.addEventListener('click', () => openAuthModal('register'));
            closeAuth.addEventListener('click', closeAuthModal);
            closeBooking.addEventListener('click', closeBookingModal);
            menuToggle.addEventListener('click', () => {
                mobileNav.classList.toggle('active');
            });

            // Modal tashqarisiga bosilganda yopish
            window.addEventListener('click', (e) => {
                if (e.target === authModal) closeAuthModal();
                if (e.target === bookingModal) closeBookingModal();
            });

            // Auth tablarini almashtirish
            authTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const tabName = this.getAttribute('data-tab');

                    authTabs.forEach(t => t.classList.remove('active'));
                    authForms.forEach(f => f.classList.remove('active'));

                    this.classList.add('active');
                    document.getElementById(`${tabName}Form`).classList.add('active');
                });
            });

            // Login formasi
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;

                // Demo foydalanuvchi
                currentUser = {
                    name: "Azizbek Ismoilov",
                    email: email,
                    phone: "+998901234567"
                };

                alert('Muvaffaqiyatli kirdingiz!');
                closeAuthModal();
                updateUserUI();
                this.reset();
            });

            // Register formasi
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = document.getElementById('registerName').value;
                const email = document.getElementById('registerEmail').value;
                const phone = document.getElementById('registerPhone').value;
                const password = document.getElementById('registerPassword').value;

                // Demo foydalanuvchi
                currentUser = {
                    name: name,
                    email: email,
                    phone: phone
                };

                alert('Ro\'yxatdan muvaffaqiyatli o\'tdingiz!');
                closeAuthModal();
                updateUserUI();
                this.reset();
            });

            // Booking formasi
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const name = document.getElementById('bookingName').value;
                const phone = document.getElementById('bookingPhone').value;
                const subject = document.getElementById('bookingSubject').value;
                const tutor = document.getElementById('bookingTutor').value;
                const date = document.getElementById('bookingDate').value;
                const time = document.getElementById('bookingTime').value;

                // Telegram botga yuborish demo
                const telegramMessage = `Yangi bron:\nIsm: ${name}\nTelefon: ${phone}\nFan: ${subject}\nRepetitor: ${tutor}\nSana: ${date}\nVaqt: ${time}`;

                alert(`Bron qilindi!\n${tutor} repetitori siz bilan ${date} kuni ${time} da bog'lanadi.\n\nTelegram botga yuborilgan xabar:\n${telegramMessage}`);

                closeBookingModal();
                this.reset();
            });

            // Mobile nav linklariga event listener
            document.querySelectorAll('.mobile-nav a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileNav.classList.remove('active');
                });
            });

            // Scroll animatsiyalari
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);

            // Barcha cardlarni kuzatish
            document.querySelectorAll('.subject-card, .tutor-card').forEach(card => {
                observer.observe(card);
            });
        }

        // DOM yuklanganda dasturni ishga tushirish
        document.addEventListener('DOMContentLoaded', init);

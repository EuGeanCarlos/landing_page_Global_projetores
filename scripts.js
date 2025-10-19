// ==========================================================================
// CARRROSSEL DE PRODUTOS
// ==========================================================================

const products = [
    {
        title:'Infocus SP2236ST',
        brightness:'4300 ANSI',
        type:'Lâmpada',
        res:'XGA',
        short:'Custo-benefício excelente.',
        img:'img/projetores-carrossel/SP2236ST_M1.jpeg',
        link:'https://www.globalprojetores.com.br/projetor-infocus-sp2236st'
    },
    {
        title:'ViewSonic LS711HD',
        brightness:'4200 ANSI',
        type:'Laser',
        res:'Full HD',
        short:'Qualidade de imagem e durabilidade.',
        img:'img/projetores-carrossel/LS711HD_M1.jpeg',
        link:'https://www.globalprojetores.com.br/projetor-viewsonic-ls711hd'
    },
    {
        title:'BenQ LU935ST',
        brightness:'5500 ANSI',
        type:'Laser',
        res:'WUXGA',
        short:'Alta performance em ambientes iluminados.',
        img:'img/projetores-carrossel/LU935ST_M1.jpeg',
        link:'https://www.globalprojetores.com.br/projetor-benq-lu935st'
    },
    {
        title:'ViewSonic PS502WST',
        brightness:'4000 ANSI',
        type:'Lâmpada',
        res:'WXGA',
        short:'Boa opção econômica.',
        img:'img/projetores-carrossel/ViewSonic_PS502WST_M1.jpeg',
        link:'https://www.globalprojetores.com.br/projetor-viewsonic-ps502wst--4000--curta-distancia'
    },
    {
        title:'ViewSonic LS740W',
        brightness:'5000 ANSI',
        type:'Laser',
        res:'WUXGA',
        short:'Ótima para templos médios e grandes.',
        img:'img/projetores-carrossel/LS740W_M1.jpeg',
        link:'https://www.globalprojetores.com.br/projetor-viewsonic-ls740w'
    }
];

const track = document.getElementById('carouselTrack'); 
const dots = document.getElementById('carouselDots');
let currentSlide = 0;
let carouselInterval;

function renderCarousel() {
    if (!track || !dots) return;
    
    track.innerHTML = '';
    dots.innerHTML = '';
    
    products.forEach((p, i) => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.title}" loading="lazy">
            <h3>${p.title}</h3>
            <p>${p.short}</p>
            <p><b>${p.brightness}</b> • ${p.type} • ${p.res}</p>
            <a href="${p.link}" target="_blank">Saiba mais</a>
        `;
        track.appendChild(div);

        const dot = document.createElement('button');
        dot.addEventListener('click', () => goToSlide(i));
        dots.appendChild(dot);
    });
    updateCarousel();
}

function updateCarousel() {
    if (!track) return;
    
    const itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;
    const maxSlide = Math.max(0, products.length - itemsPerView);
    currentSlide = Math.min(currentSlide, maxSlide);
    
    track.style.transform = `translateX(-${currentSlide * (100 / itemsPerView)}%)`;
    
    if (dots && dots.children) {
        [...dots.children].forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }
}

function moveSlide(dir) {
    const itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;
    const maxSlide = Math.max(0, products.length - itemsPerView);
    currentSlide = Math.min(Math.max(currentSlide + dir, 0), maxSlide);
    updateCarousel();
}

function goToSlide(i) {
    currentSlide = i;
    updateCarousel();
}

function startCarouselAutoPlay() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => { 
        moveSlide(1) 
    }, 5000);
}

// ==========================================================================
// GALERIAS INTERATIVAS
// ==========================================================================

function initInteractiveGalleries() {
    const galleries = document.querySelectorAll('.gallery-container');
    
    if (galleries.length === 0) {
        console.log('Nenhuma galeria encontrada');
        return;
    }
    
    galleries.forEach((gallery, index) => {
        const mainImage = gallery.querySelector('.main-image');
        const zoomArea = gallery.querySelector('.zoom-area');
        const thumbs = gallery.querySelectorAll('.thumb');
        const thumbScroll = gallery.querySelector('.thumb-scroll');
        const prevBtn = gallery.querySelector('.prev-thumb');
        const nextBtn = gallery.querySelector('.next-thumb');
        
        if (!mainImage) {
            console.log('Imagem principal não encontrada na galeria', index);
            return;
        }
        
        let currentThumbIndex = 0;
        const thumbWidth = 68;
        
        // Trocar imagem principal ao clicar nas thumbnails
        thumbs.forEach((thumb, thumbIndex) => {
            thumb.addEventListener('click', function() {
                const newImage = this.getAttribute('data-image');
                if (newImage) {
                    mainImage.src = newImage;
                    mainImage.alt = this.alt;
                    
                    // Atualizar thumbnails ativas
                    thumbs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    currentThumbIndex = thumbIndex;
                    updateThumbScroll();
                }
            });
        });
        
        // Navegação das thumbnails
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentThumbIndex > 0) {
                    currentThumbIndex--;
                    updateThumbScroll();
                    if (thumbs[currentThumbIndex]) {
                        thumbs[currentThumbIndex].click();
                    }
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentThumbIndex < thumbs.length - 1) {
                    currentThumbIndex++;
                    updateThumbScroll();
                    if (thumbs[currentThumbIndex]) {
                        thumbs[currentThumbIndex].click();
                    }
                }
            });
        }
        
        function updateThumbScroll() {
            if (thumbScroll) {
                const scrollPosition = currentThumbIndex * thumbWidth;
                thumbScroll.style.transform = `translateX(-${scrollPosition}px)`;
            }
        }
        
        // Efeito de zoom ao passar o mouse
        if (mainImage && zoomArea) {
            mainImage.addEventListener('mousemove', function(e) {
                if (window.innerWidth < 768) return;
                
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const zoomX = x - 75;
                const zoomY = y - 75;
                
                const maxX = rect.width - 150;
                const maxY = rect.height - 150;
                
                zoomArea.style.left = Math.max(0, Math.min(zoomX, maxX)) + 'px';
                zoomArea.style.top = Math.max(0, Math.min(zoomY, maxY)) + 'px';
                zoomArea.style.opacity = '1';
            });
            
            mainImage.addEventListener('mouseleave', function() {
                zoomArea.style.opacity = '0';
            });
        }
        
        // Inicializar scroll das thumbnails
        updateThumbScroll();
    });
}

// ==========================================================================
// FUNÇÕES GERAIS
// ==========================================================================

function initTableComparativo() {
    const tbody = document.getElementById('tableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.title}</td>
            <td>${p.brightness}</td>
            <td>${p.type}</td>
            <td>${p.res}</td>
            <td>${p.short}</td>
        `;
        tbody.appendChild(tr);
    });
}

function initAccordionFAQ() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', () => {
                // Fecha todos os outros itens
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Alterna o item clicado
                item.classList.toggle('active');
            });
        }
    });
}

function initSmoothScroll() {
    const productLinks = document.querySelectorAll('nav a[href^="#"]');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
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

function initWhatsAppButton() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://api.whatsapp.com/send?phone=551126263889', '_blank');
        });
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const formMessage = document.getElementById('formMessage');
            if (formMessage) {
                formMessage.style.display = 'block';
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 2000);
            }
        });
    }
}

// ==========================================================================
// INICIALIZAÇÃO GERAL
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Inicializando aplicação...');
    
    // Inicializar componentes
    renderCarousel();
    startCarouselAutoPlay();
    initInteractiveGalleries();
    initTableComparativo();
    initAccordionFAQ();
    initSmoothScroll();
    initWhatsAppButton();
    initContactForm();
    
    // Atualizar ano no footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Otimizar resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCarousel();
            initInteractiveGalleries();
        }, 250);
    });
    
    // Pausar carousel quando a página não está visível
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (carouselInterval) clearInterval(carouselInterval);
        } else {
            startCarouselAutoPlay();
        }
    });
});

// ==========================================================================
// FALLBACKS E COMPATIBILIDADE
// ==========================================================================

// Fallback para navegadores antigos
if (!Element.prototype.classList) {
    // Polyfill simples para classList
    Object.defineProperty(Element.prototype, 'classList', {
        get: function() {
            return {
                contains: function(className) {
                    return this.className.split(' ').indexOf(className) > -1;
                }.bind(this),
                add: function(className) {
                    var classes = this.className.split(' ');
                    if (classes.indexOf(className) === -1) {
                        classes.push(className);
                        this.className = classes.join(' ');
                    }
                }.bind(this),
                remove: function(className) {
                    var classes = this.className.split(' ');
                    var index = classes.indexOf(className);
                    if (index > -1) {
                        classes.splice(index, 1);
                        this.className = classes.join(' ');
                    }
                }.bind(this),
                toggle: function(className) {
                    if (this.classList.contains(className)) {
                        this.classList.remove(className);
                    } else {
                        this.classList.add(className);
                    }
                }.bind(this)
            };
        }
    });
}
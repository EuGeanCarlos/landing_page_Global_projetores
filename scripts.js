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

function renderCarousel() {
  products.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'carousel-item';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
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
  const itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;
  track.style.transform = `translateX(-${currentSlide * (100 / itemsPerView)}%)`;
  [...dots.children].forEach((d,i)=>d.classList.toggle('active', i === currentSlide));
}

function moveSlide(dir) {
  const itemsPerView = window.innerWidth <= 600 ? 1 : window.innerWidth <= 992 ? 2 : 3;
  const maxSlide = products.length - itemsPerView;
  currentSlide = Math.min(Math.max(currentSlide + dir, 0), maxSlide);
  updateCarousel();
}

function goToSlide(i) {
  currentSlide = i;
  updateCarousel();
}

window.addEventListener('resize', updateCarousel);

setInterval(() => { moveSlide(1) }, 5000);

renderCarousel();


// Tabela comparativa
const tbody=document.getElementById('tableBody');
products.forEach(p=>{
  const tr=document.createElement('tr');
  tr.innerHTML=`<td>${p.title}</td><td>${p.brightness}</td><td>${p.type}</td><td>${p.res}</td><td>${p.short}</td>`;
  tbody.appendChild(tr);
});

// Ano atual
document.getElementById('year').textContent=new Date().getFullYear();

//faq Ancora

 document.addEventListener('DOMContentLoaded', function() {
            const accordionItems = document.querySelectorAll('.accordion-item');
            
            accordionItems.forEach(item => {
                const header = item.querySelector('.accordion-header');
                
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
            });
        });

// Formulário
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formMessage').style.display='block';
  setTimeout(()=>{document.getElementById('formMessage').style.display='none';},2000);
});

// Galeria de Imagens dos Produtos
function initProductGalleries() {
    const galleries = document.querySelectorAll('.product-gallery');
    
    galleries.forEach(gallery => {
        const mainImg = gallery.querySelector('.gallery-main img');
        const thumbnails = gallery.querySelectorAll('.gallery-thumbs img');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Atualiza imagem principal
                mainImg.src = this.src;
                mainImg.alt = this.alt;
                
                // Remove classe active de todas as thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                // Adiciona classe active na thumbnail clicada
                this.classList.add('active');
            });
          });
        });
}

// Galeria Interativa - Zoom e Navegação
function initInteractiveGalleries() {
    const galleries = document.querySelectorAll('.gallery-container');
    
    galleries.forEach((gallery, index) => {
        const mainImage = gallery.querySelector('.gallery-main img');
        const zoomArea = gallery.querySelector('.zoom-area');
        const thumbs = gallery.querySelectorAll('.thumb');
        const thumbScroll = gallery.querySelector('.thumb-scroll');
        const prevBtn = gallery.querySelector('.prev-thumb');
        const nextBtn = gallery.querySelector('.next-thumb');
        
        let currentThumbIndex = 0;
        const thumbWidth = 68; // 60px + 8px gap
        
        // Trocar imagem principal ao clicar nas thumbnails
        thumbs.forEach((thumb, thumbIndex) => {
            thumb.addEventListener('click', function() {
                const newImage = this.getAttribute('data-image');
                mainImage.src = newImage;
                
                // Atualizar thumbnails ativas
                thumbs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                currentThumbIndex = thumbIndex;
                updateThumbScroll();
            });
        });
        
        // Navegação das thumbnails
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentThumbIndex > 0) {
                    currentThumbIndex--;
                    updateThumbScroll();
                    thumbs[currentThumbIndex].click();
                }
            });
            
            nextBtn.addEventListener('click', () => {
                if (currentThumbIndex < thumbs.length - 1) {
                    currentThumbIndex++;
                    updateThumbScroll();
                    thumbs[currentThumbIndex].click();
                }
            });
        }
        
        function updateThumbScroll() {
            const scrollPosition = currentThumbIndex * thumbWidth;
            thumbScroll.style.transform = `translateX(-${scrollPosition}px)`;
        }
        
        // Efeito de zoom ao passar o mouse
        if (mainImage && zoomArea) {
            mainImage.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Posicionar a área de zoom
                const zoomX = x - 75; // Metade da largura da área de zoom
                const zoomY = y - 75; // Metade da altura da área de zoom
                
                // Manter dentro dos limites
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
        
        // Zoom real (opcional - mais avançado)
        initRealZoom(gallery, mainImage, index);
    });
}

// Zoom real com imagem ampliada
function initRealZoom(gallery, mainImage, index) {
    let zoomResult = document.getElementById(`zoomResult${index}`);
    
    if (!zoomResult) {
        zoomResult = document.createElement('div');
        zoomResult.className = 'zoom-result';
        zoomResult.id = `zoomResult${index}`;
        document.body.appendChild(zoomResult);
    }
    
    const zoomImg = document.createElement('img');
    zoomResult.appendChild(zoomImg);
    
    mainImage.addEventListener('mousemove', function(e) {
        if (window.innerWidth < 768) return; // Desativar zoom em mobile
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calcular posição do zoom
        const zoomX = (x / this.offsetWidth) * 100;
        const zoomY = (y / this.offsetHeight) * 100;
        
        // Configurar imagem ampliada
        zoomImg.src = this.src;
        zoomImg.style.transform = `scale(2)`;
        zoomImg.style.transformOrigin = `${zoomX}% ${zoomY}%`;
        
        // Posicionar resultado do zoom
        zoomResult.style.left = (e.clientX + 20) + 'px';
        zoomResult.style.top = (e.clientY + 20) + 'px';
        zoomResult.classList.add('active');
    });
    
    mainImage.addEventListener('mouseleave', function() {
        zoomResult.classList.remove('active');
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initInteractiveGalleries();
    
    // Adicionar smooth scroll para as seções dos produtos
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
});

// WhatsApp Button
document.getElementById('whatsapp-btn').addEventListener('click',()=>{
  window.open('https://api.whatsapp.com/send?phone=551126263889','_blank');
});

 // Carrega a animação
   lottie.loadAnimation({
      container: document.getElementById('whatsapp-btn'), // onde vai aparecer
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'whatsapp-loop.json' // caminho do arquivo JSON
    });

    // Exemplo: abrir link do WhatsApp ao clicar
    document.getElementById('whatsapp-btn').addEventListener('click', () => {
      window.open("https://wa.me/5511999999999", "_blank"); 
    });

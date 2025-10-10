const products=[
  {title:'Infocus SP2236ST',brightness:'4300 ANSI',type:'Lâmpada',res:'XGA',short:'Custo-benefício excelente.'},
  {title:'ViewSonic LS711HD',brightness:'4200 ANSI',type:'Laser',res:'Full HD',short:'Qualidade de imagem e durabilidade.'},
  {title:'BenQ LU935ST',brightness:'5500 ANSI',type:'Laser',res:'WUXGA',short:'Alta performance em ambientes iluminados.'},
  {title:'ViewSonic PS502WST',brightness:'4000 ANSI',type:'Lâmpada',res:'WXGA',short:'Boa opção econômica.'},
  {title:'ViewSonic LS740W',brightness:'5000 ANSI',type:'Laser',res:'WUXGA',short:'Ótima para templos médios e grandes.'}
];

// Carrossel
const track=document.getElementById('carouselTrack'); 
const dots=document.getElementById('carouselDots');
let currentSlide=0;

function renderCarousel(){
  products.forEach((p,i)=>{
    const div=document.createElement('div');
    div.className='carousel-item';
    div.innerHTML=`<h3>${p.title}</h3><p>${p.short}</p><p><b>${p.brightness}</b> • ${p.type} • ${p.res}</p>`;
    track.appendChild(div);

    const dot=document.createElement('button');
    dot.addEventListener('click',()=>goToSlide(i));
    dots.appendChild(dot);
  });
  updateCarousel();
}

function updateCarousel(){
  track.style.transform=`translateX(-${currentSlide*100}%)`;
  [...dots.children].forEach((d,i)=>d.classList.toggle('active',i===currentSlide));
}

function moveSlide(dir){
  currentSlide=(currentSlide+dir+products.length)%products.length;
  updateCarousel();
}

function goToSlide(i){
  currentSlide=i;
  updateCarousel();
}

setInterval(()=>{moveSlide(1)},5000);

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

// Formulário
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formMessage').style.display='block';
  setTimeout(()=>{document.getElementById('formMessage').style.display='none';},2000);
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

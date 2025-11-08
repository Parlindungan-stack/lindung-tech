document.addEventListener('DOMContentLoaded', function(){
  // small i18n map
  const i18n = {
    id: { tagline: "Merancang Mimpi, Membangun Masa Depan.", subtag: "Perjalanan menuju teknik sipil dimulai dari langkah kecil — selamat datang di portofolioku.", btn_about:"About Me", btn_calc:"Kalkulator Teknik", btn_journey:"Roadmap", f1:"Profesional", f1d:"Desain rapi dan berjiwa teknik.", f2:"Interaktif", f2d:"Kalkulator & roadmap untuk praktik cepat.", f3:"Future-ready", f3d:"Siap untuk di-deploy ke GitHub Pages." },
    en: { tagline: "Designing Dreams, Building the Future.", subtag: "A student's journey toward civil engineering begins with small steps — welcome.", btn_about:"About Me", btn_calc:"Engineering Calculator", btn_journey:"Roadmap", f1:"Professional", f1d:"Clean design with engineered aesthetics.", f2:"Interactive", f2d:"Calculator & roadmap for practical learning.", f3:"Future-ready", f3d:"Ready for GitHub Pages deployment." }
  };
  let lang='id';
  function applyLang(){ document.querySelectorAll('[data-i18n]').forEach(el=>{ const key=el.getAttribute('data-i18n'); if(i18n[lang] && i18n[lang][key]) el.innerText = i18n[lang][key]; }); }
  applyLang();
  document.getElementById('lang-toggle')?.addEventListener('click', ()=>{ lang = (lang==='id')? 'en':'id'; applyLang(); });

  // year
  const y=new Date().getFullYear(); document.getElementById('year') && (document.getElementById('year').innerText=y);

  // scroll reveal
  const obs = new IntersectionObserver((entries)=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); }); }, {threshold:0.12});
  document.querySelectorAll('[data-anim]').forEach(el=>obs.observe(el));

  // calc button
  document.getElementById('vol-btn')?.addEventListener('click', ()=>{
    const L=parseFloat(document.getElementById('length').value)||0;
    const W=parseFloat(document.getElementById('width').value)||0;
    const H=parseFloat(document.getElementById('height').value)||0;
    document.getElementById('vol-res').innerText = 'Volume beton: '+(L*W*H).toFixed(3)+' m³';
  });

  // simple hero parallax
  const heroImg = document.querySelector('.hero-decor img');
  if(heroImg){ window.addEventListener('mousemove',(e)=>{ const x=(e.clientX/window.innerWidth-0.5)*6; const y=(e.clientY/window.innerHeight-0.5)*6; heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.01)`; }); }
});
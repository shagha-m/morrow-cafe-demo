// Tiny, dependency-free interaction layer. All page content remains readable without JS.
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function closeMenu(){nav?.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Open navigation')}
toggle?.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');nav.classList.toggle('open',!expanded)});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});

const progress=document.querySelector('.scroll-progress');
let progressQueued=false;
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${total>0?Math.min(1,scrollY/total):0})`;progressQueued=false}
addEventListener('scroll',()=>{if(!progressQueued){requestAnimationFrame(updateProgress);progressQueued=true}},{passive:true});
addEventListener('resize',updateProgress,{passive:true});updateProgress();

if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const targets=document.querySelectorAll('.intro-grid > *, .feature-copy > :not(.feature-doodle), .section-heading, .favorite-card, .quote-inner, .visit-grid > *, .story-grid > *, .values-grid > *, .menu-heading, .menu-list, .menu-photo, .contact-grid > *, .map-heading');
  const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px 30px 0px'});
  targets.forEach(el=>{el.classList.add('reveal');observer.observe(el)});
  document.documentElement.classList.add('motion-ready');
}

const toast=document.querySelector('.toast');let timer;
document.querySelectorAll('[data-demo-whatsapp]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();toast.textContent='Portfolio demo: add the café’s WhatsApp number before publishing.';toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),4000)}));

// The 3D effect is opt-in: fine pointer only, viewport-observed, and disabled for reduced motion.
const cinemaStage=document.querySelector('.cinema-stage');
if(cinemaStage && 'IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>{if(entries[0].isIntersecting){cinemaStage.classList.add('cinema-visible');observer.disconnect()}},{threshold:.18});
  observer.observe(cinemaStage);
  if(matchMedia('(hover: hover) and (pointer: fine)').matches){
    let frame=0;
    cinemaStage.addEventListener('pointermove',e=>{
      if(frame)return;
      const rect=cinemaStage.getBoundingClientRect();
      const x=(e.clientX-rect.left)/rect.width-.5;
      const y=(e.clientY-rect.top)/rect.height-.5;
      frame=requestAnimationFrame(()=>{cinemaStage.style.setProperty('--tilt-x',`${(-y*9).toFixed(2)}deg`);cinemaStage.style.setProperty('--tilt-y',`${(x*9).toFixed(2)}deg`);frame=0});
    },{passive:true});
    cinemaStage.addEventListener('pointerleave',()=>{cinemaStage.style.removeProperty('--tilt-x');cinemaStage.style.removeProperty('--tilt-y')});
  }
}

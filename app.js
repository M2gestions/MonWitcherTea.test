const pages=[...document.querySelectorAll('[data-page]')];
function fireflies(){
 document.querySelectorAll('.fireflies').forEach(box=>{
   if(box.children.length) return;
   for(let i=0;i<22;i++){
     const f=document.createElement('i');
     f.style.left=(3+Math.random()*94)+'%'; f.style.top=(8+Math.random()*84)+'%';
     f.style.setProperty('--d',(3.5+Math.random()*5)+'s');
     f.style.setProperty('--x',(-25+Math.random()*50)+'px');
     f.style.setProperty('--y',(-35+Math.random()*55)+'px');
     f.style.animationDelay=(-Math.random()*6)+'s'; box.appendChild(f);
   }
 });
}
function go(name){
 pages.forEach(p=>p.classList.toggle('active',p.dataset.page===name));
 document.body.classList.toggle('on-facade',name==='facade');
 document.body.classList.toggle('on-boutique',name==='boutique');
 if(name==='histoire')requestAnimationFrame(()=>{if(document.querySelector('[data-page="histoire"]').classList.contains('active')){aboutPaginate();aboutRender()}});
}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));
document.body.classList.add('on-facade'); fireflies();

const teas=document.getElementById('teas'),cart=document.getElementById('cart'),veil=document.getElementById('veil');
document.getElementById('showTeas').onclick=()=>{teas.classList.add('open');veil.classList.add('show')};
document.getElementById('closeTeas').onclick=()=>{teas.classList.remove('open');veil.classList.remove('show')};
let basket=[];
function render(){document.getElementById('count').textContent=basket.length;document.getElementById('items').innerHTML=basket.length?basket.map((x,i)=>`<div class="line"><span>${x}</span><button onclick="removeItem(${i})">retirer</button></div>`).join(''):'Ton panier est vide.'}
window.removeItem=i=>{basket.splice(i,1);render()};
document.querySelectorAll('.add').forEach(b=>b.onclick=()=>{basket.push(b.dataset.p);render();teas.classList.remove('open');cart.classList.add('open');veil.classList.add('show')});
document.querySelector('.cartBtn').onclick=()=>{cart.classList.add('open');veil.classList.add('show')};

document.getElementById('closeCart').onclick=veil.onclick=()=>{cart.classList.remove('open');teas.classList.remove('open');veil.classList.remove('show')};render();

document.querySelector('.i-cart')?.addEventListener('click',()=>{cart.classList.add('open');veil.classList.add('show')});

// Actions des icônes peintes de la page Potions (aucun bouton visible ajouté).
document.querySelector('.potion-cart')?.addEventListener('click',()=>{cart.classList.add('open');veil.classList.add('show')});
document.querySelector('.potion-search')?.addEventListener('click',()=>{const q=prompt('Rechercher dans Mon WitcherTea :');if(q!==null&&q.trim())alert('La recherche sera disponible lors de la mise en place du catalogue.');});
document.querySelector('.potion-account')?.addEventListener('click',()=>{alert('L’espace membre sera disponible prochainement.');});

// Commandes de la barre commune. Recherche et compte : aperçus non connectés.
document.querySelector('.nav-bag')?.addEventListener('click',()=>document.querySelector('.cartBtn').click());
document.querySelector('.nav-search')?.addEventListener('click',()=>{const q=prompt('Rechercher dans Mon WitcherTea :');if(q?.trim())alert('Recherche disponible prochainement avec le catalogue.');});
document.querySelector('.nav-account')?.addEventListener('click',()=>alert('Espace membre disponible prochainement.'));
// Disparition douce seulement si une page défile réellement.
let previousScroll=0;
window.addEventListener('scroll',()=>{const current=window.scrollY;document.getElementById('siteHeader')?.classList.toggle('is-hidden',current>previousScroll+5&&current>85);if(Math.abs(current-previousScroll)>5)previousScroll=current;},{passive:true});

// Les deux commandes dessinées dans l'illustration des Grimoires.
const grimoirePanel=document.getElementById('grimoiresCatalogue');
document.getElementById('showGrimoires')?.addEventListener('click',()=>{grimoirePanel.classList.add('open');veil.classList.add('show')});
document.getElementById('closeGrimoires')?.addEventListener('click',()=>{grimoirePanel.classList.remove('open');veil.classList.remove('show')});
veil.addEventListener('click',()=>grimoirePanel.classList.remove('open'));

// Vestiaire : boutons transparents positionnés sur l'image validée.
const vestiairePanel=document.getElementById('vestiaireCatalogue');
document.getElementById('showVestiaire')?.addEventListener('click',()=>{vestiairePanel.classList.add('open');veil.classList.add('show')});
document.getElementById('closeVestiaire')?.addEventListener('click',()=>{vestiairePanel.classList.remove('open');veil.classList.remove('show')});
veil.addEventListener('click',()=>vestiairePanel.classList.remove('open'));

// Curiosités : mêmes interactions que les autres catégories.
const curiositesPanel=document.getElementById('curiositesCatalogue');
document.getElementById('showCuriosites')?.addEventListener('click',()=>{curiositesPanel.classList.add('open');veil.classList.add('show')});
document.getElementById('closeCuriosites')?.addEventListener('click',()=>{curiositesPanel.classList.remove('open');veil.classList.remove('show')});
veil.addEventListener('click',()=>curiositesPanel.classList.remove('open'));

// Grimoire « À propos » : textes intégraux, pagination mesurée, onglets et lecture accessible.
const aboutChapters={
 histoire:[
 ['h1','Mon WitcherTea'],['em','Éveillez la magie qui sommeille en vous.'],
 ['h2','Et si les sorcières n\'étaient pas celles que l\'on croyait ?'],
 ['p','Pendant des siècles, sorcières et sorciers ont été entourés de mystères, de craintes et de préjugés. Accusés de pratiquer des arts obscurs, certains furent persécutés, condamnés et envoyés au bûcher.'],
 ['p','Mais derrière ces légendes, qui étaient réellement ces femmes et ces hommes que l\'on appelait « sorciers » ?'],
 ['p','Et si, derrière ces figures mystérieuses, se cachaient parfois des êtres profondément connectés à la nature, dotés d\'une intuition singulière et détenteurs de savoirs précieux ?'],
 ['p','Des femmes et des hommes capables de lire les signes des saisons, de reconnaître les propriétés des plantes et de puiser dans les richesses de la terre pour élaborer ces mystérieuses préparations que l\'on nommait « potions ».'],
 ['p','Des connaissances ancestrales, transmises de génération en génération, où se mêlaient observation, intuition et traditions. Des savoirs dont certains se sont peu à peu effacés, laissant derrière eux un parfum de mystère et de magie.'],
 ['strong','Et si la magie n\'avait jamais réellement disparu ?'],
 ['p','Et si elle avait simplement été oubliée, dissimulée derrière le tumulte de nos vies modernes, attendant patiemment que nous prenions le temps de la redécouvrir ?'],
 ['h2','Le retour à l\'essentiel'],
 ['p','Aujourd\'hui, quelque chose semble se réveiller.'],
 ['p','Dans un monde où tout va toujours plus vite, le besoin de ralentir, de retrouver son équilibre et de renouer avec la nature se fait ressentir à travers les générations.'],
 ['p','Nous redécouvrons l\'importance des petits rituels, des instants de calme, de l\'écoute de soi et de cette connexion précieuse avec le vivant et les énergies.'],
 ['p','Chez Mon WitcherTea, nous croyons que la magie ne se trouve pas uniquement dans les contes et les légendes.'],
 ['p','Elle se cache dans la nature qui nous entoure, dans notre intuition, dans les rencontres qui nous transforment, dans les émotions qui nous traversent et dans ces instants où nous nous sentons profondément connectés au monde.'],
 ['h2','Et si le moment était venu de redorer le blason des sorcières ?']
 ],
 naissance:[
 ['h1','Mon WitcherTea'],['em','Éveillez la magie qui sommeille en vous.'],
 ['h2','Et si le moment était venu de redorer le blason des sorcières ?'],
 ['p','C\'est de cette envie qu\'est né Mon WitcherTea.'],
 ['p','Un univers où les sorcières ne sont plus les personnages malveillants des contes de fées, mais deviennent les gardiennes bienveillantes des trésors de la nature et des connaissances oubliées.'],
 ['p','À travers un monde féérique inspiré des sorcières d\'autrefois, de leurs potions et de leur sagesse, Mon WitcherTea vous invite à emprunter un chemin de découverte, de bien-être et d\'éveil spirituel.'],
 ['p','Un voyage où chacun est libre d\'explorer sa sensibilité, de cultiver son intuition et de découvrir sa propre manière de se connecter au monde.'],
 ['p','Sans jugement, sans croyance imposée et sans chemin tout tracé.'],
 ['p','Car nous sommes convaincus que chacun possède sa propre lumière et sa propre manière de s\'éveiller.'],
 ['h2','Nos potions, vos rituels'],
 ['p','Nos thés et infusions sont les premiers compagnons de ce voyage.'],
 ['p','Inspirées des richesses de la nature, nos six premières potions vous invitent à transformer de simples instants du quotidien en véritables rituels.'],
 ['p','Chaque mélange raconte une histoire. Chaque tasse devient un rituel. Chaque rituel, une invitation à se reconnecter à soi-même.'],
 ['p','Car la magie ne réside pas seulement dans les plantes, mais aussi dans l\'intention et le temps que l\'on accorde à ces petits instants.'],
 ['h2','Parce que les maux s\'apaisent aussi par les mots…'],
 ['p','Chez Mon WitcherTea, nous croyons que le bien-être ne se limite pas à ce que l\'on consomme. Il se nourrit également de rencontres, de découvertes, d\'échanges et de partage.'],
 ['p','C\'est pourquoi notre aventure ne s\'arrête pas au fond d\'une tasse.'],
 ['p','Nous souhaitons créer un véritable espace de rencontre et de transmission, à travers des conférences, des ateliers et des échanges autour du bien-être, de la connaissance de soi et de l\'éveil spirituel.'],
 ['p','Thérapeutes, professeurs de yoga, coachs sportifs, praticiens du bien-être, énergéticiens ou simples passionnés de la vie pourront venir partager leurs connaissances, leurs expériences et leurs visions du monde.'],
 ['p','Des espaces de discussion ouverts seront également proposés, autour de thématiques définies ou librement choisies par les participants.'],
 ['p','Des moments pour apprendre, s\'exprimer, écouter, découvrir d\'autres perspectives et, surtout, se reconnecter à l\'essentiel : soi-même et les autres.'],
 ['p','Car parfois, une simple parole, une rencontre ou une nouvelle façon de regarder le monde suffit à faire naître une étincelle.'],
 ['h2','Notre philosophie : semer le bien-être, éveiller les consciences'],
 ['p','L\'ambition de Mon WitcherTea est de contribuer, à sa manière, à un monde où chacun trouve davantage de place pour son équilibre physique, émotionnel et spirituel.'],
 ['p','Nous croyons aux petits gestes qui font de grandes différences, aux rencontres qui enrichissent, aux paroles qui réconfortent et à cette énergie positive qui se transmet lorsque les êtres humains se rassemblent autour de valeurs communes.'],
 ['p','Parce qu\'une attention peut provoquer un sourire, qu\'un sourire peut illuminer une journée et qu\'une belle énergie peut en inspirer une autre.'],
 ['p','Nous rêvons de voir ces petites étincelles de bienveillance voyager toujours plus loin.'],
 ['strong','Notre souhait n\'est pas de vous apprendre à croire en la magie, mais de vous inviter à redécouvrir celle qui existe déjà autour de vous et peut-être, au plus profond de vous-même.'],
 ['p','Mon WitcherTea n\'est pas seulement une marque. C\'est une invitation à ralentir, à ressentir, à partager, à s\'éveiller et à retrouver un peu de magie dans les choses simples de la vie.'],
 ['em','Car au fond, la plus belle des magies est peut-être celle qui nous relie les uns aux autres.'],
 ['strong','Nous sommes tous connectés. Nous sommes tous poussière d\'étoiles. ✨']
 ]
};
let aboutChapter='histoire',aboutSpread=0,aboutPages=[];
const aboutLeft=document.getElementById('aboutLeft'),aboutRight=document.getElementById('aboutRight');
function aboutElement(tag,value){const e=document.createElement(tag==='h1'?'h2':tag==='h2'?'h3':tag==='em'?'p':tag==='strong'?'p':'p');e.textContent=value;if(tag==='em')e.style.fontStyle='italic';if(tag==='strong')e.style.fontWeight='bold';if(tag==='h1')e.classList.add('book-title');return e;}
// Exactly one two-page spread per chapter. The complete original texts stay intact.
function aboutPaginate(){
 const items=aboutChapters[aboutChapter];
 const words=items.map(([tag,txt])=>({tag,words:txt.split(/\s+/)}));
 const total=words.reduce((n,item)=>n+item.words.length,0);
 const half=Math.ceil(total/2);
 const left=[],right=[];let consumed=0;
 for(const item of words){
   const leftCount=Math.max(0,Math.min(item.words.length,half-consumed));
   if(leftCount)left.push([item.tag,item.words.slice(0,leftCount).join(' ')]);
   if(leftCount<item.words.length)right.push([item.tag,item.words.slice(leftCount).join(' ')]);
   consumed+=item.words.length;
 }
 aboutPages=[left,right];aboutSpread=0;
}
function aboutFitLeaves(){
 // Font sizes are adjusted only within the printed pages, never in the illustration.
 const book=document.querySelector('.about-book');
 if(!book.getBoundingClientRect().width)return;
 const width=book.getBoundingClientRect().width;
 const base=Math.min(10,Math.max(5.2,width*.017));
 for(const leaf of [aboutLeft,aboutRight]){
   let size=base;
   leaf.style.fontSize=size+'px';
   // scrollHeight is reliable here because the real leaf has a fixed height and overflow:hidden.
   while(size>3.5 && leaf.scrollHeight>leaf.clientHeight+1){size=Math.max(3.5,size-.2);leaf.style.fontSize=size+'px';}
 }
}
function aboutRender(){
 for(const [el,i] of [[aboutLeft,aboutSpread*2],[aboutRight,aboutSpread*2+1]]){el.replaceChildren();for(const [tag,txt] of aboutPages[i]||[])el.appendChild(aboutElement(tag,txt));}
 aboutFitLeaves();
 const total=Math.max(1,Math.ceil(aboutPages.length/2));document.getElementById('aboutCount').textContent=(aboutSpread+1)+' / '+total;
 document.getElementById('aboutPrev').disabled=aboutChapter==='histoire';document.getElementById('aboutNext').disabled=aboutChapter==='naissance';
 document.querySelectorAll('.about-tab').forEach(b=>{const active=b.dataset.chapter===aboutChapter;b.classList.toggle('selected',active);b.setAttribute('aria-selected',active?'true':'false')});
}
let aboutIsTurning=false;
function aboutFlip(to,direction='forward'){
 if(aboutIsTurning)return;
 const book=document.querySelector('.about-book');
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){to();aboutRender();return;}
 aboutIsTurning=true;
 // V7 — vraie page qui se tourne : une feuille de parchemin pivote autour de la reliure,
 // recto = ancienne page, verso = nouvelle page. Fonctionne sur iPhone, Android et PC.
 const snap=el=>({html:el.innerHTML,font:el.style.fontSize});
 const oldL=snap(aboutLeft),oldR=snap(aboutRight);
 to();aboutRender();
 const newL=snap(aboutLeft),newR=snap(aboutRight);
 const fwd=direction!=='backward';
 const fixed=fwd?aboutLeft:aboutRight; // ce côté garde l'ancienne page jusqu'à la fin
 const keep=fwd?oldL:oldR, finalFixed=fwd?newL:newR;
 fixed.innerHTML=keep.html;fixed.style.fontSize=keep.font;
 const b=book.getBoundingClientRect(),lr=aboutLeft.getBoundingClientRect(),rr=aboutRight.getBoundingClientRect();
 if(!b.width||!lr.width){fixed.innerHTML=finalFixed.html;fixed.style.fontSize=finalFixed.font;aboutIsTurning=false;return;}
 const src=fwd?rr:lr, spine=(lr.right+rr.left)/2, m=Math.max(4,b.width*.018);
 const sheet=document.createElement('div');sheet.className='v7-turn';
 sheet.style.cssText=`left:${src.left-b.left-m}px;top:${src.top-b.top-m}px;width:${src.width+2*m}px;height:${src.height+2*m}px;transform-origin:${spine-(src.left-m)}px 50%`;
 const face=(cls,c)=>{const f=document.createElement('div');f.className='v7-face '+cls;f.style.padding=m+'px';const t=document.createElement('div');t.className='about-leaf v7-text';t.innerHTML=c.html;t.style.fontSize=c.font;f.appendChild(t);const s=document.createElement('i');s.className='v7-shade';f.appendChild(s);return f};
 sheet.append(face('front '+(fwd?'right':'left'),fwd?oldR:oldL),face('back '+(fwd?'left':'right'),fwd?newL:newR));
 book.appendChild(sheet);
 const end=fwd?-180:180;
 const anim=sheet.animate([
   {transform:'rotateY(0deg)'},
   {transform:`rotateY(${end*.5}deg) translateZ(18px)`,offset:.5},
   {transform:`rotateY(${end}deg)`}
 ],{duration:1250,easing:'cubic-bezier(.45,.05,.25,1)',fill:'forwards'});
 const done=()=>{fixed.innerHTML=finalFixed.html;fixed.style.fontSize=finalFixed.font;sheet.remove();aboutIsTurning=false;};
 anim.onfinish=done;anim.oncancel=done;
}
document.querySelectorAll('.about-tab').forEach(b=>b.addEventListener('click',()=>{if(aboutChapter!==b.dataset.chapter)aboutFlip(()=>{aboutChapter=b.dataset.chapter;aboutSpread=0;aboutPaginate()},'forward')}));
document.getElementById('aboutNext').addEventListener('click',()=>{if(aboutChapter==='histoire')aboutFlip(()=>{aboutChapter='naissance';aboutPaginate()});});
document.getElementById('aboutPrev').addEventListener('click',()=>{if(aboutChapter==='naissance')aboutFlip(()=>{aboutChapter='histoire';aboutPaginate()},'backward');});
const aboutReader=document.getElementById('aboutReader');
function aboutReaderFill(){const target=document.getElementById('aboutReaderContent');target.innerHTML='';for(const [tag,txt] of aboutChapters[aboutChapter])target.appendChild(aboutElement(tag,txt));document.querySelectorAll('[data-read-chapter]').forEach(b=>b.classList.toggle('selected',b.dataset.readChapter===aboutChapter));}
document.getElementById('aboutRead').addEventListener('click',()=>{aboutReaderFill();aboutReader.hidden=false;document.getElementById('aboutClose').focus()});
document.getElementById('aboutClose').addEventListener('click',()=>aboutReader.hidden=true);
aboutReader.addEventListener('click',e=>{if(e.target===aboutReader)aboutReader.hidden=true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!aboutReader.hidden)aboutReader.hidden=true});
document.querySelectorAll('[data-read-chapter]').forEach(b=>b.addEventListener('click',()=>{aboutChapter=b.dataset.readChapter;aboutSpread=0;aboutPaginate();aboutRender();aboutReaderFill();document.querySelector('.about-reader-panel').scrollTop=0}));
requestAnimationFrame(()=>{if(document.querySelector('[data-page="histoire"]').classList.contains('active')){aboutPaginate();aboutRender()}});
let aboutResizeTimer;window.addEventListener('resize',()=>{clearTimeout(aboutResizeTimer);aboutResizeTimer=setTimeout(()=>{if(document.querySelector('[data-page="histoire"]').classList.contains('active')){aboutPaginate();aboutRender()}},160)});



// Navigation mobile : fermeture après sélection, clic extérieur et touche Échap.
const mobileToggle=document.getElementById('mobileMenuToggle');
const mobileNavigation=document.getElementById('mobileNavigation');
function closeMobileMenu(){
 mobileNavigation?.classList.remove('mobile-open');
 mobileToggle?.setAttribute('aria-expanded','false');
 mobileToggle?.setAttribute('aria-label','Ouvrir le menu');
}
mobileToggle?.addEventListener('click',()=>{
 const open=mobileNavigation.classList.toggle('mobile-open');
 mobileToggle.setAttribute('aria-expanded',String(open));
 mobileToggle.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
});
mobileNavigation?.querySelectorAll('button[data-go]').forEach(button=>button.addEventListener('click',closeMobileMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMobileMenu()});
document.addEventListener('click',event=>{
 if(mobileNavigation?.classList.contains('mobile-open')&&!event.target.closest('#siteHeader'))closeMobileMenu();
});

// Mobile: les boutons hors image activent les actions déjà existantes.
document.querySelectorAll("[data-mobile-trigger]").forEach(button=>button.addEventListener("click",()=>document.getElementById(button.dataset.mobileTrigger)?.click()));


/* ===== 🔮 BOULE DE CRISTAL : zoom magique sur les pancartes et textes de l'illustration =====
   - Un clic sur une zone libre de l'illustration ouvre une boule de cristal qui agrandit l'endroit touché.
   - Les boutons de navigation (étagères, porte, retour…) gardent leur comportement habituel.
   - Le bouton « 🔮 Loupe » force le zoom partout, y compris sur les étagères et la porte. */
(function(){
 const ART='.facade-art,.interior-art,.potion-art,.grimoire-art,.vestiaire-art,.curiosites-art';
 const ZOOM=3.2;
 let loupe=false, ball=null, toggle=null;

 function build(){
  ball=document.createElement('div');
  ball.id='crystalOverlay';ball.hidden=true;
  ball.innerHTML='<div class="crystal-mist"></div><div class="crystal-ball" role="dialog" aria-label="Boule de cristal : zoom"><div class="crystal-view"></div><div class="crystal-shine"></div><div class="crystal-glass"></div></div><div class="crystal-base"></div><p class="crystal-hint">Touchez pour refermer ✨</p><button type="button" class="crystal-close" aria-label="Fermer la boule de cristal">×</button>';
  document.body.appendChild(ball);
  ball.addEventListener('click',closeBall);
  toggle=document.createElement('button');
  toggle.id='loupeToggle';toggle.type='button';toggle.setAttribute('aria-pressed','false');
  toggle.title='Zoom boule de cristal partout';toggle.innerHTML='<span aria-hidden="true">🔮</span> Loupe';
  toggle.addEventListener('click',e=>{e.stopPropagation();loupe=!loupe;toggle.classList.toggle('on',loupe);toggle.setAttribute('aria-pressed',loupe);document.body.classList.toggle('loupe-on',loupe);});
  document.body.appendChild(toggle);
  refreshToggle();
 }

 function activePage(){return document.querySelector('.page.active')}
 function onIllustration(){const p=activePage();return !!p&&['facade','boutique','potions','grimoires','vestiaire','curiosites'].includes(p.dataset.page)}
 function refreshToggle(){if(!toggle)return;toggle.style.display=onIllustration()&&ball.hidden?'':'none'}

 /* image réellement visible sous le doigt + position relative dans l'image */
 function locate(x,y){
  const page=activePage();if(!page)return null;
  const imgs=[...page.querySelectorAll(ART.split(',').map(s=>s+' img').join(','))].filter(i=>{
   const cs=getComputedStyle(i);const r=i.getBoundingClientRect();
   return cs.display!=='none'&&cs.visibility!=='hidden'&&r.width>0&&x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom&&i.naturalWidth;
  });
  if(!imgs.length)return null;
  const img=imgs.find(i=>i.classList.contains('mobile-only-art'))||imgs[0];
  const r=img.getBoundingClientRect(),cs=getComputedStyle(img),nw=img.naturalWidth,nh=img.naturalHeight;
  let sx,sy;
  if(cs.objectFit==='fill'){sx=r.width/nw;sy=r.height/nh}
  else if(cs.objectFit==='cover'){sx=sy=Math.max(r.width/nw,r.height/nh)}
  else {sx=sy=Math.min(r.width/nw,r.height/nh)}
  const dw=nw*sx,dh=nh*sy,ox=r.left+(r.width-dw)/2,oy=r.top+(r.height-dh)/2;
  const u=Math.min(1,Math.max(0,(x-ox)/dw)),v=Math.min(1,Math.max(0,(y-oy)/dh));
  return {src:img.currentSrc||img.src,u,v,w:dw,h:dh};
 }

 function openBall(x,y){
  const loc=locate(x,y);if(!loc)return false;
  const view=ball.querySelector('.crystal-view'),bl=ball.querySelector('.crystal-ball');
  const D=Math.min(innerWidth*.88,innerHeight*.74,640);
  bl.style.setProperty('--d',D+'px');
  const W=loc.w*ZOOM,H=loc.h*ZOOM;
  view.style.backgroundImage='url("'+loc.src+'")';
  view.style.backgroundSize=W+'px '+H+'px';
  view.style.backgroundPosition=(D/2-loc.u*W)+'px '+(D/2-loc.v*H)+'px';
  ball.style.setProperty('--ox',(x-innerWidth/2)+'px');ball.style.setProperty('--oy',(y-innerHeight/2)+'px');
  ball.hidden=false;void ball.offsetWidth;ball.classList.add('show');refreshToggle();
  return true;
 }
 function closeBall(){if(!ball||ball.hidden)return;ball.classList.remove('show');setTimeout(()=>{ball.hidden=true;refreshToggle()},280)}

 document.addEventListener('click',e=>{
  if(!ball||!ball.hidden||!onIllustration())return;
  const t=e.target;if(!(t instanceof Element)||!t.closest(ART))return;
  if(t.closest('button,a,input')&&!loupe)return;
  if(openBall(e.clientX,e.clientY)){e.preventDefault();e.stopImmediatePropagation();}
 },true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBall()});
 const _go=window.go;
 document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>setTimeout(refreshToggle,0)));
 new MutationObserver(refreshToggle).observe(document.querySelector('main'),{subtree:true,attributes:true,attributeFilter:['class']});
 build();
})();

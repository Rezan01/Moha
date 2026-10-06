/* ===== Moha – index.js =====
   English text lives in index.html. Arabic text lives in the AR object below.
   Each element with data-i="key" gets swapped when the language changes. */

const AR = {
  title: 'موها – استمتع بلحظتك',
  nav_home: 'الرئيسية', nav_menu: 'القائمة', nav_story: 'قصتنا', nav_loc: 'فروعنا',
  nav_contact: 'تواصل معنا', nav_order: 'اطلب الآن',

  h_1: 'استمتع', h_2: 'بلحظتك', h_3: 'مع موها!',
  sub: 'مشروبات مميزة صُنعت بحب لتُشرق يومك.',
  cta: 'استكشف القائمة',
  pop_title: 'المشروبات الأكثر طلبًا',
  view_menu: 'عرض القائمة كاملة',

  q_1: 'الجودة', q_2: 'في كل كوب',
  q_p: 'نستخدم أفضل المكونات لنمنحك أفضل تجربة.',
  f1a: 'مكونات<br>فاخرة', f1b: 'مختارة بعناية<br>لأفضل مذاق.',
  f2a: 'صُنع<br>طازجًا', f2b: 'نحضّره بحب،<br>خصيصًا لك.',
  f3a: 'صُنع<br>بحب', f3b: 'لأنك<br>تستحق الأفضل.',
  f4a: 'لكل<br>مكان', f4b: 'من ركنك المفضل<br>إليك.',

  menu_1: 'قائمة', menu_2: 'موها', menu_sub: 'مشروبات وسندويشات وحلويات صُنعت بحب.',
  tab_all: 'الكل', tab_iced: 'بارد', tab_hot: 'ساخن', tab_sandwich: 'السندويشات',
  tab_dessert: 'حلويات', tab_waffle: 'وافل',

  story_1: 'قصة', story_2: 'موها', story_sub: 'كوب واحد، لحظة واحدة، وابتسامة في كل مرة.',
  story_h: 'محضّرة بحب',
  story_p1: 'بدأت موها بفكرة بسيطة: مشروب جيد قادر على تحويل يوم عادي إلى يوم سعيد. منذ عربتنا الأولى في أديس أبابا ونحن نحضّر كل كوب بأيدينا.',
  story_p2: 'نختار مكونات فاخرة، ونحضّر كل مشروب طازجًا، ونقدمه بابتسامة، لأنك تستحق الأفضل.',
  v1h: 'مكونات فاخرة', v1p: 'مختارة بعناية لأفضل مذاق.',
  v2h: 'طازجة دائمًا', v2p: 'نحضّرها بحب، خصيصًا لك.',
  v3h: 'للجميع', v3p: 'من ركنك المفضل إليك.',

  loc_1: 'فروع', loc_2: 'موها', loc_sub: 'اعثر على أقرب فرع لموها.',
  l1h: 'أديس أبابا', l1p: 'متجرنا الأول.<br>يوميًا من 7:00 إلى 22:00',
  l2h: 'فرع بولي', l2p: 'بالقرب من شارع بولي.<br>يوميًا من 7:00 إلى 23:00',
  l3h: 'فرع ميكسيكو', l3p: 'بالقرب من ساحة ميكسيكو.<br>يوميًا من 8:00 إلى 22:00',
  l4h: 'قريبًا...', l4p: 'فرع جديد لموها في الطريق. اشترك ليصلك كل جديد.',
  badge_open: 'مفتوح الآن', badge_soon: 'قريبًا',

  ct_1: 'تواصل', ct_2: 'معنا', ct_sub: 'أسئلة أو ملاحظات أو طلبات تموين؟ يسعدنا سماعك.',
  ph_name: 'الاسم', ph_phone: 'رقم الهاتف', ph_msg: 'رسالتك', ct_btn: 'إرسال الرسالة',

  ft_tag: 'استمتع بلحظتك مع موها. مشروبات مميزة صُنعت بحب لتُشرق يومك.',
  ft_ql: 'روابط سريعة', ft_home: 'الرئيسية', ft_menu: 'القائمة', ft_story: 'قصتنا',
  ft_loc: 'الفروع', ft_contact: 'تواصل معنا',
  ft_lh: 'فروعنا', ft_l1: 'المذينب، مخطط القصر (خلف مكتبة جرير)', 
  ft_uh: 'ابقَ على اطلاع', ft_up: 'اشترك ليصلك كل جديد من المشروبات والعروض وغيرها!',
  ph_sub: 'بريدك الإلكتروني', ft_sub: 'اشترك',
  copy: '© 2024 متجر موها. جميع الحقوق محفوظة.'
};

/* Messages created by JavaScript */
const MSG = {
  en: { fill: 'Please fill in every field correctly.', sent: 'WhatsApp opened with your message. Press Send to deliver it.',
        subbad: 'Please enter a valid email.', subok: 'Thanks for subscribing!' },
  ar: { fill: 'يرجى تعبئة جميع الحقول بشكل صحيح.', sent: 'فُتح واتساب ورسالتك جاهزة. اضغط إرسال لإيصالها.',
        subbad: 'يرجى إدخال بريد إلكتروني صحيح.', subok: 'شكرًا لاشتراكك!' }
};

/* Menu items – edit names, descriptions, prices and images here */
const MENU_ITEMS = [
  { c: 'iced', p: 18, bg: '#8fd0e8', image: 'images/Iced Spanish Latte.jpg', en: ['Iced Spanish Latte', 'Smooth, creamy and perfectly balanced.'], ar: ['سبانش لاتيه بارد', 'ناعم وكريمي ومتوازن تمامًا.'] },
  { c: 'iced', p: 20, bg: '#f0d9bd', image: 'images/Ice Coffee.jpg', en: ['Moha Caramel', 'Rich caramel with a hint of sweetness.'], ar: ['موها كراميل', 'كراميل غني بلمسة حلاوة.'] },
  { c: 'iced', p: 22, bg: '#a9cf8d', image: 'images/Matcha Vanilla.png', en: ['Pistachio Latte', 'Nutty, smooth and oh-so-delicious.'], ar: ['فستق لاتيه', 'بنكهة المكسرات، ناعم ولذيذ جدًا.'] },
  { c: 'iced', p: 18, bg: '#f0d9bd', image: 'images/Watermelon Slushie.png', en: ['Watermelon Slushie', 'A cool, refreshing watermelon drink.'], ar: ['سلاش البطيخ', 'مشروب بطيخ بارد ومنعش.'] },
  { c: 'iced', p: 20, bg: '#c8b0dc', image: 'images/RedBull Slushie.png', en: ['Red Bull Slushie', 'An icy, energizing slushie.'], ar: ['سلاش ريد بول', 'مشروب مثلج ومنعش.'] },
  { c: 'sandwich', p: 22, bg: '#f0d9bd', image: 'images/Halloumi Sandwich.jpg', en: ['Halloumi Sandwich', 'Grilled halloumi with fresh ingredients.'], ar: ['سندويش حلومي', 'جبنة حلومي مشوية مع مكونات طازجة.'] },
  { c: 'sandwich', p: 24, bg: '#a9cf8d', image: 'images/Turkey Sandwich.jpg', en: ['Turkey Sandwich', 'Sliced turkey with fresh ingredients.'], ar: ['سندويش ديك رومي', 'شرائح ديك رومي مع مكونات طازجة.'] },
  { c: 'dessert', p: 16, bg: '#f0d9bd', image: 'images/Mini Pancake.jpg', en: ['Mini Pancakes', 'Bite-sized pancakes with sweet toppings.'], ar: ['بان كيك صغير', 'قطع بان كيك صغيرة مع إضافات حلوة.'] },
  { c: 'waffle', p: 20, bg: '#c8b0dc', image: 'images/Chocolate Waffle Fingers.png', en: ['Chocolate Waffle Fingers', 'Crispy waffle fingers with chocolate.'], ar: ['أصابع وافل بالشوكولاتة', 'أصابع وافل مقرمشة مع الشوكولاتة.'] },
  { c: 'waffle', p: 24, bg: '#f0d9bd', image: 'images/Belgian Chocolate Waffle Fingers.png', en: ['Belgian Chocolate Waffle Fingers', 'Waffle fingers with Belgian chocolate.'], ar: ['أصابع وافل بالشوكولاتة البلجيكية', 'أصابع وافل مع الشوكولاتة البلجيكية.'] },
  { c: 'dessert', p: 22, bg: '#a9cf8d', image: 'images/Belgian Chocolate Crepe.jpg', en: ['Belgian Chocolate Crepe', 'A soft crepe filled with Belgian chocolate.'], ar: ['كريب بالشوكولاتة البلجيكية', 'كريب طري محشو بالشوكولاتة البلجيكية.'] }
];

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const PAGES = ['home', 'menu', 'story', 'locations', 'contact'];

/* Remember the English text that is already written in the HTML */
const EN = {};
$$('[data-i]').forEach(el => { EN[el.dataset.i] = el.innerHTML; });
$$('[data-ph]').forEach(el => { EN['ph_' + el.dataset.ph] = el.placeholder; });

let lang = 'ar';          // Arabic is the default
let filter = 'all';
try { if (localStorage.getItem('moha-lang') === 'en') lang = 'en'; } catch (e) {}

const t = k => (lang === 'ar' && AR[k] != null) ? AR[k] : (EN[k] != null ? EN[k] : '');

/* ----- drinks ----- */
function card(d) {
  const [name, text] = d[lang];
  const picture = d.image
    ? `<img src="${d.image}" alt="${name}">`
    : '<svg viewBox="0 0 90 120" aria-hidden="true"><use href="#cup"/></svg>';
  const price = Number.isFinite(d.p)
    ? `<span class="pr" dir="ltr">${new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-SA', { style: 'currency', currency: 'SAR' }).format(d.p)}</span>`
    : '';
  return `<article class="card">
    <div class="im" style="background:${d.bg}">${picture}</div>
    <div class="tx"><h3>${name}</h3><p>${text}</p>${price}</div>
  </article>`;
}
function renderMenuItems() {
  $('#pc').innerHTML = MENU_ITEMS.slice(0, 4).map(card).join('');
  $('#mc').innerHTML = MENU_ITEMS.filter(d => filter === 'all' || d.c === filter).map(card).join('');
}
$$('#tb button').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.c;
  $$('#tb button').forEach(x => x.classList.toggle('on', x === b));
  renderMenuItems();
}));

/* ----- language ----- */
function setLang(l) {
  lang = l;
  const h = document.documentElement;
  h.lang = l;
  h.dir = l === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i]').forEach(el => { el.innerHTML = t(el.dataset.i); });
  $$('[data-ph]').forEach(el => { el.placeholder = t('ph_' + el.dataset.ph); });
  $('#lang').textContent = l === 'ar' ? 'EN' : 'عربي';
  $('#lang').setAttribute('aria-label', l === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  $$('.note[data-k]').forEach(el => { el.textContent = MSG[lang][el.dataset.k]; });
  try { localStorage.setItem('moha-lang', l); } catch (e) {}
  renderMenuItems();
}
$('#lang').addEventListener('click', () => setLang(lang === 'ar' ? 'en' : 'ar'));

/* ----- pages (hash routing: #home, #menu, #story, #locations, #contact) ----- */
function route() {
  let p = location.hash.slice(1);
  if (!PAGES.includes(p)) p = 'home';
  $$('.pg').forEach(s => s.classList.toggle('on', s.id === p));
  $$('[data-nav]').forEach(a => a.classList.toggle('on', a.dataset.nav === p));
  $('#hd').classList.remove('o');
  $('#burger').setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

/* ----- mobile menu ----- */
$('#burger').addEventListener('click', () => {
  const open = $('#hd').classList.toggle('o');
  $('#burger').setAttribute('aria-expanded', String(open));
});
$$('nav a').forEach(a => a.addEventListener('click', () => $('#hd').classList.remove('o')));

/* ----- forms ----- */
function note(sel, key, ok) {
  const el = $(sel);
  el.dataset.k = key;
  el.textContent = MSG[lang][key];
  el.className = 'note ' + (ok ? 'ok' : 'err');
}
const validEmail = v => /\S+@\S+\.\S+/.test(v);
const validPhone = v => {
  const digits = v.replace(/\D/g, '');
  return /^\+?[0-9\s().-]+$/.test(v) && digits.length >= 7 && digits.length <= 15;
};

$('#cf').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#cn').value.trim();
  const phone = $('#cp').value.trim();
  const message = $('#cm').value.trim();
  const ok = name && validPhone(phone) && message;
  note('#fmsg', ok ? 'sent' : 'fill', ok);
  if (ok) {
    const labels = lang === 'ar'
      ? ['الاسم', 'رقم الهاتف', 'الرسالة']
      : ['Name', 'Phone', 'Message'];
    const text = `${labels[0]}: ${name}\n${labels[1]}: ${phone}\n${labels[2]}: ${message}`;
    window.open(`https://wa.me/966566585058?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    e.target.reset();
  }
});
const subscriptionForm = $('#sf');
if (subscriptionForm) {
  subscriptionForm.addEventListener('submit', e => {
    e.preventDefault();
    const ok = validEmail($('#se').value);
    note('#smsg', ok ? 'subok' : 'subbad', ok);
    if (ok) e.target.reset();
  });
}

/* ----- start ----- */
setLang(lang);
route();
document.documentElement.classList.remove('pre');

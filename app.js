'use strict';

// This is a sample-only UI. Deliberately no forms, uploads, credentials,
// camera APIs, persistence, analytics, or network requests.
const copy = {
  en: {
    notice: 'FICTIONAL DEMO · SAMPLE DATA ONLY · NOT AFFILIATED WITH UAE PASS',
    eyebrow: 'A LITTLE LESS FRICTION', hero: 'Your identity.<br>A simpler <em>journey.</em>',
    intro: 'Explore a thoughtfully designed onboarding experience. One clear step at a time, from hello to all set.',
    footer: 'A design prototype, built for a closer look.<br>No real accounts. No personal data collected.',
    journey: 'TRY THE EXPERIENCE', live: 'Interactive demo', privacy: 'Everything here is simulated. Nothing is uploaded.',
    about: 'About this demo', privacyButton: 'Privacy & demo details', back: '← Back', step: 'STEP', of: 'OF', sample: 'FICTIONAL SAMPLE',
    welcomeTitle: 'A good beginning.<br>A seamless next step.',
    welcomeCopy: 'Take a guided tour of a digital identity journey, using a ready-made sample profile.',
    benefits: ['One journey', 'Clear steps', 'Zero uploads'], benefitsSub: ['From start to finish', 'At your own pace', 'Sample data only'],
    start: 'Explore the demo', resume: 'Preview the sample profile', welcomeHelper: 'No sign-up needed. Just a little curiosity.',
    profileTitle: 'Meet your demo profile.', profileCopy: 'We’ve prepared everything for you. These fictional details let you explore without entering personal information.',
    name: 'Display name', email: 'Email address', member: 'Member reference', profileNext: 'Use this sample profile',
    faceTitle: 'A familiar face.', faceCopy: 'In a real identity service, this step would check a face. Here, a simple animation demonstrates the experience.',
    faceNotice: 'No camera is used. No photo or biometric information is captured.', faceNext: 'Simulate face check', checking: 'Simulating check…',
    contactTitle: 'The details, in one place.', contactCopy: 'Review the sample contact details. There is no SMS, email, or one-time code to enter.', phone: 'Mobile number', contactNext: 'Confirm sample details',
    docsTitle: 'A little paperwork.<br>Already taken care of.', docsCopy: 'Add the two built-in sample documents to explore the document review step.',
    front: 'Sample document · front', rear: 'Sample document · back', addSample: 'Click to add a fictional document', loaded: 'Sample attached · no file uploaded', docsNext: 'Review sample documents', docsHint: 'Add both samples to continue. Real uploads are disabled.',
    reviewTitle: 'Looking good so far.', reviewCopy: 'Here’s a quick summary of your fictional journey. All checks on this page are simulated.',
    profile: 'Demo profile', face: 'Face check', documents: 'Sample documents', status: 'Ready', simulated: 'Simulated', count: '2 samples attached', reviewNext: 'Continue to demo approval',
    approveTitle: 'One final moment.', approveCopy: 'This screen illustrates an approval experience. No notification is sent to any device or service.', approveNext: 'Simulate approval', approving: 'Simulating approval…',
    doneTitle: 'You’re all set.', doneCopy: 'You’ve reached the end of the demo journey. A few considered steps, one simple experience.', result: 'Demo completed', resultValue: 'Sample journey only', doneNotice: 'This demonstration has not created an account, verified an identity, or contacted an external service.', restart: 'Explore again', details: 'About this experience',
  },
  ar: {
    notice: 'عرض تجريبي خيالي · بيانات نموذجية فقط · غير تابع للهوية الرقمية الإماراتية',
    eyebrow: 'خطوات أسهل', hero: 'هويتك.<br>رحلة <em>أبسط.</em>', intro: 'استكشف تجربة تسجيل مصممة بعناية. خطوة واضحة في كل مرة، من البداية إلى النهاية.', footer: 'نموذج تصميم تفاعلي للاستكشاف.<br>لا حسابات حقيقية ولا جمع للبيانات الشخصية.',
    journey: 'جرّب التجربة', live: 'عرض تفاعلي', privacy: 'كل الخطوات محاكاة. لا يتم رفع أي بيانات.', about: 'عن هذا العرض', privacyButton: 'الخصوصية وتفاصيل العرض', back: '→ رجوع', step: 'الخطوة', of: 'من', sample: 'بيانات خيالية',
    welcomeTitle: 'بداية جميلة.<br>وخطوة تالية سهلة.', welcomeCopy: 'استكشف رحلة هوية رقمية باستخدام ملف شخصي نموذجي جاهز.', benefits: ['رحلة واحدة', 'خطوات واضحة', 'دون رفع ملفات'], benefitsSub: ['من البداية للنهاية', 'بالسرعة المناسبة لك', 'بيانات نموذجية فقط'], start: 'استكشف العرض', resume: 'معاينة الملف النموذجي', welcomeHelper: 'لا حاجة للتسجيل. ابدأ الاستكشاف فقط.',
    profileTitle: 'تعرّف على ملفك التجريبي.', profileCopy: 'كل شيء جاهز. تساعدك هذه التفاصيل الخيالية على الاستكشاف دون إدخال معلومات شخصية.', name: 'الاسم', email: 'البريد الإلكتروني', member: 'مرجع العضو', profileNext: 'استخدم هذا الملف النموذجي',
    faceTitle: 'وجه مألوف.', faceCopy: 'هذه الخطوة توضح تجربة التحقق من الوجه من خلال رسوم توضيحية فقط.', faceNotice: 'لا تُستخدم الكاميرا ولا يتم التقاط صور أو بيانات حيوية.', faceNext: 'محاكاة التحقق من الوجه', checking: 'جارٍ المحاكاة…',
    contactTitle: 'التفاصيل في مكان واحد.', contactCopy: 'راجع تفاصيل الاتصال النموذجية. لن يتم إرسال رسائل أو طلب رمز تحقق.', phone: 'رقم الهاتف', contactNext: 'تأكيد التفاصيل النموذجية',
    docsTitle: 'مستنداتك.<br>جاهزة للتجربة.', docsCopy: 'أضف المستندين النموذجيين المدمجين لاستكشاف خطوة مراجعة المستندات.', front: 'مستند نموذجي · الوجه الأمامي', rear: 'مستند نموذجي · الوجه الخلفي', addSample: 'اضغط لإضافة مستند خيالي', loaded: 'تم إرفاق النموذج · دون رفع ملف', docsNext: 'مراجعة المستندات النموذجية', docsHint: 'أضف النموذجين للمتابعة. رفع الملفات الحقيقية غير متاح.',
    reviewTitle: 'كل شيء يبدو جاهزًا.', reviewCopy: 'هذا ملخص رحلتك الخيالية. جميع عمليات التحقق هنا محاكاة.', profile: 'الملف النموذجي', face: 'التحقق من الوجه', documents: 'المستندات النموذجية', status: 'جاهز', simulated: 'محاكاة', count: 'تم إرفاق نموذجين', reviewNext: 'المتابعة للموافقة التجريبية',
    approveTitle: 'لحظة أخيرة.', approveCopy: 'توضح هذه الشاشة تجربة الموافقة. لن يتم إرسال أي إشعار لأي جهاز أو خدمة.', approveNext: 'محاكاة الموافقة', approving: 'جارٍ محاكاة الموافقة…',
    doneTitle: 'اكتملت الرحلة.', doneCopy: 'وصلت إلى نهاية الرحلة التجريبية. خطوات مدروسة وتجربة بسيطة.', result: 'اكتمل العرض', resultValue: 'رحلة نموذجية فقط', doneNotice: 'لم يقم هذا العرض بإنشاء حساب أو التحقق من هوية أو الاتصال بخدمة خارجية.', restart: 'استكشف مجددًا', details: 'عن هذه التجربة',
  },
};

const icons = {
  welcome: '<path d="M8 9h16v17H8zM12 5h16v17M12 15h8m-8 5h5"/>',
  profile: '<circle cx="16" cy="11" r="5"/><path d="M6 27c0-11 20-11 20 0"/>',
  contact: '<rect x="5" y="8" width="22" height="17" rx="3"/><path d="m6 10 10 8 10-8"/>',
  documents: '<rect x="4" y="7" width="24" height="19" rx="3"/><circle cx="11" cy="15" r="2"/><path d="M8 21h6m5-7h5m-5 5h5"/>',
  review: '<path d="m9 16 5 5 10-11"/><circle cx="16" cy="16" r="12"/>',
};
const screen = document.getElementById('screen');
const progress = document.getElementById('progress');
const dialog = document.getElementById('about-dialog');
let language = 'en';
let step = 0;
let documents = [false, false];
let timer = null;
let busy = false;
const slugs = ['welcome', 'profile', 'face-check', 'contact', 'documents', 'review', 'approval', 'complete'];
const t = () => copy[language];
const icon = name => `<div class="screen-icon" aria-hidden="true"><svg viewBox="0 0 32 32">${icons[name]}</svg></div>`;
const next = (label, action = 'next', disabled = false) => `<button class="primary" data-action="${action}" ${disabled ? 'disabled' : ''}>${label}<span class="arrow" aria-hidden="true">${language === 'ar' ? '←' : '→'}</span></button>`;
const row = (label, value) => `<div class="data-row"><span>${label}</span><strong>${value}</strong></div>`;

function go(value, focus = true) {
  clearTimeout(timer);
  busy = false;
  step = Math.max(0, Math.min(slugs.length - 1, value));
  history.replaceState(null, '', `#${slugs[step]}`);
  render();
  if (focus) screen.focus({ preventScroll: true });
}

function render() {
  const c = t();
  progress.innerHTML = Array.from({ length: 7 }, (_, index) => `<li class="${index < step - 1 ? 'complete' : index === step - 1 ? 'active' : ''}" ${index === step - 1 ? 'aria-current="step"' : ''}><span hidden>${c.step} ${index + 1}</span></li>`).join('');
  let body = '';
  const kicker = `<span class="screen-kicker">${step === 0 ? 'IDENTITY STUDIO / 01' : `${c.step} ${String(step).padStart(2, '0')} ${c.of} 07`}</span>`;
  const heading = (title, description) => `<h2>${title}</h2><p class="screen-copy">${description}</p>`;
  if (step === 0) {
    body = icon('welcome') + heading(c.welcomeTitle, c.welcomeCopy) + `<div class="benefits">${c.benefits.map((item, i) => `<div><b>${['01', '07', '00'][i]}</b>${item}<br><span>${c.benefitsSub[i]}</span></div>`).join('')}</div>` + next(c.start) + `<button class="secondary" data-action="next">${c.resume}</button><p class="helper">${c.welcomeHelper}</p>`;
  } else if (step === 1) {
    body = icon('profile') + heading(c.profileTitle, c.profileCopy) + `<span class="sample-label">${c.sample}</span><div class="sample-data">${row(c.name, 'Alex Morgan')}${row(c.email, 'alex@example.test')}${row(c.member, 'DEMO-0001')}</div>` + next(c.profileNext);
  } else if (step === 2) {
    body = heading(c.faceTitle, c.faceCopy) + '<div class="face-frame" aria-hidden="true"><svg viewBox="0 0 80 100"><circle cx="40" cy="30" r="20"/><path d="M4 100c0-52 72-52 72 0"/></svg><span class="scan-line"></span></div>' + `<div class="notice">${c.faceNotice}</div>` + next(busy ? c.checking : c.faceNext, 'simulate', busy);
  } else if (step === 3) {
    body = icon('contact') + heading(c.contactTitle, c.contactCopy) + `<span class="sample-label">${c.sample}</span><div class="sample-data">${row(c.phone, '+000 00 000 0000')}${row(c.email, 'alex@example.test')}</div>` + next(c.contactNext);
  } else if (step === 4) {
    body = icon('documents') + heading(c.docsTitle, c.docsCopy) + [c.front, c.rear].map((label, i) => `<button class="document ${documents[i] ? 'loaded' : ''}" data-action="document" data-index="${i}" aria-pressed="${documents[i]}"><span class="doc-icon" aria-hidden="true">▤</span><span><strong>${label}</strong><small>${documents[i] ? c.loaded : c.addSample}</small></span><span class="doc-status" aria-hidden="true">${documents[i] ? '✓' : '+'}</span></button>`).join('') + `<p class="helper">${c.docsHint}</p><br>` + next(c.docsNext, 'next', !documents.every(Boolean));
  } else if (step === 5) {
    body = icon('review') + heading(c.reviewTitle, c.reviewCopy) + `<div class="sample-data">${row(c.profile, 'Alex Morgan')}${row(c.face, c.simulated)}${row(c.documents, c.count)}${row(c.status, c.status)}</div>` + next(c.reviewNext);
  } else if (step === 6) {
    body = '<div class="approval-visual" aria-hidden="true"><div class="approval-ring"><img src="./mark.svg" alt=""></div></div>' + heading(c.approveTitle, c.approveCopy) + `<div class="notice">${c.sample} · DEMO-0001</div>` + next(busy ? c.approving : c.approveNext, 'simulate', busy);
  } else {
    body = '<div class="success-mark" aria-hidden="true">✓</div>' + heading(c.doneTitle, c.doneCopy) + `<div class="sample-data">${row(c.result, c.resultValue)}</div><p class="success-note">${c.doneNotice}</p>` + next(c.restart, 'restart') + `<button class="secondary" data-action="about">${c.details}</button>`;
  }
  screen.innerHTML = (step > 0 && step < 7 ? `<button class="back" data-action="back">${c.back}</button><br>` : '') + kicker + body;
  screen.setAttribute('aria-busy', String(busy));
}

screen.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button || button.disabled || busy) return;
  switch (button.dataset.action) {
    case 'next': if (step !== 4 || documents.every(Boolean)) go(step + 1); break;
    case 'back': go(step - 1); break;
    case 'restart': documents = [false, false]; go(0); break;
    case 'about': dialog.showModal(); break;
    case 'document': {
      const index = Number(button.dataset.index);
      if (index !== 0 && index !== 1) return;
      documents[index] = !documents[index];
      render();
      screen.querySelector(`[data-index="${index}"]`).focus();
      break;
    }
    case 'simulate': busy = true; render(); timer = setTimeout(() => go(step + 1), 1100); break;
  }
});
function setLanguage() {
  const c = t();
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  const bindings = { 'demo-notice': c.notice, eyebrow: c.eyebrow, 'hero-title': c.hero, 'hero-copy': c.intro, 'intro-footer': c.footer, 'journey-label': c.journey, 'live-label': c.live, 'privacy-line': c.privacy, 'privacy-button': c.privacyButton };
  for (const [id, value] of Object.entries(bindings)) document.getElementById(id).innerHTML = value;
  document.getElementById('about-button').innerHTML = `${c.about} <span aria-hidden="true">↗</span>`;
  document.getElementById('language-button').textContent = language === 'en' ? 'العربية' : 'English';
  document.getElementById('language-button').lang = language === 'en' ? 'ar' : 'en';
  render();
}
document.getElementById('language-button').addEventListener('click', () => { language = language === 'en' ? 'ar' : 'en'; setLanguage(); });
for (const id of ['about-button', 'privacy-button']) document.getElementById(id).addEventListener('click', () => dialog.showModal());
for (const button of dialog.querySelectorAll('.dialog-close, .dialog-close-action')) button.addEventListener('click', () => dialog.close());
document.querySelector('.brand').addEventListener('click', event => { event.preventDefault(); go(0); });
go(0, false);

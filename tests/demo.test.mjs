import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const source = await readFile(new URL('../app.js', import.meta.url), 'utf8');
function setup() {
  class Element {
    constructor() { this.innerHTML = ''; this.listeners = {}; this.attributes = {}; this.open = false; }
    addEventListener(type, fn) { this.listeners[type] = fn; }
    setAttribute(key, value) { this.attributes[key] = value; }
    focus() {}
    showModal() { this.open = true; }
    close() { this.open = false; }
    querySelector() { return new Element(); }
    querySelectorAll() { return [closeButton]; }
  }
  const closeButton = new Element();
  const elements = new Map();
  const element = id => { if (!elements.has(id)) elements.set(id, new Element()); return elements.get(id); };
  let timer;
  const history = { hash: '', replaceState(_state, _title, url) { this.hash = url; } };
  const context = { document: { getElementById: element, documentElement: {}, querySelector: () => element('brand') }, history, setTimeout: fn => { timer = fn; return 1; }, clearTimeout: () => { timer = null; } };
  vm.runInNewContext(source, context);
  return {
    context, history, element, closeButton,
    click(action, index) {
      element('screen').listeners.click({ target: { closest: () => ({ disabled: false, dataset: { action, index } }) } });
    },
    finishTimer() { assert.ok(timer, 'simulation timer exists'); timer(); },
    get html() { return element('screen').innerHTML; },
  };
}

test('complete journey requires two sample documents and supports restart', () => {
  const app = setup();
  assert.equal(app.history.hash, '#welcome');
  app.click('next');
  assert.match(app.html, /alex@example\.test/);
  app.click('next');
  app.click('simulate');
  assert.match(app.html, /Simulating check/);
  app.click('next');
  assert.equal(app.history.hash, '#face-check', 'busy simulation rejects extra clicks');
  app.finishTimer();
  assert.equal(app.history.hash, '#contact');
  app.click('next');
  app.click('next');
  assert.equal(app.history.hash, '#documents', 'cannot skip both sample documents');
  app.click('document', '0');
  app.click('next');
  assert.equal(app.history.hash, '#documents', 'cannot skip the second sample');
  app.click('document', '1');
  app.click('next');
  assert.equal(app.history.hash, '#review');
  app.click('next');
  app.click('simulate');
  app.finishTimer();
  assert.equal(app.history.hash, '#complete');
  assert.match(app.html, /has not created an account/);
  app.click('restart');
  assert.equal(app.history.hash, '#welcome');
  app.click('next'); app.click('next'); app.click('simulate'); app.finishTimer(); app.click('next');
  assert.doesNotMatch(app.html, /class="document loaded"/, 'restart clears sample attachments');
});

test('back navigation, Arabic direction, and privacy dialog work', () => {
  const app = setup();
  app.click('next'); app.click('back');
  assert.equal(app.history.hash, '#welcome');
  app.element('language-button').listeners.click();
  assert.equal(app.context.document.documentElement.lang, 'ar');
  assert.equal(app.context.document.documentElement.dir, 'rtl');
  assert.match(app.html, /استكشف العرض/);
  app.element('language-button').listeners.click();
  assert.equal(app.context.document.documentElement.dir, 'ltr');
  app.element('privacy-button').listeners.click();
  assert.equal(app.element('about-dialog').open, true);
  app.closeButton.listeners.click();
  assert.equal(app.element('about-dialog').open, false);
});

test('demo contains no credential entry, upload, camera, persistence, or network code', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  assert.doesNotMatch(html + source, /<(input|form|textarea|iframe|video)\b/i);
  assert.doesNotMatch(source, /\b(fetch|XMLHttpRequest|WebSocket|getUserMedia|localStorage|sessionStorage|indexedDB)\b/);
  assert.doesNotMatch(css, /@import|https?:\/\//);
  assert.match(html, /NOT AFFILIATED WITH UAE PASS/);
  assert.match(html, /connect-src 'none'; form-action 'none'/);
  assert.ok(config.headers[0].headers.some(h => h.key === 'Permissions-Policy' && h.value.includes('camera=()')));
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /max-width:720px/);
});

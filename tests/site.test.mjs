import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(.:\/)/, '$1');
const read = (file) => readFileSync(join(root, file), 'utf8');

test('homepage presents federal contracting credentials beside the SBA badge', () => {
  const html = read('index.html');
  assert.match(html, /class="contractor-strip"/);
  assert.match(html, /Veteran-Owned Certified/);
  assert.match(html, /<dt>CAGE<\/dt><dd>22AE5<\/dd>/);
  assert.match(html, /<dt>UEI<\/dt><dd>H6B9D2B9GL35<\/dd>/);
  assert.match(html, /<dt>DUNS<\/dt><dd>10-015-3590<\/dd>/);
  assert.equal(existsSync(join(root, 'assets', 'veteran-owned-certified.jpg')), true);
});

test('public pages do not expose missing-image placeholder instructions', () => {
  for (const file of ['index.html', 'about.html', 'services.html']) {
    assert.doesNotMatch(read(file), /DROP PHOTO HERE/);
  }
});

test('pages request versioned shared assets so the deployed update bypasses immutable caches', () => {
  const html = read('index.html');
  assert.match(html, /href="\/styles\.css\?v=20260923b"/);
  assert.match(html, /src="\/main\.js\?v=20260923"/);
});

test('text-bearing buttons inherit the light page text color', () => {
  const css = read('styles.css');
  const buttonReset = css.match(/button\{([^}]*)\}/)?.[1] ?? '';
  assert.match(buttonReset, /(?:^|;)\s*color:\s*inherit\s*(?:;|$)/);
});

test('homepage service links deep-link to named service sections', () => {
  const home = read('index.html');
  const services = read('services.html');
  for (const id of ['fractional-coo', 'fractional-ceo', 'ma-integration', 'business-turnaround', 'lean-six-sigma', 'supply-chain']) {
    assert.match(home, new RegExp(`href="/services#${id}"`));
    assert.match(services, new RegExp(`id="${id}"`));
  }
});

test('mobile navigation and motion preferences have accessible fallbacks', () => {
  const html = read('index.html');
  const js = read('main.js');
  const css = read('styles.css');
  assert.match(html, /class="nav-toggle"[^>]+aria-controls="primary-navigation"[^>]+aria-expanded="false"/);
  assert.match(html, /class="nav-links" id="primary-navigation"/);
  assert.match(js, /setAttribute\('aria-expanded'/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});

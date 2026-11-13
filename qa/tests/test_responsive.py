"""Production smoke & responsive checks. Usage: python qa/tests/test_responsive.py
Requires: pip install playwright; chromium installed; run Next.js on port 8765.
Environment override: SITE_URL=http://localhost:8765 ; CHROME_PATH=/usr/bin/chromium
"""
import os, json, pathlib, sys
from playwright.sync_api import sync_playwright

URL=os.environ.get('SITE_URL','http://127.0.0.1:8765')
CHROME=os.environ.get('CHROME_PATH','/usr/bin/chromium')
ROOT=pathlib.Path(__file__).resolve().parents[1]
SHOTS=ROOT/'screenshots'
SHOTS.mkdir(exist_ok=True)
WIDTHS=[320,360,375,390,414,560,768,820,980,1024,1199,1280,1440,1920,2560,3440]
summary=[]; errors=[]; failed=[]
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path=CHROME,args=['--no-sandbox','--disable-dev-shm-usage'])
    for width in WIDTHS:
        context=browser.new_context(viewport={'width':width,'height':900}, device_scale_factor=1, reduced_motion='reduce')
        page=context.new_page()
        page.on('pageerror', lambda e: errors.append(str(e)))
        resp=page.goto(URL, wait_until='load', timeout=30000)
        page.wait_for_timeout(300)
        dims=page.evaluate('''() => ({inner: window.innerWidth,scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,body:document.body.scrollWidth,logoNatural:document.querySelector('.site-header__brand img').naturalWidth,imagesBroken:[...document.images].filter(i=>i.complete && !i.naturalWidth).map(i=>i.src),oversize:[...document.querySelectorAll('*')].filter(x=>{const r=x.getBoundingClientRect();const s=getComputedStyle(x);return r.width>0 && r.left < -1 && s.position!=='fixed' && s.position!=='absolute' && s.position!=='sticky' && !x.closest('.signature-strip')}).slice(0,5).map(x=>x.className)})''')
        if dims['scroll']>dims['inner']+1 or dims['imagesBroken'] or resp.status != 200:
            failed.append({'width':width,'info':dims,'http':resp.status})
        summary.append({'width':width,'http':resp.status,'scrollWidth':dims['scroll'],'brokenImages':dims['imagesBroken']})
        if width in (390,820,1440,1920):
            page.screenshot(path=str(SHOTS/f'home-{width}.png'),full_page=True)
            page.screenshot(path=str(SHOTS/f'hero-{width}.png'),full_page=False)
        if width in (390,820):
            toggle=page.locator('.menu-toggle')
            toggle.click()
            assert toggle.get_attribute('aria-expanded')=='true',f'menu not open {width}'
            assert page.locator('.mobile-nav').get_attribute('aria-hidden')=='false'
            page.screenshot(path=str(SHOTS/f'menu-{width}.png'),full_page=False)
            page.keyboard.press('Escape')
            assert toggle.get_attribute('aria-expanded')=='false',f'menu not closed {width}'
            page.locator('.menu-toggle').click()
            page.locator('.mobile-nav a[href="#contato"]').click()
            assert toggle.get_attribute('aria-expanded')=='false',f'menu not closed on link click {width}'
        if width==390:
            page.locator('#contact-name').scroll_into_view_if_needed()
            page.locator('button[type=submit]').click()
            assert not page.locator('#form-error').is_hidden(),'name required error missing'
            page.locator('#contact-name').fill('Teste QA')
            page.locator('#contact-message').fill('Preciso de comunicação visual para a minha marca.')
            page.evaluate('''() => {window.open = (url) => { window.__openedUrl=url; return {opener:null}; }}''')
            page.locator('button[type=submit]').click()
            msg=page.evaluate('window.__openedUrl')
            assert msg and msg.startswith('https://wa.me/5545999656388?text='),f'WhatsApp form URL failed: {msg}'
            assert 'Teste%20QA' in msg,'Name not encoded in WhatsApp URL'
            page.screenshot(path=str(SHOTS/'contact-390.png'),full_page=False)
        context.close()
    browser.close()
print(json.dumps({'viewports':summary,'errors':errors,'failed':failed},ensure_ascii=False,indent=2))
if errors or failed: sys.exit(1)

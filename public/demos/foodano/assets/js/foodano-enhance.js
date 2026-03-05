/**
 * FOODANO FUTURISTIC ENHANCEMENT SCRIPT
 * Non-destructive overlay: dynamic effects + USD → INR converter
 * Exchange rate: 1 USD = ₹84 (approx. 2026)
 */
(function () {
    'use strict';

    const USD_TO_INR = 84;

    /* ─────────────────────────────────────────────
       1. CURRENCY CONVERTER  $x.xx  →  ₹x,xxx
    ───────────────────────────────────────────── */
    function convertCurrency() {
        const USD_RE = /\$\s?(\d{1,6}(?:\.\d{1,2})?)/g;

        function processNode(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                if (USD_RE.test(node.textContent)) {
                    node.textContent = node.textContent.replace(
                        /\$\s?(\d{1,6}(?:\.\d{1,2})?)/g,
                        function (match, amount) {
                            const inr = Math.round(parseFloat(amount) * USD_TO_INR);
                            return '₹\u202f' + inr.toLocaleString('en-IN');
                        }
                    );
                }
            } else if (
                node.nodeType === Node.ELEMENT_NODE &&
                !['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME'].includes(node.tagName)
            ) {
                node.childNodes.forEach(processNode);
            }
        }

        function runAll() {
            processNode(document.body);
            // Handle value attributes on inputs
            document.querySelectorAll('input[value]').forEach(function (input) {
                input.value = input.value.replace(
                    /\$\s?(\d{1,6}(?:\.\d{1,2})?)/g,
                    function (_, amount) {
                        return '₹\u202f' + Math.round(parseFloat(amount) * USD_TO_INR).toLocaleString('en-IN');
                    }
                );
            });
        }

        runAll();

        // Use MutationObserver for dynamic prices (e.g., carousels, modals)
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    processNode(node);
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    /* ─────────────────────────────────────────────
       2. PARTICLE CANVAS  (floating connected dots)
    ───────────────────────────────────────────── */
    function initParticles() {
        var canvas = document.createElement('canvas');
        canvas.id = 'foodano-particles';
        document.body.insertBefore(canvas, document.body.firstChild);

        var ctx = canvas.getContext('2d');
        var W, H, particles = [];
        var COLORS = ['76,175,80', '0,212,255', '129,199,132'];
        var N = window.innerWidth < 768 ? 35 : 55;

        function resize() {
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        for (var i = 0; i < N; i++) {
            particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.45,
                vy: (Math.random() - 0.5) * 0.45,
                r: Math.random() * 1.8 + 0.6,
                op: Math.random() * 0.4 + 0.2,
                c: COLORS[Math.floor(Math.random() * COLORS.length)]
            });
        }

        var mouse = { x: -999, y: -999 };
        document.addEventListener('mousemove', function (e) {
            mouse.x = e.clientX; mouse.y = e.clientY;
        });

        function draw() {
            ctx.clearRect(0, 0, W, H);

            // mouse-repel & connection lines
            particles.forEach(function (p, i) {
                // gentle mouse push
                var dx = p.x - mouse.x, dy = p.y - mouse.y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    p.x += dx / dist * 1.2;
                    p.y += dy / dist * 1.2;
                }

                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;

                // draw dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(' + p.c + ',' + p.op + ')';
                ctx.fill();

                // connection lines
                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var d2x = p.x - p2.x, d2y = p.y - p2.y;
                    var d2 = Math.sqrt(d2x * d2x + d2y * d2y);
                    if (d2 < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(76,175,80,' + (0.18 * (1 - d2 / 130)) + ')';
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    /* ─────────────────────────────────────────────
       3. SCROLL REVEAL  (IntersectionObserver)
    ───────────────────────────────────────────── */
    function initScrollReveal() {
        var SEL = [
            '.product-item', '.single-product', '.product-wrap', '.shop-item',
            '.blog-item', '.blog-post', '.single-blog',
            '.team-item', '.team-member',
            '.feature-item', '.service-item',
            '.category-item', '.brand-item',
            '.testimonial-item', '.review-item'
        ].join(',');

        var els = document.querySelectorAll(SEL);
        els.forEach(function (el, i) {
            el.classList.add('foodano-reveal');
            el.style.transitionDelay = (i % 5 * 0.08) + 's';
        });

        // Section title in-view trigger
        var titles = document.querySelectorAll('.section-title, .section-heading');
        titles.forEach(function (t) { t.classList.add('foodano-reveal'); });

        if (!window.IntersectionObserver) {
            // Fallback: just show everything
            document.querySelectorAll('.foodano-reveal').forEach(function (el) {
                el.classList.add('is-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (entry.target.classList.contains('section-title') ||
                        entry.target.classList.contains('section-heading')) {
                        entry.target.classList.add('in-view');
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.foodano-reveal').forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ─────────────────────────────────────────────
       4. CUSTOM CURSOR  (ring + dot)
    ───────────────────────────────────────────── */
    function initCursor() {
        if (window.matchMedia('(pointer: coarse)').matches) return; // skip touch devices

        var ring = document.createElement('div');
        ring.id = 'foodano-cursor-ring';
        var dot = document.createElement('div');
        dot.id = 'foodano-cursor-dot';
        document.body.appendChild(ring);
        document.body.appendChild(dot);

        var mx = 0, my = 0, cx = 0, cy = 0;

        document.addEventListener('mousemove', function (e) {
            mx = e.clientX; my = e.clientY;
            dot.style.left = mx + 'px';
            dot.style.top = my + 'px';
        });

        (function animCursor() {
            cx += (mx - cx) * 0.14;
            cy += (my - cy) * 0.14;
            ring.style.left = (cx - 11) + 'px';
            ring.style.top = (cy - 11) + 'px';
            requestAnimationFrame(animCursor);
        })();

        // Scale ring on interactive elements
        document.querySelectorAll('a, button, .btn, input').forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                ring.style.transform = 'scale(2.1)';
                ring.style.background = 'rgba(76,175,80,0.12)';
                ring.style.borderColor = '#00d4ff';
            });
            el.addEventListener('mouseleave', function () {
                ring.style.transform = 'scale(1)';
                ring.style.background = 'transparent';
                ring.style.borderColor = '#4CAF50';
            });
        });
    }

    /* ─────────────────────────────────────────────
       5. BUTTON RIPPLE
    ───────────────────────────────────────────── */
    function initRipple() {
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('.btn, button, input[type="submit"], a.button');
            if (!btn) return;

            var rect = btn.getBoundingClientRect();
            var ripple = document.createElement('span');
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;

            ripple.style.cssText =
                'position:absolute;width:0;height:0;border-radius:50%;' +
                'background:rgba(255,255,255,0.45);' +
                'top:' + y + 'px;left:' + x + 'px;' +
                'transform:translate(-50%,-50%);' +
                'animation:foodanoRipple 0.65s linear forwards;' +
                'pointer-events:none;';

            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            setTimeout(function () { ripple.remove(); }, 700);
        });

        var st = document.createElement('style');
        st.textContent =
            '@keyframes foodanoRipple{to{width:340px;height:340px;opacity:0;}}';
        document.head.appendChild(st);
    }

    /* ─────────────────────────────────────────────
       6. PRODUCT CARD 3-D TILT
    ───────────────────────────────────────────── */
    function initTilt() {
        var cards = document.querySelectorAll(
            '.product-item, .single-product, .product-wrap, .shop-item'
        );
        cards.forEach(function (card) {
            card.addEventListener('mousemove', function (e) {
                var r = card.getBoundingClientRect();
                var rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
                var ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
                card.style.transform =
                    'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-8px)';
                card.style.transition = 'transform 0.08s ease';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
                card.style.transition = 'transform 0.45s ease';
            });
        });
    }

    /* ─────────────────────────────────────────────
       7. TYPING EFFECT on hero headings
    ───────────────────────────────────────────── */
    function initTypingEffect() {
        var headings = document.querySelectorAll(
            '.slider-content h1, .hero-content h1, .banner-content h1,' +
            '.slider-content h2, .hero-content h2, .banner-content h2'
        );
        headings.forEach(function (h) {
            var text = h.textContent.trim();
            if (!text || h.dataset.typed) return;
            h.dataset.typed = '1';
            h.textContent = '';

            var i = 0;
            var timer = setInterval(function () {
                h.textContent += text[i];
                i++;
                if (i >= text.length) clearInterval(timer);
            }, 55);
        });
    }

    /* ─────────────────────────────────────────────
       8. ADD FUTURISTIC DIVIDERS between sections
    ───────────────────────────────────────────── */
    function insertDividers() {
        var sections = document.querySelectorAll('section');
        sections.forEach(function (sec) {
            var div = document.createElement('div');
            div.className = 'foodano-divider';
            sec.parentNode.insertBefore(div, sec.nextSibling);
        });
    }

    /* ─────────────────────────────────────────────
       9. WELCOME TOAST  (INR notice)
    ───────────────────────────────────────────── */
    function showToast() {
        var toast = document.createElement('div');
        toast.id = 'foodano-toast';
        toast.innerHTML =
            '<div style="display:flex;align-items:center;gap:12px;">' +
            '<span style="font-size:22px;line-height:1;">🌿</span>' +
            '<div>' +
            '<div id="foodano-toast-title">Foodano &nbsp;✦&nbsp; Enhanced</div>' +
            '<div id="foodano-toast-sub">Prices displayed in ₹ Indian Rupees</div>' +
            '</div>' +
            '</div>';
        document.body.appendChild(toast);

        setTimeout(function () { toast.classList.add('show'); }, 600);
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 600);
        }, 5000);
    }

    /* ─────────────────────────────────────────────
       10. COUNTER ANIMATION  (odometer-style)
    ───────────────────────────────────────────── */
    function initCounters() {
        var counters = document.querySelectorAll(
            '.counter-num, .fact-count, .odometer, [data-count], .count-number'
        );
        if (!window.IntersectionObserver || !counters.length) return;

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var el = entry.target;
                var end = parseInt(el.textContent.replace(/[^\d]/g, ''), 10);
                if (!end) return;
                var cur = 0, step = end / 60;
                var t = setInterval(function () {
                    cur += step;
                    if (cur >= end) { cur = end; clearInterval(t); }
                    el.textContent = Math.floor(cur).toLocaleString('en-IN');
                }, 16);
                obs.unobserve(el);
            });
        }, { threshold: 0.6 });

        counters.forEach(function (c) { obs.observe(c); });
    }

    /* ─────────────────────────────────────────────
       INIT  (run everything after DOM is ready)
    ───────────────────────────────────────────── */
    function init() {
        convertCurrency();
        initParticles();
        initScrollReveal();
        initCursor();
        initRipple();
        initTilt();
        insertDividers();
        initCounters();
        showToast();

        // Typing effect fires slightly later (after slider may init)
        setTimeout(initTypingEffect, 800);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

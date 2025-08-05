{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u23548 \u33322 \u33756 \u21333 \u20999 \u25442 \
const navToggle = document.querySelector('.nav-toggle');\
const navMenu = document.querySelector('.nav-menu');\
\
navToggle.addEventListener('click', () => \{\
    navMenu.classList.toggle('active');\
    navToggle.classList.toggle('active');\
\});\
\
// \uc0\u28857 \u20987 \u23548 \u33322 \u38142 \u25509 \u21518 \u20851 \u38381 \u33756 \u21333 \
document.querySelectorAll('.nav-link').forEach(link => \{\
    link.addEventListener('click', () => \{\
        navMenu.classList.remove('active');\
        navToggle.classList.remove('active');\
    \});\
\});\
\
// \uc0\u24179 \u28369 \u28378 \u21160 \
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        const target = document.querySelector(this.getAttribute('href'));\
        if (target) \{\
            target.scrollIntoView(\{\
                behavior: 'smooth',\
                block: 'start'\
            \});\
        \}\
    \});\
\});\
\
// \uc0\u28378 \u21160 \u26102 \u30340 \u23548 \u33322 \u26639 \u25928 \u26524 \
window.addEventListener('scroll', () => \{\
    const navbar = document.querySelector('.navbar');\
    if (window.scrollY > 100) \{\
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';\
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';\
    \} else \{\
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';\
        navbar.style.boxShadow = 'none';\
    \}\
\});\
\
// \uc0\u25991 \u31456 \u21345 \u29255 \u21160 \u30011 \
const observerOptions = \{\
    threshold: 0.1,\
    rootMargin: '0px 0px -100px 0px'\
\};\
\
const observer = new IntersectionObserver((entries) => \{\
    entries.forEach(entry => \{\
        if (entry.isIntersecting) \{\
            entry.target.classList.add('animate');\
        \}\
    \});\
\}, observerOptions);\
\
document.querySelectorAll('.post-card').forEach(card => \{\
    observer.observe(card);\
\});\
\
// \uc0\u36820 \u22238 \u39030 \u37096 \u25353 \u38062 \
const backToTop = document.getElementById('backToTop');\
\
window.addEventListener('scroll', () => \{\
    if (window.scrollY > 300) \{\
        backToTop.classList.add('show');\
    \} else \{\
        backToTop.classList.remove('show');\
    \}\
\});\
\
backToTop.addEventListener('click', () => \{\
    window.scrollTo(\{\
        top: 0,\
        behavior: 'smooth'\
    \});\
\});\
\
// \uc0\u25628 \u32034 \u21151 \u33021 \
const searchInput = document.getElementById('searchInput');\
const postsGrid = document.getElementById('postsGrid');\
const postCards = document.querySelectorAll('.post-card');\
\
searchInput.addEventListener('input', (e) => \{\
    const searchTerm = e.target.value.toLowerCase();\
    \
    postCards.forEach(card => \{\
        const title = card.querySelector('.post-title').textContent.toLowerCase();\
        const excerpt = card.querySelector('.post-excerpt').textContent.toLowerCase();\
        const category = card.querySelector('.post-category').textContent.toLowerCase();\
        \
        if (title.includes(searchTerm) || excerpt.includes(searchTerm) || category.includes(searchTerm)) \{\
            card.style.display = 'block';\
        \} else \{\
            card.style.display = 'none';\
        \}\
    \});\
\});\
\
// \uc0\u32852 \u31995 \u34920 \u21333 \u25552 \u20132 \
document.querySelector('.contact-form').addEventListener('submit', (e) => \{\
    e.preventDefault();\
    alert('\uc0\u24863 \u35874 \u24744 \u30340 \u30041 \u35328 \u65281 \u25105 \u20250 \u23613 \u24555 \u22238 \u22797 \u24744 \u12290 ');\
    e.target.reset();\
\});\
\
// \uc0\u28155 \u21152 \u39029 \u38754 \u21152 \u36733 \u21160 \u30011 \
window.addEventListener('load', () => \{\
    document.body.classList.add('loaded');\
\});\
\
// \uc0\u40736 \u26631 \u36319 \u38543 \u25928 \u26524 \u65288 \u21487 \u36873 \u65289 \
document.addEventListener('mousemove', (e) => \{\
    const cursor = document.querySelector('.cursor');\
    if (cursor) \{\
        cursor.style.left = e.clientX + 'px';\
        cursor.style.top = e.clientY + 'px';\
    \}\
\});\
}
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "cta-img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link, i) => link.textContent = siteContent.nav['nav-item-' + (i + 1)]);
let logoImg = document.getElementById('logo-img');
logoImg.src = siteContent.nav['nav-img-src'];
let ctaH1 = document.querySelectorAll('.cta h1');
let ctaBtn = document.querySelectorAll('.cta button');
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['cta-img-src'];

let features = document.querySelector('.main-content .top-content .text-content:first-child');
features.children[0].textContent = siteContent['main-content']['features-h4'];
features.children[1].textContent = siteContent['main-content']['features-content'];
let about = document.querySelector('.main-content .top-content .text-content:last-child');
about.children[0].textContent = siteContent['main-content']['about-h4'];
about.children[1].textContent = siteContent['main-content']['about-content'];
let services = document.querySelector('.main-content .bottom-content .text-content:first-child');
services.children[0].textContent = siteContent['main-content']['services-h4'];
services.children[1].textContent = siteContent['main-content']['services-content'];
let product = document.querySelector('.main-content .bottom-content .text-content:nth-child(2)');
product.children[0].textContent = siteContent['main-content']['product-h4'];
product.children[1].textContent = siteContent['main-content']['product-content'];
let vision = document.querySelector('.main-content .bottom-content .text-content:last-child');
vision.children[0].textContent = siteContent['main-content']['vision-h4'];
vision.children[1].textContent = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


/*
contact
  contact-h4
  address
  phone
  email
footer
  copyright
*/
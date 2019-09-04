const siteContent = {
  "nav": {
    "nav-item-0": "Home",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Pricing",
    "nav-img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br/>Is<br/>Awesome",
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
    "address" : "123 Way 456 Street<br/>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

let homeLink = document.createElement('a');
homeLink.href = '#';
let pricing = document.createElement('a');
pricing.href = '#';

let headerNav = document.querySelector('header nav');
headerNav.prepend(homeLink);
headerNav.appendChild(pricing);

let navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav['nav-item-' + i];
  link.style.color = 'green'; 
});

let logoImg = document.getElementById('logo-img');
logoImg.src = siteContent.nav['nav-img-src'];
let ctaH1 = document.querySelector('.cta h1');
ctaH1.innerHTML = siteContent.cta.h1;
let ctaBtn = document.querySelector('.cta button');
ctaBtn.textContent = siteContent.cta.button;
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['cta-img-src'];

let textContainers = document.querySelectorAll('.main-content .text-content');
let containerSections = ['features', 'about', 'services', 'product', 'vision'];
textContainers.forEach((container, i) => {
  let section = containerSections[i];
  container.children[0].textContent = siteContent['main-content'][section + '-h4'];
  container.children[1].textContent = siteContent['main-content'][section + '-content'];
});

let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent.contact['contact-h4'];
contact.children[1].innerHTML = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

let footerCopyright = document.querySelector('footer p:first-child');
footerCopyright.textContent = siteContent.footer.copyright;

//stretch
let heading4 = document.querySelectorAll('h4');
heading4.forEach(h => h.style.color = 'blue');
footerCopyright.style.color = 'red';
ctaH1.style.color = 'pink';
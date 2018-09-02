window.sr = ScrollReveal();

var slideUp = {
  delay: 25,
  distance: '20px',
  duration: 500,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 10,
  opacity: 0,
  origin: 'bottom',
  rotate: {
      x: 0,
      y: 0,
      z: 0,
  },
  scale: 1,
  cleanup: true,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
  }
};

var slideUp2 = {
  delay: 0,
  distance: '30px',
  duration: 300,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 100,
  opacity: 0,
  origin: 'right',
  rotate: {
      x: 0,
      y: 0,
      z: 0,
  },
  scale: 1,
  cleanup: true,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
      top: 0,
      right: 0,
      bottom: -100,
      left: 0,
  }
};

var slideLeft = {
  delay: 0,
  distance: '30px',
  duration: 2600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'right',
  rotate: {
      x: 0,
      y: 0,
      z: 0,
  },
  scale: 1,
  cleanup: true,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
      top: -500,
      right: 0,
      bottom: 0,
      left: 0,
  }
};

var slideb = {
  delay: 0,
  distance: '10px',
  duration: 2600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'bottom',
  rotate: {
      x: 0,
      y: 0,
      z: 0,
  },
  scale: 1,
  cleanup: true,
  container: document.documentElement,
  desktop: true,
  mobile: true,
  reset: false,
  useDelay: 'always',
  viewFactor: 0.0,
  viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
  }
};


sr.reveal('.item', slideUp);
sr.reveal('.service-head', slideUp);
sr.reveal('div.movie', slideUp);
sr.reveal('div.photo', slideUp);
sr.reveal('.edit_agency', slideUp);

sr.reveal('.price-head', slideUp);
sr.reveal('.price-body-comments', slideUp);
sr.reveal('.price-body-price', slideUp);

sr.reveal('.contact-head', slideUp);
sr.reveal('.contact-body-contact', slideUp);

sr.reveal('.message-head', slideUp);
sr.reveal('.message-body .head', slideUp);
sr.reveal('.message-body .wrapper', slideUp);

sr.reveal('.home-body-catchphrase', slideLeft);
sr.reveal('.background_image1', slideb);
sr.reveal('.background_image2', slideb);

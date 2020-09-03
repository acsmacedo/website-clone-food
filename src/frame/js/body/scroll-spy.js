// ********************************************* version 1.0.0
export function scrollSpy() { 
  const target = getComputedStyle(document.documentElement).getPropertyValue('--scroll-spy');

  if (target) {
    const targetList = document.querySelectorAll(target);

    targetList.forEach((elem) => { 
      const links = elem.querySelectorAll('a');
      
      links.forEach((el) => {
        const href = el.getAttribute('href');
        const element = document.querySelector(href);
        const height = element.offsetTop;
        
        window.addEventListener('scroll', function() {
          change(elem, el, height)
        })
      
        window.addEventListener('load', function() {
          change(elem, el, height)
        })
        
      })
    })
  }
}


function change(elem, el, height) {
  const active = elem.querySelectorAll('a[data-active]');

  if (height <= window.scrollY) {
    el.setAttribute('data-active', 'active');
  } else {
    el.removeAttribute('data-active');
  }

  active.forEach((el, i) => {
    if (i == (active.length - 1)) {
      el.setAttribute('data-correct', 'active');
    } else {
      el.removeAttribute('data-correct');
    }
  })
}

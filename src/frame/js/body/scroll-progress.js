// ********************************************* version 1.0.0
export function scrollProgress() {
  const target = getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress');
  const targetOptions = getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress-options');

  if (target) { 
    const targetList = document.querySelectorAll(target);
    const targetOptionsList = targetOptions.trim().split(', ');
    
    targetList.forEach((el, i) => { 
      const progress = document.createElement('div');
      const progressActive = document.createElement('div');
      const child = el.firstElementChild;

      progress.appendChild(progressActive);
      progress.classList.add('scroll-progress');
      el.insertAdjacentElement('afterbegin', progress);

      if (targetOptionsList[i].includes('window')) {
        window.addEventListener('scroll', function() {
          const total = document.querySelector('body').scrollHeight - window.innerHeight;
          const width = window.scrollY * 100 / total;
          progressActive.style.width = width + '%';
        })
      } else {
        child.addEventListener('scroll', function(e) {
          const total = child.scrollHeight - child.clientHeight;
          const width = e.target.scrollTop * 100 / total;
          progressActive.style.width = width + '%';
        })
      }
    })
  }
}
